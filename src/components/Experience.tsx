'use client';

import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

const experiences = [
  {
    company: '江苏润和软件股份有限公司',
    role: '技术型项目经理 / 主管',
    period: '2015.07 - 至今',
    details: [
      '统筹管理：负责AI测试平台、性能工具链等核心产品的规划、研发与交付。',
      '技术攻关：主导Caffe/TensorFlow算子适配，开发跨平台测试工具；搭建Web测试平台。',
      '独立开发：Python Camera调优工具、GPU分析工具、Java+Hadoop大数据日志分析后台。',
    ],
  },
  {
    company: '南京睿达康信息技术有限公司',
    role: 'Android开发工程师',
    period: '2014.10 - 2015.06',
    details: [
      '核心模块负责人：担任TCL Idol3手机项目独立应用接口人。',
      '主导Settings模块的架构优化与Bug修复，保障项目按时高质量出货。',
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-secondary/30 pb-2">工作经历</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />
              
              <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute left-[50%] w-4 h-4 rounded-full bg-slate-950 border-2 border-primary -translate-x-1/2 z-10" />

                {/* Content */}
                <div className="md:w-[45%] mb-8 md:mb-0">
                  <Card className="h-full">
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-slate-100">{exp.company}</h3>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-primary font-medium">{exp.role}</span>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-[45%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
