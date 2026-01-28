import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  const highlights = [
    'Soluções sob medida',
    'Suporte especializado',
    'Resultados comprovados',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--start-white)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--start-white)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-start-white/10 backdrop-blur-sm border border-start-white/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-start-white/90">
              Transformando negócios com tecnologia
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-start-white leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Impulsionando o{' '}
            <span className="relative inline-block">
              <span className="text-gradient">seu sucesso</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 10" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="hsl(217, 91%, 60%)" />
                    <stop offset="1" stopColor="hsl(217, 91%, 75%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}com soluções em TI
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-start-white/70 max-w-2xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Oferecemos soluções tecnológicas completas para empresas que querem crescer. 
            Do desenvolvimento à gestão de TI, cuidamos de tudo para você focar no que realmente importa.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-start-white/80">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://wa.me/5562998608881?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
            <a
              href="#servicos"
              className="btn-secondary text-lg"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-start-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-start-white/50 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
