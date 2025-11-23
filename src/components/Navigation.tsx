import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '#home' },
    { name: '服务', href: '#services' },
    { name: '优势', href: '#advantages' },
    { name: '客户评价', href: '#testimonials' },
    { name: '关于我们', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="relative">
              <Zap className="text-primary animate-pulse-glow" size={28} />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <h1 className="text-2xl font-bold neon-text">NEXUS</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2.5 rounded-lg font-medium overflow-hidden group">
              <span className="relative z-10">联系我们</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2.5 rounded-lg font-medium">
                联系我们
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
