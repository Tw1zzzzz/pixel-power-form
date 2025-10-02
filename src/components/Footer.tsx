import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {}

function Footer({}: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          
          {/* Brand Section - Center */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="flex flex-col items-center space-y-6">
              <a
                href="https://t.me/tw1zzV"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 duration-300 flex items-center justify-center"
              >
                <img
                  src="/logo-1-1.svg"
                  alt="Developer Logo"
                  className="h-13 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-logo')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-logo text-white text-xl font-bold px-4 py-3 bg-gradient-to-r from-red-600 to-blue-600 rounded';
                      fallback.textContent = 'DEV';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </a>
              <p className="text-gray-400 text-sm leading-relaxed text-center">
                Разработка современных веб-решений с фокусом на качество и инновации
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <div className="space-y-3">
              {[
                { name: "Главная", id: "hero" },
                { name: "О нас", id: "about" },
                { name: "Услуги", id: "services" },
                { name: "Команда", id: "team" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <div className="space-y-3">
              {[
                { name: "Игры", id: "games" },
                { name: "Достижения", id: "achievements" },
                { name: "FAQ", id: "faq" },
                { name: "Контакты", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="https://t.me/F1ife"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Telegram</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Россия</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>По запросу</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Place of Power. Все права защищены.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
              >
                Наверх
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Bottom Edge */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-pulse"></div>
    </footer>
  );
}

export default Footer;