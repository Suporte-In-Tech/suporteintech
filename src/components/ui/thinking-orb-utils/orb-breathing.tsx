"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbBreathing = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbBreathing(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="ring"
      variant="breathing"
      caption="Thinking"
      summary="A face-on ring pulsing with a slow radial ripple."
      {...props}
    />
  );
});

OrbBreathing.displayName = "OrbBreathing";
export default OrbBreathing;
