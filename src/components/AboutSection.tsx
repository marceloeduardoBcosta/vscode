import { Target, Lightbulb, TrendingUp, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada projeto é desenvolvido com metas claras e mensuráveis.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Contínua',
      description: 'Utilizamos as tecnologias mais modernas do mercado.',
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Mútuo',
      description: 'Seu sucesso é o nosso maior indicador de performance.',
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Proteção e confiabilidade em todas as soluções.',
    },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Parceiros estratégicos para a{' '}
              <span className="text-gradient">transformação digital</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <strong className="text-foreground">START Soluções em TI</strong> nasceu com o propósito de democratizar 
              o acesso à tecnologia de ponta. Acreditamos que toda empresa, independente do tamanho, 
              merece soluções tecnológicas que realmente funcionam.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe é composta por profissionais experientes e apaixonados por tecnologia, 
              prontos para entender as necessidades únicas do seu negócio e entregar resultados 
              que superam expectativas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Clientes Ativos</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Mercado</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-service group"
              >
                <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-500">
                  <value.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
