import { Laptop, Target, TrendingUp, Shield, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: '数字化转型',
      description: '为企业提供全方位的数字化转型咨询与实施服务，助力业务创新升级。',
    },
    {
      icon: Target,
      title: '战略咨询',
      description: '深度分析市场趋势，制定精准战略规划，助力企业把握发展机遇。',
    },
    {
      icon: TrendingUp,
      title: '业务增长',
      description: '通过数据驱动的增长策略，帮助企业实现可持续的业务增长。',
    },
    {
      icon: Shield,
      title: '风险管理',
      description: '建立完善的风险管理体系，保障企业稳健运营和长期发展。',
    },
    {
      icon: Zap,
      title: '技术创新',
      description: '运用前沿技术解决方案，提升企业核心竞争力和创新能力。',
    },
    {
      icon: Users,
      title: '团队赋能',
      description: '提供专业培训和咨询服务，全面提升团队能力和组织效能。',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            专业服务
          </h2>
          <p className="text-lg text-muted-foreground">
            我们提供全方位的企业服务解决方案，帮助您的企业在竞争中脱颖而出
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
