"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  speed: number;
  offset: number;
};

type FloatingDot = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  speed: number;
  angle: number;
  drift: number;
};

export default function WaveBackground({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let DPR = Math.max(1, window.devicePixelRatio || 1);
    let width = 0;
    let height = 0;

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 1;

    const particleCount = isTouch ? 80 : 180;
    const particles: Particle[] = [];

    // Floating interactive dots (confetti-like)
    const dotCount = isTouch ? 30 : 60;
    const dots: FloatingDot[] = [];
    const dotColors = [
      "rgba(200,169,126,0.35)",
      "rgba(139,111,71,0.3)",
      "rgba(200,169,126,0.2)",
      "rgba(223,197,160,0.25)",
      "rgba(139,111,71,0.15)",
      "rgba(168,162,158,0.2)",
    ];

    function resize() {
      DPR = Math.max(1, window.devicePixelRatio || 1);
      width = canvas.clientWidth | 0;
      height = canvas.clientHeight | 0;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const offset = Math.random() * Math.PI * 2;
        particles.push({
          x,
          y: height / 2 + (Math.random() - 0.5) * 60,
          vx: (Math.random() * 0.4 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
          vy: 0,
          size: Math.random() * 2.2 + 0.6,
          speed: Math.random() * 0.6 + 0.2,
          offset,
        });
      }
    }

    function initDots() {
      dots.length = 0;
      for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        dots.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 3.5 + 1.5,
          color: dotColors[Math.floor(Math.random() * dotColors.length)],
          speed: Math.random() * 0.4 + 0.1,
          angle: Math.random() * Math.PI * 2,
          drift: Math.random() * 20 + 10,
        });
      }
    }

    function draw(time: number) {
      ctx.clearRect(0, 0, width, height);

      // background subtle gradient
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "rgba(2,6,23,0.95)");
      g.addColorStop(1, "rgba(3,10,30,0.95)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // wave path
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = "rgba(0,212,255,0.06)";
      ctx.beginPath();
      for (let x = 0; x < width; x += 12) {
        const t = time * 0.001;
        const y =
          height / 2 +
          Math.sin(x * 0.008 + t * 1.2) * 34 +
          Math.cos(t * 0.6 + x * 0.002) * 12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // particles
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // wave influence
        const t = time * 0.001;
        const baseY =
          height / 2 + Math.sin(p.x * 0.008 + t * 1.2 + p.offset) * 36;

        // mouse repulsion
        const dx = p.x - mouseRef.current.x;
        const dy = baseY - mouseRef.current.y;
        const dist2 = dx * dx + dy * dy;
        const influence = Math.max(0, 1 - dist2 / (150 * 150));

        p.vx += (Math.random() - 0.5) * 0.02;
        p.vx += p.speed * 0.01 * (influence * (dx > 0 ? 1 : -1));
        p.x += p.vx * (1 + influence * 2);
        p.y = baseY + (Math.random() - 0.5) * 6 - influence * 30;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // draw glow
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 12,
        );
        grad.addColorStop(0, "rgba(0,212,255,0.95)");
        grad.addColorStop(0.2, "rgba(59,130,246,0.6)");
        grad.addColorStop(0.6, "rgba(14,165,233,0.12)");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 8, 0, Math.PI * 2);
        ctx.fill();
      }

      // connecting lines for nearby particles
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(14,165,233,0.08)";
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 1000 * 1.6) {
            const alpha = 1 - d2 / (1000 * 1.6);
            ctx.strokeStyle = `rgba(14,165,233,${0.06 * alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalCompositeOperation = "source-over";

      // --- Interactive floating dots (cursor reactive) ---
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseRadius = 180;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const t = time * 0.001;

        // Natural floating motion
        d.angle += d.speed * 0.01;
        const floatX = d.baseX + Math.sin(d.angle + t * 0.3) * d.drift;
        const floatY = d.baseY + Math.cos(d.angle * 0.7 + t * 0.2) * d.drift;

        // Mouse interaction: push away from cursor
        const ddx = floatX - mx;
        const ddy = floatY - my;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy);
        let pushX = 0;
        let pushY = 0;
        if (dist < mouseRadius && dist > 0) {
          const force = (1 - dist / mouseRadius) * 50;
          pushX = (ddx / dist) * force;
          pushY = (ddy / dist) * force;
        }

        // Smooth lerp towards target
        d.x += (floatX + pushX - d.x) * 0.08;
        d.y += (floatY + pushY - d.y) * 0.08;

        // Wrap around edges
        if (d.baseX < -30) d.baseX = width + 30;
        if (d.baseX > width + 30) d.baseX = -30;
        if (d.baseY < -30) d.baseY = height + 30;
        if (d.baseY > height + 30) d.baseY = -30;

        // Draw the dot
        ctx.globalAlpha = 1;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();

        // Optional: draw a small connecting line to mouse if near
        if (dist < mouseRadius * 0.8 && dist > 0) {
          const lineAlpha = (1 - dist / (mouseRadius * 0.8)) * 0.15;
          ctx.strokeStyle = `rgba(200,169,126,${lineAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    }

    function onMove(e: PointerEvent) {
      mouseRef.current.active = true;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function onLeave() {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    }

    resize();
    initParticles();
    initDots();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
