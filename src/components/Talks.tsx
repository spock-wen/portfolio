'use client';

import { motion } from 'framer-motion';
import { Presentation, ArrowRight, Download, Users, Lightbulb } from 'lucide-react';
import { Card } from './ui/Card';

export function Talks() {
  return (
    <section id="talks" className="py-24 bg-slate-900/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-900/20 via-slate-900 to-slate-900 border border-amber-500/20 shadow-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(245,158,11,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
                  <Presentation className="w-4 h-4" />
                  <span>Knowledge Sharing</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
                  赋能团队，传承技术
                  <span className="block text-amber-500 mt-2">12 年架构经验沉淀</span>
                </h2>
                
                <p className="text-slate-400 text-lg leading-relaxed">
                  作为技术布道者，我致力于将复杂的架构理念转化为易懂的实战经验。
                  已在企业内部开展多次关于 <span className="text-slate-200">性能优化</span>、
                  <span className="text-slate-200">系统架构</span> 与 <span className="text-slate-200">全栈开发</span> 的深度培训。
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-mono pt-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-500" />
                    <span>Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>Tech Talks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-amber-500" />
                    <span>Resources</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="http://ppt.wenspock.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-900/20 group"
                  >
                    查看培训课件
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Visual Decoration */}
              <div className="w-full md:w-1/3 aspect-video md:aspect-square relative flex items-center justify-center">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="relative z-10 w-full max-w-[280px] aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Mock Slide */}
                  <div className="w-full h-full bg-slate-900 rounded border border-slate-800/50 flex flex-col p-4 relative overflow-hidden">
                    <div className="w-1/3 h-2 bg-amber-500/50 rounded mb-4" />
                    <div className="space-y-2">
                      <div className="w-full h-1.5 bg-slate-700 rounded" />
                      <div className="w-full h-1.5 bg-slate-700 rounded" />
                      <div className="w-2/3 h-1.5 bg-slate-700 rounded" />
                    </div>
                    
                    <div className="mt-auto grid grid-cols-2 gap-2">
                       <div className="h-12 bg-slate-800 rounded border border-slate-700/50" />
                       <div className="h-12 bg-slate-800 rounded border border-slate-700/50" />
                    </div>

                    {/* Laser Pointer Effect */}
                    <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-500 rounded-full blur-sm shadow-[0_0_10px_red]" />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-amber-500/20 rounded-full" />
                <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-slate-700/30 rounded-full border-dashed" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
