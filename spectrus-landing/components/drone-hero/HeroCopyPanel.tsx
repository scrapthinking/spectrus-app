'use client';

import { useActiveDrone } from './DroneContext';

export default function HeroCopyPanel() {
  const { activeDrone } = useActiveDrone();
  return (
    <div className="max-w-[460px]">
      <span className="inline-block text-xs uppercase tracking-widest text-[var(--accent)] border border-[var(--accent-soft)] rounded-full px-3.5 py-1.5 mb-5">
        {activeDrone.eyebrow}
      </span>
      <h1 className="text-5xl font-bold leading-tight mb-4">
        {activeDrone.code}<br />{activeDrone.name}
      </h1>
      <p className="text-[15px] leading-relaxed text-[var(--fg-dim)] mb-7">{activeDrone.desc}</p>
      <div className="flex gap-7 mb-8">
        {activeDrone.specs.map(([val, lbl]) => (
          <div key={lbl} className="border-l border-white/10 pl-3.5">
            <div className="text-xl font-bold">{val}</div>
            <div className="text-[11px] uppercase tracking-wide text-[var(--fg-dim)]">{lbl}</div>
          </div>
        ))}
      </div>
      <button className="bg-[var(--fg)] text-[#05060a] rounded-full px-6 py-3.5 font-semibold text-sm">
        Explorar {activeDrone.code} →
      </button>
    </div>
  );
}
