"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbWorking = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbWorking(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="orbits"
      variant="working"
      caption="Working"
      summary="Particles tracing tilted orbital rings around a ghosted sphere."
      {...props}
    />
  );
});

OrbWorking.displayName = "OrbWorking";
export default OrbWorking;
