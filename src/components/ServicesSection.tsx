import { Globe, Settings, Monitor, Headphones, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Sites Profissionais',
      description: 'Criamos sites modernos, responsivos e otimizados para conversão. Seu negócio visível 24 horas por dia, 7 dias por semana.',
      features: ['Design exclusivo', 'SEO otimizado', 'Alta performance', 'Mobile first'],
    },
    {
      icon: Settings,
      title: 'Sistemas Personalizados',
      description: 'Desenvolvemos sistemas sob medida que automatizam processos e aumentam a eficiência operacional do seu negócio.',
      features: ['Automação de processos', 'Integração com APIs', 'Dashboard analítico', 'Escalabilidade'],
    },
    {
      icon: Monitor,
      title: 'Gestão de TI',
      description: 'Gerenciamos toda a infraestrutura tecnológica da sua empresa, garantindo segurança, disponibilidade e performance.',
      features: ['Monitoramento 24/7', 'Backup em nuvem', 'Segurança de dados', 'Consultoria técnica'],
    },
    {
      icon: Headphones,
      title: 'Suporte Especializado',
      description: 'Suporte técnico rápido e eficiente para resolver problemas e manter sua operação funcionando sem interrupções.',
      features: ['Resposta rápida', 'Suporte remoto', 'Manutenção preventiva', 'Atendimento humanizado'],
    },
  ];

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções completas para{' '}
            <span className="text-gradient">impulsionar seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos um portfólio completo de serviços de tecnologia para atender 
            todas as necessidades da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl gradient-blue flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-500">
                <service.icon size={32} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                Saiba mais
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
