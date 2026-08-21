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

        function applyPositions(newIndex: number, instant = false) {
            DRONES.forEach((_, i) => {
                const inst = modelInstances.current[i];
                if (!inst) return;
                const rel = relIndex(i, newIndex, DRONES.length);
                const t = rel === 0 ? POS3D.center : rel === 1 ? POS3D.peekIn : rel === -1 ? POS3D.exitOut : POS3D.hidden;
                const s = t.scale * inst.baseScale;
                if (instant) {
                    inst.root.position.set(t.x, t.y, t.z);
                    inst.root.rotation.y = t.ry;
                    inst.root.scale.setScalar(s);
                    setModelOpacity(inst.root, t.opacity);

                } else {
                    gsap.to(inst.root.position, { x: t.x, y: t.y, z: t.z, duration: t.duration, ease: 'sine.inOut' });
                    gsap.to(inst.root.rotation, { y: t.ry, duration: t.duration, ease: 'sine.inOut' });
                    gsap.to(inst.root.scale, { x: s, y: s, z: s, duration: t.duration, ease: 'sine.inOut' });
                    gsap.to(inst.opacityProxy, {
                        v: t.opacity, duration: t.duration, ease: 'sine.inOut',
                        onUpdate: () => setModelOpacity(inst.root, inst.opacityProxy.v),
                    });
                }

            });

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
                inst.root.position.y += Math.sin(t + i) * 0.0006;
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

    // Cada vez que cambia el dron activo (por scroll o por click), animamos

    useEffect(() => {
        const apply = (stageRef.current as any)?.__applyPositions;
        const rimLight = (stageRef.current as any)?.__rimLight as THREE.PointLight | undefined;
        if (apply) apply(activeIndex, false);
        if (rimLight) rimLight.color.set(DRONES[activeIndex].accent);
    }, [activeIndex]);

    return (
        <div ref={stageRef} className="relative h-[70vh] w-full">
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        </div>
    );
}
