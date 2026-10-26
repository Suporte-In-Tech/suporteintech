"use client";

import * as React from "react";
import { OrbConnecting } from "@/components/ui/thinking-orb-utils/orb-connecting";
import type { ThinkingOrbSurface } from "@/components/ui/thinking-orb-utils/types";

export interface DemoProps {
  surface?: ThinkingOrbSurface;
  size?: number;
  speed?: number;
  scale?: number;
  playback?: "play" | "pause";
}

export default function Demo({
  surface = "auto",
  size = 480,
  speed = 0.4,
  scale = 0.85,
  playback = "play",
}: DemoProps) {
  return (
    <div className="flex size-full min-h-[360px] flex-col items-center justify-center p-4">
      <OrbConnecting
        surface={surface}
        size={size}
        speed={speed}
        scale={scale}
        playback={playback}
      />
    </div>
  );
}
