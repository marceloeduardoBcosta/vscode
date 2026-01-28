import { MessageSquare, Search, Lightbulb, Code2, Rocket, Headphones } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Primeiro Contato',
      description: 'Você nos conta sobre seu projeto e suas necessidades. Ouvimos atentamente para entender seus objetivos.',
    },
    {
      icon: Search,
      number: '02',
      title: 'Análise e Diagnóstico',
      description: 'Nossa equipe analisa seu cenário atual e identifica as melhores soluções para o seu desafio.',
    },
    {
      icon: Lightbulb,
      number: '03',
      title: 'Proposta Personalizada',
      description: 'Elaboramos uma proposta sob medida com escopo, prazos e investimento transparentes.',
    },
    {
      icon: Code2,
      number: '04',
      title: 'Desenvolvimento',
      description: 'Iniciamos o desenvolvimento com atualizações frequentes e total transparência no processo.',
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Entrega e Lançamento',
      description: 'Após testes rigorosos, realizamos a entrega e lançamento com todo suporte necessário.',
    },
    {
      icon: Headphones,
      number: '06',
      title: 'Suporte Contínuo',
      description: 'Mantemos acompanhamento pós-entrega para garantir que tudo funcione perfeitamente.',
    },
  ];

  return (
    <section id="processo" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-to-r from-primary/5 to-transparent -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Do primeiro contato à{' '}
            <span className="text-gradient">entrega final</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo transparente e organizado que garante resultados 
            excepcionais em cada projeto.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  <div className="card-service">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-blue flex items-center justify-center">
                        <step.icon size={28} className="text-primary-foreground" />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">
                          Etapa {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mb-2 mt-1">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center shadow-glow">
                    <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
