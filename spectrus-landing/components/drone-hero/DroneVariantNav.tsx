'use client';
import { DRONES } from '@/data/drones';
import { useActiveDrone } from './DroneContext';

export default function DroneVariantNav() {
    const { activeIndex, setActiveIndex } = useActiveDrone();
    const goTo = (i: number) => setActiveIndex((i + DRONES.length) % DRONES.length);
    return (

        <div className="absolute left-[6vw] bottom-14 flex items-center gap-5 z-10">

            <button onClick={() => goTo(activeIndex - 1)} className="h-10 w-10 rounded-full border border-white/20 text-white">‹</button>
            <div className="flex gap-2.5">
                {DRONES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all ${i === activeIndex ? 'w-[22px] bg-[var(--accent)]' : 'w-2 bg-white/25'}`}
                    />

                ))}

            </div>
            <button onClick={() => goTo(activeIndex + 1)} className="h-10 w-10 rounded-full border border-white/20 text-white">›</button>
        </div>
    );
}

