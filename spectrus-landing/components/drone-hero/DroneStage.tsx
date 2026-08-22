'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { createRenderer, createScene, createCamera, addBaseLights, loadGLBCached } from '@/lib/three';
import { DRONES } from '@/data/drones';
import { POS3D, relIndex } from './heroPositions';
import { useActiveDrone } from './DroneContext';
import * as THREE from 'three';

export default function DroneStage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const { activeIndex, setActiveIndex } = useActiveDrone();
    const modelInstances = useRef<Record<number, { root: THREE.Group; baseScale: number; opacityProxy: { v: number } }>>({});
    const rimLightRef = useRef<THREE.PointLight | null>(null);
    const prevIndexRef = useRef(activeIndex);
    const transitioningRef = useRef(false);

    useEffect(() => {
        if (!canvasRef.current || !stageRef.current) return;
        const rect = stageRef.current.getBoundingClientRect();
        const renderer = createRenderer(canvasRef.current);
        renderer.setSize(rect.width, rect.height);
        const scene = createScene();
        const camera = createCamera(rect.width / rect.height);
        const { rimLight } = addBaseLights(scene, 0x4ea8ff);
        rimLightRef.current = rimLight;

        function setModelOpacity(root: THREE.Object3D, value: number) {
            root.traverse((obj) => {
                if ((obj as THREE.Mesh).isMesh) {
                    const mesh = obj as THREE.Mesh;
                    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                    mats.forEach((m) => { m.transparent = true; m.opacity = value; });
                }
            });

        }

        function applyPositions(newIndex: number, instant = false, direction: number = 1) {
            DRONES.forEach((_, i) => {
                const inst = modelInstances.current[i];
                if (!inst) return;
                const rel = relIndex(i, newIndex, DRONES.length);

                // --- Idea #7: Dirección de entrada según el scroll ---
                let t;
                if (rel === 0) {
                    t = POS3D.center;
                } else if (rel === 1) {
                    // Forward: next drone peeks from right / Backward: old center exits right
                    t = direction >= 0 ? POS3D.peekInRight : POS3D.exitOutRight;
                } else if (rel === -1) {
                    // Forward: old center exits left / Backward: previous drone peeks from left
                    t = direction >= 0 ? POS3D.exitOutLeft : POS3D.peekInLeft;
                } else {
                    t = POS3D.hidden;
                }

                const s = t.scale * inst.baseScale;

                if (instant) {
                    inst.root.position.set(t.x, t.y, t.z);
                    inst.root.rotation.y = t.ry;
                    inst.root.rotation.z = 0;
                    inst.root.scale.setScalar(s);
                    setModelOpacity(inst.root, t.opacity);
                } else {
                    transitioningRef.current = true;

                    // --- Idea #1: Arco curvo (eases diferentes para X/Z vs Y) ---
                    gsap.to(inst.root.position, {
                        x: t.x, z: t.z,
                        duration: t.duration,
                        ease: 'power3.out',
                    });
                    gsap.to(inst.root.position, {
                        y: t.y,
                        duration: t.duration,
                        ease: 'back.out(1.2)',
                    });

                    // --- Idea #2: Stagger — rotación con delay ---
                    gsap.to(inst.root.rotation, {
                        y: t.ry,
                        duration: t.duration,
                        delay: 0.1,
                        ease: 'sine.inOut',
                    });

                    // --- Idea #4: Tilt reactivo (solo dron que llega al centro) ---
                    if (rel === 0) {
                        gsap.fromTo(inst.root.rotation,
                            { z: direction * -0.15 },
                            {
                                z: 0,
                                duration: t.duration * 0.8,
                                delay: 0.15,
                                ease: 'power2.out',
                                onComplete: () => { transitioningRef.current = false; },
                            },
                        );
                    } else {
                        // Resetear tilt de drones que salen
                        gsap.to(inst.root.rotation, {
                            z: 0,
                            duration: 0.6,
                            ease: 'power2.out',
                        });
                    }

                    // --- Idea #2 + #3: Stagger + elastic ease en escala ---
                    gsap.to(inst.root.scale, {
                        x: s, y: s, z: s,
                        duration: t.duration,
                        delay: 0.15,
                        ease: rel === 0 ? 'elastic.out(1, 0.6)' : 'power3.out',
                    });

                    // Opacidad
                    gsap.to(inst.opacityProxy, {
                        v: t.opacity,
                        duration: t.duration * 0.8,
                        ease: 'sine.inOut',
                        onUpdate: () => setModelOpacity(inst.root, inst.opacityProxy.v),
                    });
                }
            });

            // --- Idea #5: Thruster glow flash ---
            if (!instant && rimLightRef.current) {
                const rl = rimLightRef.current;
                gsap.killTweensOf(rl, 'intensity');
                gsap.fromTo(rl,
                    { intensity: 5 },
                    { intensity: 2.4, duration: 1.0, ease: 'power2.out' },
                );
            }
        }

        // Carga los 4 modelos (cacheados por ruta — si repites archivo de prueba, no se re-descarga)

        DRONES.forEach((d, index) => {
            loadGLBCached(d.glb).then((root) => {
                const box = new THREE.Box3().setFromObject(root);
                const size = new THREE.Vector3(); box.getSize(size);
                const center = new THREE.Vector3(); box.getCenter(center);
                root.position.sub(center);
                const maxDim = Math.max(size.x, size.y, size.z) || 1;
                const baseScale = 2.4 / maxDim;
                const wrapper = new THREE.Group();
                wrapper.add(root);
                scene.add(wrapper);
                modelInstances.current[index] = { root: wrapper, baseScale, opacityProxy: { v: 0 } };
                applyPositions(activeIndex, true);
            }).catch((err) => {

                console.warn(`No se pudo cargar el GLB de ${d.code} (${d.glb}).`, err);
            });

        });
        let raf: number;
        function animate() {
            raf = requestAnimationFrame(animate);
            const t = Date.now() * 0.0012;
            Object.values(modelInstances.current).forEach((inst, i) => {
                inst.root.rotation.y += 0.0025;

                // --- Idea #6: Bobbing idle mejorado ---
                // Bobbing vertical (original)
                inst.root.position.y += Math.sin(t + i) * 0.0006;
                // Balanceo lateral sutil
                inst.root.position.x += Math.sin(t * 0.7 + i * 2.5) * 0.00015;
                // Micro-tilt en Z (solo cuando no hay transición activa)
                if (!transitioningRef.current) {
                    const idleTilt = Math.sin(t * 0.5 + i * 1.8) * 0.015;
                    inst.root.rotation.z += (idleTilt - inst.root.rotation.z) * 0.03;
                }
            });

            renderer.render(scene, camera);

        }

        animate();

        function onResize() {
            if (!stageRef.current) return;
            const r = stageRef.current.getBoundingClientRect();
            renderer.setSize(r.width, r.height);
            camera.aspect = r.width / r.height;
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', onResize);

        // Expone applyPositions/rimLight para que el efecto de abajo (sync con index) los use

        (stageRef.current as any).__applyPositions = applyPositions;
        (stageRef.current as any).__rimLight = rimLight;

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            renderer.dispose();
        };

    }, []); // setup una sola vez

    // Cada vez que cambia el dron activo (por scroll o por click), animamos con dirección

    useEffect(() => {
        const apply = (stageRef.current as any)?.__applyPositions;
        const rimLight = (stageRef.current as any)?.__rimLight as THREE.PointLight | undefined;

        // Determinar dirección del scroll/cambio
        const direction = activeIndex >= prevIndexRef.current ? 1 : -1;
        prevIndexRef.current = activeIndex;

        if (apply) apply(activeIndex, false, direction);
        if (rimLight) rimLight.color.set(DRONES[activeIndex].accent);
    }, [activeIndex]);

    return (
        <div ref={stageRef} className="relative h-[70vh] w-full">
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        </div>
    );
}
