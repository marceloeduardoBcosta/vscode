import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    window.open(`https://wa.me/5562998608881?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '(62) 99860-9881',
      href: 'https://wa.me/5562998608881',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@startsolucoes.com.br',
      href: 'mailto:contato@startsolucoes.com.br',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Goiânia - GO',
      href: '#',
    },
  ];

  return (
    <section id="contato" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/10 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Pronto para{' '}
              <span className="text-gradient">transformar</span>
              {' '}seu negócio?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Entre em contato agora mesmo e descubra como podemos ajudar sua empresa 
              a alcançar novos patamares com tecnologia de ponta.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center group-hover:shadow-glow transition-shadow duration-500">
                    <info.icon size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">{info.label}</span>
                    <span className="block text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5562998608881?text=Olá! Gostaria de saber mais sobre os serviços da START."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-flex"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Right Content - Form */}
          <div className="card-service">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Solicite um orçamento
            </h3>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário e entraremos em contato em até 24 horas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="(62) 99860-9881"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg justify-center"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
