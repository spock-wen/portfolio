'use client';

import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { ExternalLink, Github, ArrowUpRight, Lock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SmartPerf 性能工具链',
    role: 'Team Lead / PM',
    type: 'Performance Tool',
    description: '对标 Apple Instruments 与 Google Perfetto 的企业级性能监控平台。结合鸿蒙生态特性，实现 CPU/Memory/IO 的毫秒级监控。',
    tech: ['Wasm', 'Hook Mechanism', 'Native Memory', 'Trace Analysis'],
    links: [
      { label: 'GitCode', url: 'https://gitcode.com/openharmony/developtools_smartperf_host', icon: Github },
      { label: 'Live Demo', url: 'http://smartperf.wenspock.site', icon: Globe },
    ],
    featured: true,
    gradient: 'from-cyan-500/20 to-blue-600/20',
    icon: '🚀'
  },
  {
    title: 'hiHope 物联网平台',
    role: 'Full Stack Lead',
    type: 'IoT Platform',
    description: '基于 ThingsBoard 深度定制的企业级 IoT 平台。深度优化 PostgreSQL 查询性能，成功接入 200+ 实时设备。',
    tech: ['Angular', 'Java', 'PostgreSQL', 'WeChat'],
    featured: false,
    gradient: 'from-emerald-500/20 to-green-600/20',
    icon: '🌐'
  },
  {
    title: 'Android 功能机系统',
    role: 'System Engineer',
    type: 'OS Customization',
    description: '针对小屏设备的 Android 系统深度裁剪。突破 HAL 层限制，实现 Java 层直接控制内核节点。',
    tech: ['Android Framework', 'C++', 'HAL', 'SELinux'],
    featured: false,
    gradient: 'from-orange-500/20 to-red-600/20',
    icon: '📱'
  },
  {
    title: 'DaviciAI 自动化测试',
    role: 'Project Manager',
    type: 'AI Testing',
    description: '构建华为车载 AI 项目的稳定性测试平台。实现 C++ 代码覆盖率自动化收集与可视化分析。',
    tech: ['Python', 'Django', 'TensorFlow', 'C++'],
    featured: false,
    gradient: 'from-violet-500/20 to-purple-600/20',
    icon: '🤖'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              精选案例
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              深入底层架构，交付高价值业务系统。
            </p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${project.featured ? 'md:col-span-2' : ''} group`}
            >
              <Card className="h-full flex flex-col relative overflow-hidden hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
                {/* Abstract Background Visual */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="bg-slate-900/50 backdrop-blur">
                      {project.type}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                  </h3>
                  
                  <p className="text-primary/80 text-sm font-medium mb-4">{project.role}</p>

                  <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-900/60 text-slate-300 border border-slate-700/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.links && (
                      <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
                          >
                            <link.icon className="w-4 h-4 text-primary" />
                            <span className="border-b border-transparent group-hover/link:border-white transition-colors">
                              {link.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
