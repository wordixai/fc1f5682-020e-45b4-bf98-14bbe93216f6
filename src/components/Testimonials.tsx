import { Star, Quote } from 'lucide-react';

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
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            客户评价
          </h2>
          <p className="text-lg text-muted-foreground">
            听听我们的客户怎么说，他们的成功就是我们的荣誉
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-primary/20" size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={18} />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
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
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 border-t border-border pt-12">
          <p className="text-center text-muted-foreground mb-8">
            受到行业领先企业的信赖
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Microsoft', 'Amazon', 'Google', 'Apple', 'Meta', 'IBM'].map((company) => (
              <div key={company} className="text-2xl font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
