"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbShaping = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbShaping(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="morph"
      variant="shaping"
      caption="Shaping"
      summary="A dotted outline morphing between circle, triangle and square."
      {...props}
    />
  );
});

OrbShaping.displayName = "OrbShaping";
export default OrbShaping;
