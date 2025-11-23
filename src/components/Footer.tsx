import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: '关于我们', href: '#' },
      { name: '团队介绍', href: '#' },
      { name: '企业文化', href: '#' },
      { name: '加入我们', href: '#' },
    ],
    services: [
      { name: '数字化转型', href: '#' },
      { name: '战略咨询', href: '#' },
      { name: '业务增长', href: '#' },
      { name: '风险管理', href: '#' },
    ],
    resources: [
      { name: '行业洞察', href: '#' },
      { name: '案例研究', href: '#' },
      { name: '白皮书', href: '#' },
      { name: '新闻动态', href: '#' },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">企业品牌</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              致力于为企业提供专业的解决方案，以创新技术和卓越服务，助力企业实现数字化转型。
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail size={18} />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone size={18} />
                <span>+86 400-888-8888</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin size={18} />
                <span>北京市朝阳区商务中心区</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">服务</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">资源</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 企业品牌. 保留所有权利.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                服务条款
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Cookie政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
