'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { DRONES } from '@/data/drones';
import { DroneProvider, useActiveDrone } from './DroneContext';
import DroneStage from './DroneStage';
import DroneVariantNav from './DroneVariantNav';
import HeroCopyPanel from './HeroCopyPanel';

function HeroInner() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { activeIndex, setActiveIndex, activeDrone } = useActiveDrone();
    const activeIndexRef = useRef(activeIndex);

    // Mantener el ref sincronizado con el estado
    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    // Color-morph del fondo, sincronizado al dron activo

    useEffect(() => {
        const root = document.documentElement;
        gsap.to(root, {
            '--accent': activeDrone.accent,
            duration: 0.8,
            ease: 'power2.inOut',

            // GSAP no interpola hex directamente en variables CSS de forma nativa entre navegadores,

            // igual que en el prototipo — si notas que no hace transición de color, usa el mismo

            // truco de animateCssVar() con un proxy {t:0→1} que ya usamos ahí.

        } as any);

    }, [activeDrone]);

    // ScrollTrigger: pinea el hero y sincroniza el índice activo con el progreso del scroll

    useEffect(() => {
        if (!heroRef.current) return;
        const st = ScrollTrigger.create({
            trigger: heroRef.current,
            start: 'top top',
            end: '+=300%',
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.6,
            onUpdate: (self) => {
                const idx = Math.min(DRONES.length - 1, Math.round(self.progress * (DRONES.length - 1)));
                if (idx !== activeIndexRef.current) setActiveIndex(idx);
            },
        });

        return () => st.kill();

    }, [setActiveIndex]);

    return (
        <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-[var(--bg-base)]">
            <div className="grid grid-cols-2 items-center h-full px-[6vw]">
                <HeroCopyPanel />
                <DroneStage />
            </div>
            <DroneVariantNav />
        </div>
    );

}

export default function DroneHero() {
    return (
        <DroneProvider>
            <HeroInner />
        </DroneProvider>
    );
}
