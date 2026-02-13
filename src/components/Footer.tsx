import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} 文国荣. All rights reserved.</p>
        <p className="mt-2">
          Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
