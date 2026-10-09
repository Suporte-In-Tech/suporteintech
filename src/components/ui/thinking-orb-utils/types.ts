import type * as React from "react";

export type ThinkingOrbVariant =
  | "working"
  | "searching"
  | "solving"
  | "listening"
  | "connecting"
  | "weaving"
  | "composing"
  | "breathing"
  | "shaping";

export type ThinkingOrbMode =
  | "orbits"
  | "globe"
  | "rubik"
  | "wave"
  | "web"
  | "braid"
  | "ribbon"
  | "ring"
  | "morph";

export type ThinkingOrbSurface = "auto" | "light" | "dark";

export interface ThinkingOrbDescriptor {
  id: string;
  name: string;
  variant: ThinkingOrbVariant;
  mode: ThinkingOrbMode;
  caption: string;
  frame: [number, number];
  summary: string;
}

export interface ThinkingOrbProps
  extends Omit<React.CanvasHTMLAttributes<HTMLCanvasElement>, "style"> {
  variant?: ThinkingOrbVariant;
  mode?: ThinkingOrbMode;
  caption?: string;
  summary?: string;
  frame?: [number, number];
  surface?: ThinkingOrbSurface;
  size?: number;
  speed?: number;
  scale?: number;
  playback?: "play" | "pause";
  color?: string;
  dots?: number;
  dotSize?: number;
  style?: React.CSSProperties;
}
