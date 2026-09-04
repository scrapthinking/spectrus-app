export const POS3D = {
    center:       { x: 0,    y: 0,    z: 0,    ry: 0,    scale: 1,    opacity: 1,   duration: 1.35 },
    // Forward (scroll down): next peeks from bottom-right, previous exits top-left
    peekInRight:  { x: 2.6,  y: -1.6, z: -2.0, ry: 0.7,  scale: 0.28, opacity: 0.4, duration: 1.35 },
    exitOutLeft:  { x: -2.8, y: 1.7,  z: -1.6, ry: -0.7, scale: 0.5,  opacity: 0,   duration: 1.35 },
    // Backward (scroll up): next peeks from bottom-left, previous exits top-right
    peekInLeft:   { x: -2.6, y: -1.6, z: -2.0, ry: -0.7, scale: 0.28, opacity: 0.4, duration: 1.35 },
    exitOutRight: { x: 2.8,  y: 1.7,  z: -1.6, ry: 0.7,  scale: 0.5,  opacity: 0,   duration: 1.35 },
    hidden:       { x: 0,    y: 0,    z: -6,   ry: 0,    scale: 0.15, opacity: 0,   duration: 0    },
} as const;

export function relIndex(i: number, ref: number, total: number) {
    let d = i - ref;
    while (d > total / 2) d -= total;
    while (d < -total / 2) d += total;
    return d;
}
