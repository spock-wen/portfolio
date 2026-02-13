'use client';

import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: '性能工具链 (SmartPerf)',
    role: '团队Leader / 项目经理',
    period: '2021.04 - 至今',
    description: '对标 Apple Instruments、Google Perfetto，自主研发 OpenHarmony 生态的性能监控与分析平台。',
    achievements: [
      '研发 IDEA 插件，实现 CPU/内存/IO 等 6 大核心指标毫秒级监控',
      '基于 eBPF 技术实现 Perf 调用栈反汇编与 Native Memory 分析',
      '开发 TraceStreamer 解析引擎，大幅提升海量数据解析效率',
      '性能瓶颈定位效率提升 40%，连续 2 年获评公司优秀项目'
    ],
    tech: ['Java Swing', 'C++', 'TypeScript', 'Python', 'eBPF'],
    links: [
      { label: 'GitCode', url: 'https://gitcode.com/openharmony/developtools_smartperf_host', icon: Github },
      { label: 'Live Demo', url: 'https://223.109.200.65:9000/application/', icon: ExternalLink },
    ]
  },
  {
    title: 'hiHope 物联网平台',
    role: '团队Leader',
    period: '2022.11 - 2023.01',
    description: '基于开源 ThingsBoard 深度定制的企业级物联网平台，支持海量设备接入与实时监控。',
    achievements: [
      '深度优化 PostgreSQL 查询性能，提升系统吞吐量',
      '全栈开发 Angular 前端与配套微信小程序',
      '成功接入 200+ 台设备，小程序用户留存率达 85%'
    ],
    tech: ['Java', 'PostgreSQL', 'Angular', 'C', 'WeChat MiniProgram'],
  },
  {
    title: 'tinno 功能机项目',
    role: 'Android系统工程师',
    period: '2021.11 - 2022.02',
    description: '针对小屏功能机的 Android 系统深度定制与裁剪。',
    achievements: [
      '深度定制 SystemUI，重构状态栏与通知组件',
      '实现 Java 层与内核节点直接交互（HAL层突破）',
      '解决小屏显示控制与开关屏管理的底层难题'
    ],
    tech: ['Java', 'C++', 'Android Framework', 'HAL', 'Selinux'],
  },
  {
    title: 'CI 系统与自动化平台',
    role: '项目经理',
    period: '2019.01 - 2021.02',
    description: '搭建一站式 CI/CD 系统及研发数据平台，实现研发流程全自动化。',
    achievements: [
      '构建全链路自动化平台（编译/检查/测试）',
      '管理 2000+ 台虚拟机集群，建立自动化运维体系',
      '设计基于 HBase/HDFS 的研发数据统计平台'
    ],
    tech: ['Java', 'Python', 'HBase', 'HDFS', 'Virtualization'],
  },
  {
    title: 'DaviciAI 自动化测试',
    role: '项目经理',
    period: '2017.08 - 2019.05',
    description: '构建华为车载 AI 项目的稳定性测试平台，保障 AI 模型质量。',
    achievements: [
      '组建并管理 5 人团队，建立标准闭环流程',
      '搭建 Python+Django 可视化分析平台',
      '实现 C++ 代码覆盖率自动化收集'
    ],
    tech: ['Python', 'Django', 'C++', 'Caffe', 'TensorFlow'],
  },
];

export function Projects() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary/30 pb-2">重点项目</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">{project.role}</p>
                </div>
                <Badge variant="outline">{project.period}</Badge>
              </div>

              <p className="text-slate-400 mb-6 text-sm">
                {project.description}
              </p>

              <div className="space-y-2 mb-6 flex-grow">
                {project.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <Badge key={i} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              {project.links && (
                <div className="flex gap-4 pt-4 border-t border-slate-800">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
