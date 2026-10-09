"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbSearching = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbSearching(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="globe"
      variant="searching"
      caption="Searching"
      summary="A dotted globe swept by a rotating scan band."
      {...props}
    />
  );
});

OrbSearching.displayName = "OrbSearching";
export default OrbSearching;
