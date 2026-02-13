'use client';

import { Card } from './ui/Card';
import { Server, Zap, Globe, Cpu, Database, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Server,
    title: '系统架构设计',
    description: '构建高可用、可扩展的分布式系统架构。擅长跨端协同设计、模块化解耦以及高并发消息处理方案。',
    tags: ['Microservices', 'System Design', 'Message Queue'],
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    icon: Zap,
    title: '极致性能优化',
    description: '深入系统内核与运行时，全链路定位性能瓶颈。提供从 Native 层 Hook 到上层应用渲染的系统级优化方案。',
    tags: ['System Profiling', 'Native Hook', 'Wasm'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20'
  },
  {
    icon: Globe,
    title: '全栈应用开发',
    description: '具备 App、后端、小程序、前端、桌面应用的全场景开发能力。不局限于特定框架，注重语言特性与工程化交付。',
    tags: ['Multi-Platform', 'Polyglot', 'Engineering'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            核心技术服务
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            不仅仅是代码交付，更是提供解决复杂业务问题的技术方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group">
                <div className={`w-14 h-14 ${service.bg} ${service.border} border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-500 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
