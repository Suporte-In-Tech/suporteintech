"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  MODE_DRAWS,
  resolvePreset,
  scaleCounts,
  scaleRadii,
  type OrbState,
} from "thinking-orbs";
import type {
  ThinkingOrbMode,
  ThinkingOrbProps,
  ThinkingOrbSurface,
  ThinkingOrbVariant,
} from "./types";

const MODE_TO_STATE: Record<ThinkingOrbMode, OrbState> = {
  orbits: "working",
  globe: "searching",
  rubik: "solving",
  wave: "listening",
  web: "connecting",
  braid: "weaving",
  ribbon: "composing",
  ring: "breathing",
  morph: "shaping",
};

const VARIANT_TO_MODE: Record<ThinkingOrbVariant, ThinkingOrbMode> = {
  working: "orbits",
  searching: "globe",
  solving: "rubik",
  listening: "wave",
  connecting: "web",
  weaving: "braid",
  composing: "ribbon",
  breathing: "ring",
  shaping: "morph",
};

function useThemeDetection(surface?: ThinkingOrbSurface) {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (surface === "dark") {
      setIsDark(true);
      return;
    }
    if (surface === "light") {
      setIsDark(false);
      return;
    }

    const checkDark = () => {
      if (typeof document === "undefined") return true;
      const doc = document.documentElement;
      if (doc.classList.contains("dark")) return true;
      if (doc.classList.contains("light")) return false;
      const dataTheme = doc.getAttribute("data-theme");
      if (dataTheme === "dark") return true;
      if (dataTheme === "light") return false;
      return (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    };

    setIsDark(checkDark());

    const observer = new MutationObserver(() => {
      setIsDark(checkDark());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const mq =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const handleMq = () => setIsDark(checkDark());
    mq?.addEventListener("change", handleMq);

    return () => {
      observer.disconnect();
      mq?.removeEventListener("change", handleMq);
    };
  }, [surface]);

  return isDark;
}

export const BaseThinkingOrb = React.forwardRef<
  HTMLCanvasElement,
  ThinkingOrbProps
>(function BaseThinkingOrb(
  {
    mode = "orbits",
    variant,
    caption,
    summary,
    frame,
    surface = "auto",
    size: propSize,
    speed = 1,
    scale = 1,
    playback = "play",
    dots,
    dotSize,
    style,
    className,
    ...rest
  },
  forwardedRef,
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDark = useThemeDetection(surface);

  const effectiveMode: ThinkingOrbMode =
    variant ? VARIANT_TO_MODE[variant] ?? mode : mode;
  const state: OrbState = MODE_TO_STATE[effectiveMode] ?? "working";

  const size = propSize ?? frame?.[0] ?? 240;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(
      2,
      typeof window !== "undefined" && window.devicePixelRatio
        ? window.devicePixelRatio
        : 1,
    );

    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);

    const preset = resolvePreset(state, 64);
    let opts = preset.opts;
    if (dots !== undefined && dots !== 1) {
      opts = scaleCounts(opts, Math.max(0.1, dots));
    }
    if (dotSize !== undefined && dotSize !== 1) {
      opts = scaleRadii(opts, Math.max(0.1, dotSize));
    }

    const drawFn = MODE_DRAWS[effectiveMode] ?? MODE_DRAWS.orbits;
    const baseSpeed = preset.speed ?? 1;
    const effectiveSpeed = baseSpeed * speed;

    const render = (tSec: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);

      if (scale && scale !== 1) {
        ctx.save();
        ctx.translate(size / 2, size / 2);
        ctx.scale(scale, scale);
        ctx.translate(-size / 2, -size / 2);
      }

      drawFn(ctx, size, tSec, isDark, opts);

      if (scale && scale !== 1) {
        ctx.restore();
      }
    };

    if (playback === "pause") {
      render(0.8);
      return;
    }

    let rafId = 0;
    let isRunning = true;

    const loop = () => {
      if (!isRunning) return;
      const tSec = (performance.now() / 1000) * effectiveSpeed;
      render(tSec);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
    };
  }, [
    effectiveMode,
    state,
    size,
    scale,
    speed,
    playback,
    isDark,
    dots,
    dotSize,
  ]);

  return (
    <canvas
      ref={(node) => {
        canvasRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      }}
      role="img"
      aria-label={caption ?? summary ?? `Thinking orb: ${effectiveMode}`}
      className={className}
      style={{
        width: "min(100%, " + size + "px)",
        height: "auto",
        aspectRatio: "1 / 1",
        maxWidth: size,
        maxHeight: size,
        display: "block",
        ...style,
      }}
      {...rest}
    />
  );
});

BaseThinkingOrb.displayName = "BaseThinkingOrb";
export default BaseThinkingOrb;
