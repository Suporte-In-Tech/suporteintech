"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbSolving = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbSolving(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="rubik"
      variant="solving"
      caption="Solving"
      summary="A point-cloud sphere permuted by successive quarter-turn slice rotations."
      {...props}
    />
  );
});

OrbSolving.displayName = "OrbSolving";
export default OrbSolving;
