'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function GeekAvatar({ className = "", size = 200 }: { className?: string; size?: number }) {
  const [binaryStream, setBinaryStream] = useState<string[]>([]);

  // Generate random binary stream for background effect
  useEffect(() => {
    const generateStream = () => {
      const chars = '01';
      return Array.from({ length: 10 }, () => 
        Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
      );
    };
    
    setBinaryStream(generateStream());
    const interval = setInterval(() => {
      setBinaryStream(generateStream());
    }, 150);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Outer Glow Container */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]"
      >
        <defs>
          <linearGradient id="cyber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff41" />
            <stop offset="100%" stopColor="#00f3ff" />
          </linearGradient>
          <linearGradient id="visor-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 0, 60, 0.8)" />
            <stop offset="50%" stopColor="rgba(255, 50, 100, 1)" />
            <stop offset="100%" stopColor="rgba(255, 0, 60, 0.8)" />
          </linearGradient>
          <clipPath id="face-clip">
             <path d="M60 40 L140 40 L160 80 L140 160 L60 160 L40 80 Z" />
          </clipPath>
          <filter id="glitch-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 -0.2" in="noise" result="coloredNoise" />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
          </filter>
        </defs>

        {/* Tech Ring Background - Rotating */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ originX: "100px", originY: "100px" }}
        >
          <circle cx="100" cy="100" r="95" stroke="rgba(0, 243, 255, 0.2)" strokeWidth="1" strokeDasharray="10 5" />
          <circle cx="100" cy="100" r="85" stroke="rgba(0, 255, 65, 0.1)" strokeWidth="8" strokeDasharray="60 120" />
        </motion.g>

        {/* Inner Tech Ring - Counter Rotating */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ originX: "100px", originY: "100px" }}
        >
          <path d="M100 20 L100 30 M100 170 L100 180 M20 100 L30 100 M170 100 L180 100" stroke="#00ff41" strokeWidth="2" />
          <circle cx="100" cy="100" r="70" stroke="rgba(0, 255, 65, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
        </motion.g>

        {/* The Architect Face Silhouette */}
        <g clipPath="url(#face-clip)">
          {/* Dark Background for Face */}
          <path d="M60 40 L140 40 L160 80 L140 160 L60 160 L40 80 Z" fill="#0a0a0a" />
          
          {/* Binary Rain Inside Face */}
          {binaryStream.map((line, i) => (
            <text
              key={i}
              x="50"
              y={50 + i * 12}
              fill="rgba(0, 255, 65, 0.3)"
              fontFamily="monospace"
              fontSize="10"
              fontWeight="bold"
            >
              {line}
            </text>
          ))}
          
          {/* Grid Overlay on Face */}
          <path d="M40 80 L160 80 M60 40 L60 160 M140 40 L140 160" stroke="rgba(0, 243, 255, 0.1)" strokeWidth="1" />
        </g>

        {/* Face Outline - Cyber Border */}
        <path d="M60 40 L140 40 L160 80 L140 160 L60 160 L40 80 Z" stroke="url(#cyber-gradient)" strokeWidth="2" fill="none" />
        
        {/* Glowing Visor (Eyes) */}
        <rect x="65" y="75" width="70" height="10" rx="2" fill="url(#visor-glow)" opacity="0.9">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </rect>
        <path d="M65 80 L135 80" stroke="#fff" strokeWidth="1" opacity="0.5" />

        {/* Audio Visualizer / Voice Lines at Mouth */}
        <g transform="translate(85, 120)">
           <rect x="0" y="0" width="4" height="15" fill="#00f3ff">
             <animate attributeName="height" values="5;15;5" dur="0.5s" repeatCount="indefinite" />
           </rect>
           <rect x="8" y="2" width="4" height="10" fill="#00f3ff">
             <animate attributeName="height" values="10;5;10" dur="0.6s" repeatCount="indefinite" />
           </rect>
           <rect x="16" y="5" width="4" height="5" fill="#00f3ff">
             <animate attributeName="height" values="5;12;5" dur="0.4s" repeatCount="indefinite" />
           </rect>
           <rect x="24" y="1" width="4" height="12" fill="#00f3ff">
             <animate attributeName="height" values="12;6;12" dur="0.7s" repeatCount="indefinite" />
           </rect>
        </g>

        {/* Decorative Circuit Nodes */}
        <circle cx="40" cy="80" r="3" fill="#00ff41" />
        <circle cx="160" cy="80" r="3" fill="#00ff41" />
        <circle cx="60" cy="160" r="3" fill="#00f3ff" />
        <circle cx="140" cy="160" r="3" fill="#00f3ff" />
        
        {/* Connection Lines */}
        <path d="M40 80 L20 80" stroke="#00ff41" strokeWidth="1" />
        <path d="M160 80 L180 80" stroke="#00ff41" strokeWidth="1" />
        <path d="M100 160 L100 180" stroke="#00f3ff" strokeWidth="1" />

      </svg>
    </div>
  );
}
