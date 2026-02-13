'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Github, FileText, MessageCircle, X } from 'lucide-react';
import { Badge } from './ui/Badge';
import Image from 'next/image';
import { GeekAvatar } from './GeekAvatar';

export function Hero() {
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background Elements - Simplified to allow Global Background to shine */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle overlay to blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950/80" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <GeekAvatar className="mb-10" size={180} />
            <Badge variant="secondary" className="mb-6">
              Open to Work
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-center leading-tight">
              你好，我是 <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow inline-block mt-2 sm:mt-0">文国荣</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-400 mb-6 font-light text-center px-4">
              资深全栈开发
            </h2>
            
            {/* Personality Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Vibe Coding
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                ISTP
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert max-w-2xl mb-10"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              拥有 12 年实战经验，从底层 C++ 到上层 Web 前端，从 Android Framework 到桌面应用。
              我不仅仅是代码的编写者，更是复杂系统的架构师和技术团队的领航员。
              <br />
              擅长攻克性能瓶颈，交付高价值的核心业务系统。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="mailto:wenspock@hotmail.com"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-slate-950 px-8 py-4 sm:py-3 rounded-xl font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              联系我
            </a>
            
            <button
              onClick={() => setIsWeChatOpen(true)}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 sm:py-3 rounded-xl font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              微信
            </button>

            <a
              href="https://gitcode.com/openharmony/developtools_smartperf_host"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 sm:py-3 rounded-xl font-medium transition-all hover:scale-105 active:scale-95 border border-slate-700 w-full sm:w-auto"
            >
              <Github className="w-5 h-5" />
              查看代码
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap gap-8 text-slate-400 text-sm font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              12年经验
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              南京
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              全栈架构
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
            {/* Animated Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
               />
               <motion.div 
                 animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
               />
            </div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateX: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative group perspective-1000"
              onClick={(e) => e.stopPropagation()}
            >
               {/* Cyber Card Container */}
               <div className="relative bg-slate-900/90 p-1 rounded-3xl overflow-hidden shadow-[0_0_80px_-20px_rgba(6,182,212,0.4)] border border-slate-700/50 backdrop-blur-xl w-full max-w-sm mx-4">
                  
                  {/* Rotating Gradient Border Effect */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_70deg,#06b6d4_120deg,transparent_160deg,transparent_360deg)] opacity-50 blur-md"
                  />

                  <div className="relative bg-slate-950/90 rounded-[22px] p-8 h-full w-full overflow-hidden">
                    {/* Inner Background Details */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />

                    <button
                      onClick={() => setIsWeChatOpen(false)}
                      className="absolute top-4 right-4 text-slate-500 hover:text-cyan-400 transition-colors z-20"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    
                    <div className="flex flex-col items-center relative z-10">
                      {/* Avatar Section with Glitch Effect Hover */}
                      <div className="flex items-center gap-5 mb-8 w-full border-b border-slate-800/50 pb-6 relative">
                        <div className="absolute -bottom-[1px] left-0 w-1/3 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
                        
                        <div className="w-16 h-16 rounded-2xl bg-slate-900 p-0.5 shadow-lg ring-1 ring-cyan-500/30 overflow-hidden relative group/avatar">
                           <div className="w-full h-full rounded-[14px] bg-slate-800 flex items-center justify-center relative overflow-hidden">
                              <span className="text-2xl font-bold text-slate-200 z-10">W</span>
                              <motion.div 
                                animate={{ y: [-20, 20] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                              />
                           </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-100 tracking-tight font-mono">
                            wenspock
                            <span className="text-cyan-500 animate-pulse">_</span>
                          </h3>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30 tracking-wider">
                              CORE.DEV
                            </span>
                            <span className="text-slate-500 text-xs font-mono">CN.JS.NJ</span>
                          </div>
                        </div>
                      </div>

                      {/* QR Code Section with Holographic Scan */}
                      <div className="relative group/qr">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-30 group-hover/qr:opacity-100 transition duration-500 blur-sm" />
                        <div className="relative w-64 h-64 bg-white rounded-lg overflow-hidden p-1.5 shadow-2xl">
                          <div className="w-full h-full border border-slate-200 border-dashed rounded flex items-center justify-center bg-slate-50 relative overflow-hidden">
                              <Image 
                                  src="/wechat-qr.png" 
                                  alt="WeChat QR Code" 
                                  fill
                                  className="object-contain p-2 z-10 relative"
                              />
                              {/* Tech Grid Overlay on QR */}
                              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:16px_16px] z-0 pointer-events-none" />
                              
                              {/* Laser Scan Line */}
                              <motion.div 
                                  animate={{ top: ['-10%', '110%'] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                  className="absolute left-0 right-0 h-8 bg-gradient-to-b from-cyan-500/0 via-cyan-400/30 to-cyan-500/0 z-20 pointer-events-none"
                              />
                          </div>
                        </div>
                        
                        {/* Decorative Corners */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg" />
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg" />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-500 rounded-br-lg" />
                      </div>
                      
                      <p className="text-slate-400 text-xs font-mono mt-8 flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-[ping_2s_linear_infinite]" />
                        <span className="tracking-widest uppercase">Scan to Connect</span>
                      </p>
                    </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
