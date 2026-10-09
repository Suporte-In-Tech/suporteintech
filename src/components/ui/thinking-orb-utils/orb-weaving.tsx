"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbWeaving = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbWeaving(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="braid"
      variant="weaving"
      caption="Weaving"
      summary="Three helical strands braiding around a ghosted sphere."
      {...props}
    />
  );
});

OrbWeaving.displayName = "OrbWeaving";
export default OrbWeaving;
