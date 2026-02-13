'use client';

import { useEffect, useRef } from 'react';

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let trailParticles: TrailParticle[] = [];
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    // Configuration
    const isMobile = width < 768;
    const particleCount = isMobile ? 30 : 60;
    const connectionDistance = isMobile ? 100 : 150;
    const mouseConnectionDistance = isMobile ? 150 : 200;
    const moveSpeed = 0.5;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * moveSpeed;
        this.vy = (Math.random() - 0.5) * moveSpeed;
        this.size = Math.random() * 2 + 1;
        // Cyan and Purple accents
        this.color = Math.random() > 0.5 ? 'rgba(6, 182, 212,' : 'rgba(139, 92, 246,'; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + ' 0.5)';
        ctx.fill();
      }
    }

    class TrailParticle {
      x: number;
      y: number;
      size: number;
      color: string;
      life: number;
      decay: number;
      vx: number;
      vy: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.life = 1.0;
        this.decay = Math.random() * 0.03 + 0.01;
        this.color = Math.random() > 0.5 ? '6, 182, 212' : '139, 92, 246'; // Cyan or Purple
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.size *= 0.95;
      }

      draw() {
        if (!ctx || this.life <= 0) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.life * 0.8})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, 1)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
      
      // Spawn trail particles
      for (let i = 0; i < 3; i++) {
        trailParticles.push(new TrailParticle(mouseX, mouseY));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#020617'); // slate-950
      gradient.addColorStop(1, '#0f172a'); // slate-900
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw background particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.1 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Connect particles to mouse
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseConnectionDistance) {
            ctx.beginPath();
            // Create a gradient for the connection line
            const grad = ctx.createLinearGradient(particle.x, particle.y, mouseX, mouseY);
            grad.addColorStop(0, particle.color + ' 0.1)');
            grad.addColorStop(1, 'rgba(6, 182, 212, 0.4)'); // Cyan at mouse
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
        }
      });

      // Update and draw trail particles
      trailParticles = trailParticles.filter(p => p.life > 0);
      trailParticles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('touchstart', handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}
