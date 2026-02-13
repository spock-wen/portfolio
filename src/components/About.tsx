'use client';

import { Card } from './ui/Card';
import { Layers, Users, Award } from 'lucide-react';

const advantages = [
  {
    icon: Layers,
    title: '全栈架构与开发',
    description: '精通 Python / Java / C++ 多语言技术栈。具备 Web 前后端、Android 系统、桌面应用的全场景开发能力，擅长设计跨端协同的复杂系统架构。',
  },
  {
    icon: Users,
    title: '技术管理与团队建设',
    description: '全链路职业发展经验（开发 -> Leader -> PM -> 部门经理）。擅长组建并带领 5-15 人团队攻克技术难关，既能主导架构设计，也能高效统筹项目进度。',
  },
  {
    icon: Award,
    title: '卓越的交付成果',
    description: '深耕华为、TCL 等头部客户核心业务。多次解决系统级性能瓶颈与架构难题，挽救延期项目。荣获“芯星奖”、“优秀管理者”等多项荣誉。',
  },
];

export function About() {
  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary/30 pb-2">核心优势</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <Card key={index} className="h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <adv.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-100">{adv.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {adv.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
