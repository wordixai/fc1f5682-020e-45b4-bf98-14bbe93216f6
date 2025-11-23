import { Laptop, Target, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: '数字化转型',
      description: '为企业提供全方位的数字化转型咨询与实施服务，助力业务创新升级。',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Target,
      title: '战略咨询',
      description: '深度分析市场趋势，制定精准战略规划，助力企业把握发展机遇。',
      gradient: 'from-secondary to-accent',
    },
    {
      icon: TrendingUp,
      title: '业务增长',
      description: '通过数据驱动的增长策略，帮助企业实现可持续的业务增长。',
      gradient: 'from-accent to-primary',
    },
    {
      icon: Shield,
      title: '风险管理',
      description: '建立完善的风险管理体系，保障企业稳健运营和长期发展。',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Zap,
      title: '技术创新',
      description: '运用前沿技术解决方案，提升企业核心竞争力和创新能力。',
      gradient: 'from-secondary to-primary',
    },
    {
      icon: Users,
      title: '团队赋能',
      description: '提供专业培训和咨询服务，全面提升团队能力和组织效能。',
      gradient: 'from-accent to-secondary',
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              专业服务
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            我们提供全方位的企业服务解决方案，帮助您的企业在竞争中脱颖而出
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-xl`} />

                <div className="relative glass-effect rounded-xl p-8 h-full border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  {/* Icon with 3D effect */}
                  <div className="relative mb-6 w-fit">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="text-primary-foreground" size={28} />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-md opacity-50 group-hover:opacity-100 transition-opacity`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
