"use client";

import LightRays from "@/components/common/effects/LightRays";


export default function BackgroundEffect() {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <LightRays
                raysOrigin="top-center"
                raysColor="#6d6d6d"
                raysSpeed={0.6}
                lightSpread={10}
                rayLength={2}
                followMouse={false}
                mouseInfluence={0.1}
                noiseAmount={0}
                fadeDistance={2}
                distortion={0}
                saturation={0}
                className="custom-rays"
            />
        </div>
    );
}