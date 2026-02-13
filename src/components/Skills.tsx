'use client';

import { Card } from './ui/Card';

const skills = [
  {
    category: '后端开发',
    items: ['Java (Spring Boot)', 'Python (Django/Flask)', 'C++ (底层接口/算法)', 'Node.js'],
  },
  {
    category: '前端开发',
    items: ['TypeScript', 'Angular', 'JavaScript', 'HTML5/CSS3', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: '移动端',
    items: ['Android Native', 'Framework (AMS/WMS)', 'HAL层交互', '微信小程序'],
  },
  {
    category: '数据与工具',
    items: ['PostgreSQL', 'Hadoop', 'HBase', 'Linux/Windows桌面 (Swing/Qt)', 'CI/CD (Jenkins/Docker)'],
  },
  {
    category: '性能分析',
    items: ['eBPF', 'Perf', 'Systrace', '内存分析 (Hprof/Native Heap)'],
  },
];

export function Skills() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-secondary/30 pb-2">技术栈</span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} hover={false} className="border-slate-800 bg-slate-900/50">
              <h3 className="text-lg font-bold text-primary mb-4 border-b border-slate-800 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
