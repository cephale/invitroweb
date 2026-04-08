"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.width / dpr;
    const h = () => canvas.height / dpr;

    // Create particles in an organic blob shape
    const initParticles = () => {
      const count = 600;
      const particles: Particle[] = [];
      const width = w();
      const height = h();
      const cx = width * 0.35;
      const cy = height * 0.4;

      for (let i = 0; i < count; i++) {
        // Use gaussian-like distribution for organic look
        const angle = Math.random() * Math.PI * 2;
        const r1 = Math.random();
        const r2 = Math.random();
        const gaussian = Math.sqrt(-2 * Math.log(r1)) * Math.cos(2 * Math.PI * r2);
        const radius = Math.abs(gaussian) * Math.min(width, height) * 0.22;

        particles.push({
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius * 0.9,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.8 + 0.3,
          life: Math.random() * 300,
          maxLife: 300 + Math.random() * 400,
        });
      }
      particlesRef.current = particles;
    };

    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      const width = w();
      const height = h();
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cx = width * 0.35;
      const cy = height * 0.4;

      // Draw connections first (behind particles)
      ctx.lineWidth = 0.4;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ddx = p.x - p2.x;
          const ddy = p.y - p2.y;
          const d = ddx * ddx + ddy * ddy;
          if (d < 900) { // 30^2
            const alpha = (1 - Math.sqrt(d) / 30) * 0.12;
            ctx.strokeStyle = `rgba(25, 35, 72, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interaction - gentle repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = dx * dx + dy * dy;
        if (dist < 14400 && dist > 0) { // 120^2
          const d = Math.sqrt(dist);
          const force = (120 - d) / 120;
          p.vx += (dx / d) * force * 0.1;
          p.vy += (dy / d) * force * 0.1;
        }

        // Gentle gravity toward cluster center
        const gx = cx - p.x;
        const gy = cy - p.y;
        const gDist = Math.sqrt(gx * gx + gy * gy);
        if (gDist > 5) {
          p.vx += (gx / gDist) * 0.008;
          p.vy += (gy / gDist) * 0.008;
        }

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Reset drifting particles
        if (p.life > p.maxLife || p.x < -100 || p.x > width + 100 || p.y < -100 || p.y > height + 100) {
          const angle = Math.random() * Math.PI * 2;
          const r1 = Math.random();
          const r2 = Math.random();
          const gaussian = Math.sqrt(-2 * Math.log(r1 || 0.001)) * Math.cos(2 * Math.PI * r2);
          const radius = Math.abs(gaussian) * Math.min(width, height) * 0.22;
          p.x = cx + Math.cos(angle) * radius;
          p.y = cy + Math.sin(angle) * radius * 0.9;
          p.vx = (Math.random() - 0.5) * 0.2;
          p.vy = (Math.random() - 0.5) * 0.2;
          p.life = 0;
          p.maxLife = 300 + Math.random() * 400;
        }

        // Draw particle dot
        const fadeIn = Math.min(1, p.life / 40);
        const fadeOut = 1 - Math.max(0, (p.life - p.maxLife + 60) / 60);
        const alpha = Math.max(0, fadeIn * fadeOut) * 0.55;
        ctx.fillStyle = `rgba(25, 35, 72, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
    />
  );
}
