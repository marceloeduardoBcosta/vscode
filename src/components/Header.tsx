import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#processo', label: 'Processo' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-start-white/95 backdrop-blur-lg shadow-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <div className={`w-10 h-10 rounded-xl gradient-blue flex items-center justify-center ${isScrolled ? '' : 'shadow-glow'}`}>
                <span className="text-xl font-black text-primary-foreground">S</span>
              </div>
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-start-dark' : 'text-start-white'}`}>
                START
              </span>
              <span className={`block text-[10px] font-medium tracking-widest uppercase ${isScrolled ? 'text-muted-foreground' : 'text-start-white/70'}`}>
                Soluções em TI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-start-white/90 hover:text-start-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5562998608881?text=Olá! Gostaria de saber mais sobre os serviços da START."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-start-white hover:bg-start-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className={`lg:hidden mt-4 pb-4 border-t ${isScrolled ? 'border-border' : 'border-start-white/20'}`}>
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled 
                      ? 'text-foreground hover:bg-muted' 
                      : 'text-start-white hover:bg-start-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5562998608881?text=Olá! Gostaria de saber mais sobre os serviços da START."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-3 mt-2 text-center"
              >
                Fale Conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
