"use client";

import * as React from "react";
import { BaseThinkingOrb } from "./base-orb";
import type { ThinkingOrbProps } from "./types";

export const OrbListening = React.forwardRef<
  HTMLCanvasElement,
  Omit<ThinkingOrbProps, "mode" | "variant">
>(function OrbListening(props, ref) {
  return (
    <BaseThinkingOrb
      ref={ref}
      mode="wave"
      variant="listening"
      caption="Listening"
      summary="Latitude rings breathing in and out on two detuned sine waves."
      {...props}
    />
  );
});

OrbListening.displayName = "OrbListening";
export default OrbListening;
