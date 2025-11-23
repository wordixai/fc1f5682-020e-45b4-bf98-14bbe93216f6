import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="hologram px-4 py-2 rounded-full text-sm font-semibold text-primary flex items-center gap-2 w-fit">
                <Sparkles size={16} className="animate-pulse" />
                专业·创新·卓越
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              引领行业创新
              <br />
              <span className="neon-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                成就卓越未来
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              我们致力于为企业提供专业的解决方案，以创新技术和卓越服务，助力企业实现数字化转型，开启商业新篇章。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 group overflow-hidden neon-glow">
                <span className="relative z-10">立即咨询</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="glass-effect text-foreground px-8 py-4 rounded-lg hover:border-primary/50 transition-all font-semibold">
                了解更多
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { value: '500+', label: '合作企业' },
                { value: '98%', label: '客户满意度' },
                { value: '15年', label: '行业经验' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-effect p-4 rounded-lg"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square lg:h-[600px] rounded-2xl overflow-hidden">
              {/* 3D Holographic Frame */}
              <div className="absolute inset-0 hologram rounded-2xl animate-pulse-glow" />

              {/* Image with overlay */}
              <div className="relative h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=800&fit=crop"
                  alt="Futuristic Technology"
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan-line" />
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-20 h-20 border border-primary/50 rounded-lg animate-float" />
              <div className="absolute bottom-10 left-10 w-16 h-16 border border-secondary/50 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
            </div>

            {/* 3D Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl -z-10 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
