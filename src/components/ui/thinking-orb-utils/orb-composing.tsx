"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbComposing = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbComposing(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="ribbon"
      variant="composing"
      caption="Composing"
      summary="A rippling multi-lane ribbon wrapped over a sphere."
      {...props}
    />
  );
});

OrbComposing.displayName = "OrbComposing";
export default OrbComposing;
