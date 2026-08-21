'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { DRONES, Drone } from '@/data/drones';

type DroneContextValue = {
    activeIndex: number;
    activeDrone: Drone;
    setActiveIndex: (i: number) => void;
};

const DroneContext = createContext<DroneContextValue | null>(null);
export function DroneProvider({ children }: { children: ReactNode }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <DroneContext.Provider
            value={{
                activeIndex,
                activeDrone: DRONES[activeIndex],
                setActiveIndex,
            }}
        >
            {children}
        </DroneContext.Provider>
    );

}

export function useActiveDrone() {
    const ctx = useContext(DroneContext);
    if (!ctx) throw new Error('useActiveDrone debe usarse dentro de <DroneProvider>');
    return ctx;
}
