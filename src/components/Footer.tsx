import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="gradient-hero py-16 relative">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Slogan */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
              <div className="w-10 h-10 rounded-xl gradient-blue flex items-center justify-center">
                <span className="text-xl font-black text-primary-foreground">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-start-white">START</span>
                <span className="block text-[10px] font-medium tracking-widest uppercase text-start-white/70">
                  Soluções em TI
                </span>
              </div>
            </div>
            <p className="text-start-white/60 text-sm">
              Impulsionando o seu sucesso.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-start-white/70 hover:text-start-white transition-colors">
              Home
            </a>
            <a href="#sobre" className="text-start-white/70 hover:text-start-white transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-start-white/70 hover:text-start-white transition-colors">
              Serviços
            </a>
            <a href="#beneficios" className="text-start-white/70 hover:text-start-white transition-colors">
              Benefícios
            </a>
            <a href="#processo" className="text-start-white/70 hover:text-start-white transition-colors">
              Processo
            </a>
            <a href="#contato" className="text-start-white/70 hover:text-start-white transition-colors">
              Contato
            </a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-start-white/10 hover:bg-start-white/20 flex items-center justify-center transition-colors group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} className="text-start-white group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-start-white/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-start-white/50">
          <p>
            © {currentYear} START Soluções em TI. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com 💙 pela START
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
