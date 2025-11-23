import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: '张明',
      position: 'CEO',
      company: '科技创新有限公司',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      content: '与该公司合作是我们做出的最正确的决定。他们的专业团队帮助我们实现了数字化转型，业务效率提升了300%。',
      rating: 5,
    },
    {
      name: '李娜',
      position: '运营总监',
      company: '国际贸易集团',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      content: '项目执行非常专业高效，团队响应迅速。他们不仅提供了优秀的解决方案，更成为了我们长期信赖的战略合作伙伴。',
      rating: 5,
    },
    {
      name: '王强',
      position: '技术总监',
      company: '智能制造企业',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      content: '他们的技术实力和服务质量都非常出色。从咨询到实施，每个环节都体现出专业性，完全超出了我们的预期。',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              客户评价
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            听听我们的客户怎么说，他们的成功就是我们的荣誉
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <div className="relative glass-effect rounded-xl p-8 border border-primary/30 group-hover:border-primary/50 transition-all duration-300">
                {/* Quote Icon with glow */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Quote className="relative text-primary/40 group-hover:text-primary/60 transition-colors" size={40} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Star className="text-primary fill-primary" size={18} />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-primary/30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/50 rounded-full blur-md" />
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative w-12 h-12 rounded-full object-cover border-2 border-primary/50"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-12"
        >
          <p className="text-center text-muted-foreground mb-8">
            受到行业领先企业的信赖
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Microsoft', 'Amazon', 'Google', 'Apple', 'Meta', 'IBM'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-40 hover:opacity-100 transition-opacity"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
