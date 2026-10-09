"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbConnecting = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbConnecting(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="web"
      variant="connecting"
      caption="Connecting"
      summary="A drifting node graph with proximity links and travelling signals."
      {...props}
    />
  );
});

OrbConnecting.displayName = "OrbConnecting";
export default OrbConnecting;
