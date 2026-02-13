'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: '首页', href: '#home' },
  { name: '服务', href: '#services' },
  { name: '作品', href: '#projects' },
  { name: '分享', href: '#talks' },
  { name: '关于', href: '#about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div className="relative bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 shadow-lg flex items-center justify-between gap-8 md:gap-12 min-w-[300px] max-w-2xl w-full">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold font-mono text-slate-100 hover:text-primary transition-colors">
          Wenspock<span className="text-primary">_</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-primary transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 shadow-2xl md:hidden flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-primary hover:bg-slate-800/50 px-4 py-3 rounded-xl transition-all"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
