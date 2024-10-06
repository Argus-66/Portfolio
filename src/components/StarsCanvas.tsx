"use client";

import React, { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref = useRef<any>();
    
    // Reduce the number of points to improve performance
    const sphere = useMemo(() => random.inSphere(new Float32Array(1000), { radius: 1.2 }), []);  // Reduced from 5000 to 2000

    useFrame((state, delta) => {
        // Optional: Reduce the rotation speed for better performance
        ref.current.rotation.x -= delta / 20; // Slower rotation
        ref.current.rotation.y -= delta / 30; // Slower rotation
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.002}  // Slightly larger size for better visibility without increasing performance cost much
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[0]">
        <Canvas camera={{ position: [0, 0, 1] }} >
            <Suspense fallback={<div>Loading...</div>}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;