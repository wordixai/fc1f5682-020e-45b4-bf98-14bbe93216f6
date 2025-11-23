import { Award, Globe, Clock, HeartHandshake } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: '专业团队',
      description: '汇聚行业精英，拥有丰富的实战经验和专业资质',
      stats: '200+',
      statsLabel: '专业顾问',
    },
    {
      icon: Globe,
      title: '全球视野',
      description: '国际化服务能力，服务网络覆盖全球主要市场',
      stats: '50+',
      statsLabel: '服务城市',
    },
    {
      icon: Clock,
      title: '高效执行',
      description: '敏捷的项目管理体系，确保项目按时高质量交付',
      stats: '95%',
      statsLabel: '准时交付率',
    },
    {
      icon: HeartHandshake,
      title: '贴心服务',
      description: '7×24小时全天候支持，及时响应客户需求',
      stats: '24/7',
      statsLabel: '在线支持',
    },
  ];

  return (
    <section id="advantages" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            核心优势
          </h2>
          <p className="text-lg text-muted-foreground">
            选择我们，选择专业、高效、可靠的合作伙伴
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon className="text-primary" size={32} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {advantage.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {advantage.description}
                </p>

                <div className="pt-6 border-t border-border">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {advantage.stats}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {advantage.statsLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            准备好开启合作了吗？
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            立即联系我们，获取专业的咨询服务和定制化解决方案
          </p>
          <button className="bg-background text-foreground px-8 py-4 rounded-lg hover:bg-background/90 transition-colors font-semibold">
            免费咨询
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
