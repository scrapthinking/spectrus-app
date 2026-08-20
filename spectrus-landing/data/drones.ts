export type Drone = {
    id: string;
    code: string;
    name: string;
    eyebrow: string;
    desc: string;
    accent: string; // hex
    specs: [string, string][]; // [valor, etiqueta]
    glb: string; // ruta en /public/models
};

export const DRONES: Drone[] = [
    {
        id: 'scout',
        code: 'SPX-01',
        name: 'Scout',
        eyebrow: 'Scout Class',
        desc: 'Reconocimiento ágil y silencioso. Diseñado para exploración rápida en espacios reducidos, con estabilización de vuelo de precisión.',
        accent: '#4ea8ff',
        specs: [['28 min', 'Autonomía'], ['6.2 km', 'Alcance'], ['890 g', 'Peso']],
        glb: '/models/drone.glb',
    },
    {
        id: 'racer',
        code: 'SPX-02',
        name: 'Racer',
        eyebrow: 'Racer Class',
        desc: 'Construido para velocidad. Chasis de fibra de carbono y sistema de vuelo FPV de baja latencia.',
        accent: '#ff5b3d',
        specs: [['140 km/h', 'Vel. máx'], ['3.4 km', 'Alcance'], ['420 g', 'Peso']],
        glb: '/models/drone_1.glb',
    },
    {
        id: 'cargo',
        code: 'SPX-03',
        name: 'Cargo',
        eyebrow: 'Cargo Class',
        desc: 'Capacidad de carga optimizada para entregas de última milla, con navegación autónoma.',
        accent: '#3ddc84',
        specs: [['5 kg', 'Carga máx'], ['12 km', 'Alcance'], ['2.1 kg', 'Peso']],
        glb: '/models/drone_2.glb',
    },
    {
        id: 'recon',
        code: 'SPX-04',
        name: 'Recon',
        eyebrow: 'Recon Class',
        desc: 'Vigilancia de largo alcance con cámara térmica integrada y sistema anti-viento.',
        accent: '#c58cff',
        specs: [['52 min', 'Autonomía'], ['18 km', 'Alcance'], ['1.4 kg', 'Peso']],
        glb: '/models/rc_drone.glb',
    },
];
