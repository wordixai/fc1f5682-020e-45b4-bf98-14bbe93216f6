import { Award, Globe, Clock, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="advantages" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              核心优势
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            选择我们，选择专业、高效、可靠的合作伙伴
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* 3D Card */}
                <div className="glass-effect rounded-xl p-8 text-center border border-primary/30 group-hover:border-primary transition-all duration-300 relative overflow-hidden">
                  {/* Holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* 3D Icon */}
                    <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-md animate-pulse" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                        <Icon className="text-primary-foreground" size={32} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {advantage.description}
                    </p>

                    <div className="pt-6 border-t border-primary/30">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                        {advantage.stats}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {advantage.statsLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary blur-3xl opacity-30 animate-pulse" />
          <div className="relative glass-effect border border-primary/50 rounded-2xl p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              准备好开启合作了吗？
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              立即联系我们，获取专业的咨询服务和定制化解决方案
            </p>
            <button className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold overflow-hidden group neon-glow">
              <span className="relative z-10">免费咨询</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
