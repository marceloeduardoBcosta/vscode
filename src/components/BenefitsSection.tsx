import { Award, Users, Clock, Zap, HeartHandshake, Rocket } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Entregamos projetos com os mais altos padrões de qualidade, testados e validados.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e em constante atualização com as últimas tecnologias.',
    },
    {
      icon: Clock,
      title: 'Prazos Respeitados',
      description: 'Cumprimos todos os prazos acordados, mantendo você informado em cada etapa.',
    },
    {
      icon: Zap,
      title: 'Agilidade nas Entregas',
      description: 'Metodologias ágeis que garantem entregas rápidas sem comprometer a qualidade.',
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento Humanizado',
      description: 'Relacionamento próximo e transparente, entendendo suas reais necessidades.',
    },
    {
      icon: Rocket,
      title: 'Foco em Resultados',
      description: 'Soluções pensadas para gerar impacto real no seu negócio e no seu faturamento.',
    },
  ];

  return (
    <section id="beneficios" className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Por Que Escolher a START
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start-white mb-6">
            Diferenciais que fazem a{' '}
            <span className="text-gradient">diferença</span>
          </h2>
          <p className="text-lg text-start-white/70">
            Não somos apenas fornecedores de tecnologia. Somos parceiros comprometidos 
            com o crescimento do seu negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-start-white/5 backdrop-blur-sm border border-start-white/10 hover:bg-start-white/10 hover:border-start-white/20 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors duration-500">
                <benefit.icon size={28} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-start-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-start-white/60 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
