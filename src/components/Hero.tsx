import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-secondary via-background to-accent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                专业·创新·卓越
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              引领行业创新
              <br />
              <span className="text-primary">成就卓越未来</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              我们致力于为企业提供专业的解决方案，以创新技术和卓越服务，助力企业实现数字化转型，开启商业新篇章。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 group">
                立即咨询
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-border text-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-colors font-semibold">
                了解更多
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">合作企业</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-1">客户满意度</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">15年</div>
                <div className="text-sm text-muted-foreground mt-1">行业经验</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop"
                alt="Business Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-accent rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
