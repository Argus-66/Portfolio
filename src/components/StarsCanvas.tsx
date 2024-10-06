"use client";

import React, { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref = useRef<any>();
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.001}  // Adjusted size for performance
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[0]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={<div>Loading...</div>}>  {/* Optional loading fallback */}
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
