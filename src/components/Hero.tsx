'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, MessageCircle, X, ChevronRight, Download } from 'lucide-react';
import { Badge } from './ui/Badge';
import Image from 'next/image';
import { GeekAvatar } from './GeekAvatar';

export function Hero() {
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950/80" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left order-2 md:order-1"
          >
            <Badge variant="secondary" className="mb-6 mx-auto md:mx-0">
              Open to Work
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-slate-100">
              构建高性能的 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
                复杂系统
              </span>
            </h1>
            
            {/* 个人标签 */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Vibe Coding
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                ISTP
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Tech Evangelist
              </span>
            </div>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
              我是文国荣，一个对技术有极致追求的探索者。
              <br className="hidden sm:block" />
              热衷于攻克底层技术难题，享受从 0 到 1 构建复杂系统的过程。
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                查看作品
                <ChevronRight className="w-5 h-5" />
              </a>
              
              <button
                onClick={() => setIsWeChatOpen(true)}
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-8 py-4 rounded-xl font-medium text-lg transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                联系我
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-slate-500 text-sm font-mono border-t border-slate-800/50 pt-8">
               <div className="flex flex-col">
                 <span className="text-2xl font-bold text-slate-200">12+</span>
                 <span>Years Exp</span>
               </div>
               <div className="w-px h-8 bg-slate-800" />
               <div className="flex flex-col">
                 <span className="text-2xl font-bold text-slate-200">50+</span>
                 <span>Projects</span>
               </div>
               <div className="w-px h-8 bg-slate-800" />
               <div className="flex flex-col">
                 <span className="text-2xl font-bold text-slate-200">100%</span>
                 <span>Delivered</span>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0 order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
              <GeekAvatar size={280} className="relative z-10" />
              
              {/* Floating Tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur border border-slate-700 px-4 py-2 rounded-lg text-sm font-mono text-cyan-400 shadow-xl z-20"
              >
                &lt;Architect /&gt;
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur border border-slate-700 px-4 py-2 rounded-lg text-sm font-mono text-purple-400 shadow-xl z-20"
              >
                Performance++
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WeChat Modal */}
      <AnimatePresence>
        {isWeChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setIsWeChatOpen(false)}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateX: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative group perspective-1000"
              onClick={(e) => e.stopPropagation()}
            >
               <div className="relative bg-slate-900/90 p-1 rounded-3xl overflow-hidden shadow-[0_0_80px_-20px_rgba(6,182,212,0.4)] border border-slate-700/50 backdrop-blur-xl w-full max-w-sm mx-4">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_70deg,#06b6d4_120deg,transparent_160deg,transparent_360deg)] opacity-50 blur-md"
                  />

                  <div className="relative bg-slate-950/90 rounded-[22px] p-8 h-full w-full overflow-hidden flex flex-col items-center">
                    <button
                      onClick={() => setIsWeChatOpen(false)}
                      className="absolute top-4 right-4 text-slate-500 hover:text-cyan-400 transition-colors z-20"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    
                    <h3 className="text-2xl font-bold text-slate-100 mb-6">扫码加微信</h3>
                    
                    <div className="relative w-64 h-64 bg-white rounded-lg p-2 shadow-2xl mb-6">
                        <Image 
                            src="/wechat-qr.png" 
                            alt="WeChat QR Code" 
                            fill
                            className="object-contain p-2"
                        />
                    </div>
                    
                    <p className="text-slate-400 text-sm">
                      ID: <span className="text-primary font-mono">wenspock</span>
                    </p>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
