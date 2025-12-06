import Header from '@/react-app/components/Header';
import Section from '@/react-app/components/Section';
import Button from '@/react-app/components/Button';
import PortfolioCard from '@/react-app/components/PortfolioCard';
import TestimonialCard from '@/react-app/components/TestimonialCard';
import FAQItem from '@/react-app/components/FAQItem';
import Card3D from '@/react-app/components/Card3D';
import { Crosshair, Rocket, Award, BarChart3, Timer, Flame } from 'lucide-react';
export default function Home() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5542991288461?text=Olá! Quero elevar minha presença digital com a AF Devs', '_blank');
  };
  const handleInstagram = () => {
    window.open('https://instagram.com/af.devs', '_blank');
  };
  const handleEmail = () => {
    window.location.href = 'mailto:afdevs.app@gmail.com';
  };
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Premium Cinematic */}
      <section className="hero-background pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 min-h-[70vh] sm:min-h-[65vh] flex items-center relative overflow-hidden">
        {/* Floating Particles */}
        <div className="hero-particles">
          {[...Array(15)].map((_, i) => <div key={i} className="hero-particle" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }} />)}
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center animate-fade-in-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 mb-8 sm:mb-10 justify-center">
              <div className="bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 backdrop-blur-md border border-gold/50 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-2xl shadow-gold/20">
                <span className="font-manrope text-gold text-xs sm:text-sm font-bold letter-spacing-wide tracking-wider">DESIGN PREMIUM • ESTRATÉGIA COMPROVADA</span>
              </div>
            </div>
            
            <h1 className="font-inter-tight font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-5 sm:mb-6 leading-[1.1] letter-spacing-wide px-2">
              <span className="block mb-2 sm:mb-3" style={{
              textShadow: '0 0 40px rgba(30, 64, 175, 0.5), 0 0 80px rgba(245, 158, 11, 0.2)'
            }}>
                Presença digital não é aparência.
              </span>
              <span className="block" style={{
              textShadow: '0 0 40px rgba(30, 64, 175, 0.5), 0 0 80px rgba(245, 158, 11, 0.2)'
            }}>
                É <span className="animate-text-shimmer" style={{
                textShadow: '0 0 60px rgba(245, 158, 11, 0.6)'
              }}>PODER</span>.
              </span>
            </h1>
            
            <p className="font-manrope text-white/95 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4" style={{
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'
          }}>
              Landing pages premium que comunicam <span className="text-gold font-semibold">autoridade</span>, entregam <span className="text-gold font-semibold">confiança</span> e geram oportunidades <span className="text-gold font-semibold">todos os dias</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 max-w-4xl mx-auto">
              <button 
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-white font-manrope font-semibold text-lg rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Quero Minha Landing Page Premium
              </button>
              <Button variant="secondary" onClick={() => {
              const element = document.getElementById('portfolio');
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }} className="border-2 border-white/30 hover:border-gold/60 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                Ver Portfólio
              </Button>
            </div>
            
            {/* Subtle metrics or trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-12 sm:mt-16 px-4 opacity-80">
              <div className="text-center">
                <div className="font-inter-tight font-black text-2xl sm:text-3xl text-gold mb-1">100%</div>
                <div className="font-manrope text-xs sm:text-sm text-white/70 letter-spacing-wide">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="font-inter-tight font-black text-2xl sm:text-3xl text-gold mb-1">3x</div>
                <div className="font-manrope text-xs sm:text-sm text-white/70 letter-spacing-wide">Média de Conversão</div>
              </div>
              <div className="text-center">
                <div className="font-inter-tight font-black text-2xl sm:text-3xl text-gold mb-1">7-14d</div>
                <div className="font-manrope text-xs sm:text-sm text-white/70 letter-spacing-wide">Entrega Premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <Section background="mist" className="py-16 sm:py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">
          <div className="animate-slide-in-left px-2 sm:px-0">
            <h2 className="font-inter-tight font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-onyx mb-6 sm:mb-8 leading-tight letter-spacing-wide">
              Sua presença digital não reflete o valor do seu negócio?
            </h2>
            <p className="font-inter text-onyx-light text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Você trabalha duro, oferece um serviço excepcional, mas sua presença online ainda não transmite a autoridade e o profissionalismo que você merece.
            </p>
            <p className="font-inter text-onyx-light text-base sm:text-lg leading-relaxed">
              Páginas genéricas não convertem. Design mediano não constrói confiança. E tempo perdido com soluções inadequadas atrasa seu crescimento.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-slide-in-right">
            <Card3D className="bg-white rounded-3xl p-6 sm:p-8 card-premium text-center group animate-fade-in-delay-1">
              <Crosshair className="w-12 h-12 sm:w-14 sm:h-14 text-royal/20 mx-auto mb-4 sm:mb-6 group-hover:text-royal/40 transition-colors duration-300" />
              <h3 className="font-inter-tight font-bold text-lg sm:text-xl text-onyx mb-3 sm:mb-4 letter-spacing-wide">Baixa Conversão</h3>
              <p className="font-inter text-sm sm:text-base text-onyx-light leading-relaxed">Visitantes que não se tornam clientes</p>
            </Card3D>
            <Card3D className="bg-white rounded-3xl p-6 sm:p-8 card-premium text-center group animate-fade-in-delay-2">
              <Award className="w-12 h-12 sm:w-14 sm:h-14 text-imperial/20 mx-auto mb-4 sm:mb-6 group-hover:text-imperial/40 transition-colors duration-300" />
              <h3 className="font-inter-tight font-bold text-lg sm:text-xl text-onyx mb-3 sm:mb-4 letter-spacing-wide">Falta de Autoridade</h3>
              <p className="font-inter text-sm sm:text-base text-onyx-light leading-relaxed">Não transmite confiança profissional</p>
            </Card3D>
            <Card3D className="bg-white rounded-3xl p-6 sm:p-8 card-premium text-center group animate-fade-in-delay-3">
              <Timer className="w-12 h-12 sm:w-14 sm:h-14 text-gold/20 mx-auto mb-4 sm:mb-6 group-hover:text-gold/40 transition-colors duration-300" />
              <h3 className="font-inter-tight font-bold text-lg sm:text-xl text-onyx mb-3 sm:mb-4 letter-spacing-wide">Tempo Perdido</h3>
              <p className="font-inter text-sm sm:text-base text-onyx-light leading-relaxed">Tentativas que não geram resultados</p>
            </Card3D>
            <Card3D className="bg-white rounded-3xl p-6 sm:p-8 card-premium text-center group animate-fade-in-delay-1">
              <BarChart3 className="w-12 h-12 sm:w-14 sm:h-14 text-royal/20 mx-auto mb-4 sm:mb-6 group-hover:text-royal/40 transition-colors duration-300" />
              <h3 className="font-inter-tight font-bold text-lg sm:text-xl text-onyx mb-3 sm:mb-4 letter-spacing-wide">Crescimento Estagnado</h3>
              <p className="font-inter text-sm sm:text-base text-onyx-light leading-relaxed">Seu negócio merece mais</p>
            </Card3D>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <section className="section-gradient-royal py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="font-inter-tight font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 leading-tight letter-spacing-wide px-2">
              A Solução AF Devs
            </h2>
            <p className="font-manrope text-mist text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 px-4">
              Landing pages premium que combinam design sofisticado com estratégia de conversão comprovada. Cada pixel pensado para elevar sua marca e transformar visitantes em clientes.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
              <Card3D className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 card-premium text-center group animate-fade-in-delay-1">
                <Rocket className="w-12 h-12 sm:w-14 sm:h-14 text-gold/20 mx-auto mb-4 sm:mb-6 group-hover:text-gold/40 transition-colors duration-300" />
                <h3 className="font-inter-tight font-bold text-white text-lg sm:text-xl mb-3 sm:mb-4 letter-spacing-wide">Design Premium</h3>
                <p className="font-inter text-sm sm:text-base text-mist leading-relaxed">Estética de agência internacional que transmite luxo acessível</p>
              </Card3D>
              <Card3D className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 card-premium text-center group animate-fade-in-delay-2">
                <Rocket className="w-12 h-12 sm:w-14 sm:h-14 text-gold/20 mx-auto mb-4 sm:mb-6 group-hover:text-gold/40 transition-colors duration-300" />
                <h3 className="font-inter-tight font-bold text-white text-lg sm:text-xl mb-3 sm:mb-4 letter-spacing-wide">Alta Conversão</h3>
                <p className="font-inter text-sm sm:text-base text-mist leading-relaxed">Copywriting persuasivo focado em resultados imediatos</p>
              </Card3D>
              <Card3D className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 card-premium text-center group sm:col-span-2 md:col-span-1 animate-fade-in-delay-3">
                <Award className="w-12 h-12 sm:w-14 sm:h-14 text-gold/20 mx-auto mb-4 sm:mb-6 group-hover:text-gold/40 transition-colors duration-300" />
                <h3 className="font-inter-tight font-bold text-white text-lg sm:text-xl mb-3 sm:mb-4 letter-spacing-wide">Autoridade Real</h3>
                <p className="font-inter text-sm sm:text-base text-mist leading-relaxed">Posicionamento que eleva sua marca ao próximo nível</p>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Section id="portfolio" background="white" className="py-16 sm:py-20 md:py-28">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up px-4">
          <h2 className="font-inter-tight font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-onyx mb-6 sm:mb-8 leading-tight letter-spacing-wide">
            Portfólio Premium
          </h2>
          <p className="font-manrope text-onyx-light text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Cada projeto é uma obra de design estratégico, criada para impressionar e converter
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-start">
          <div className="animate-slide-in-left">
            <PortfolioCard type="desktop" title="Versão Desktop Premium" description="Design sofisticado que transmite confiança e profissionalismo. Interface fluida com foco em conversão para agendamentos via WhatsApp." imageUrl="https://mocha-cdn.com/019af55b-d9d5-78de-b983-b32fe9ecd7b8/IMG_20251206_172633.jpg" />
          </div>
          <div className="animate-slide-in-right">
            <PortfolioCard type="mobile" title="Versão Mobile Impecável" description="Responsividade premium com navegação intuitiva. Cada elemento otimizado para máxima conversão em dispositivos móveis." imageUrl="https://mocha-cdn.com/019af55b-d9d5-78de-b983-b32fe9ecd7b8/IMG_20251206_172621.jpg" />
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="mist" className="py-16 sm:py-20 md:py-28">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="font-inter-tight font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-onyx mb-6 sm:mb-8 leading-tight letter-spacing-wide">
            Como Funciona
          </h2>
          <p className="font-manrope text-onyx-light text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Processo simples, elegante e focado em entregar resultados
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[{
          step: '01',
          title: 'Análise',
          desc: 'Entendemos seu negócio e objetivos'
        }, {
          step: '02',
          title: 'Estratégia',
          desc: 'Desenvolvemos a melhor abordagem'
        }, {
          step: '03',
          title: 'Criação',
          desc: 'Design premium e copy persuasiva'
        }, {
          step: '04',
          title: 'Entrega',
          desc: 'Sua landing page pronta para converter'
        }].map((item, i) => <Card3D key={i} className={`bg-white rounded-3xl p-6 sm:p-8 card-premium text-center group animate-fade-in-delay-${i + 1}`}>
              <div className="font-inter-tight font-black text-5xl sm:text-6xl md:text-7xl text-gold/20 mb-4 sm:mb-6 group-hover:text-gold/40 transition-colors duration-300">
                {item.step}
              </div>
              <h3 className="font-inter-tight font-bold text-lg sm:text-xl text-onyx mb-3 sm:mb-4 letter-spacing-wide">
                {item.title}
              </h3>
              <p className="font-inter text-sm sm:text-base text-onyx-light leading-relaxed">
                {item.desc}
              </p>
            </Card3D>)}
        </div>
      </Section>

      {/* Differentials Section */}
      <section className="section-gradient-imperial py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <h2 className="font-inter-tight font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 leading-tight letter-spacing-wide">
              Por Que Escolher AF Devs
            </h2>
            <p className="font-manrope text-mist text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A escolha óbvia para empresários que buscam excelência
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[{
            icon: Flame,
            title: 'Design que Vende',
            desc: 'Não criamos páginas bonitas. Criamos experiências que convertem visitantes em clientes.'
          }, {
            icon: Award,
            title: 'Autoridade Visual',
            desc: 'Cada elemento estrategicamente pensado para posicionar você como referência no seu mercado.'
          }, {
            icon: Timer,
            title: 'Entrega Rápida',
            desc: 'Processo otimizado que respeita seu tempo sem comprometer a qualidade premium.'
          }, {
            icon: Rocket,
            title: 'Suporte Dedicado',
            desc: 'Atendimento humanizado e profissional em cada etapa do projeto.'
          }, {
            icon: BarChart3,
            title: 'Estratégia Comprovada',
            desc: 'Métodos testados e aprovados que geram resultados mensuráveis.'
          }, {
            icon: Award,
            title: 'Luxo Acessível',
            desc: 'Qualidade de agência internacional com investimento que cabe no seu orçamento.'
          }].map((item, i) => {
            const IconComponent = item.icon;
            return <Card3D key={i} className={`bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 card-premium text-center group animate-fade-in-delay-${i % 3 + 1}`}>
                  <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 text-gold/20 mx-auto mb-4 sm:mb-6 group-hover:text-gold/40 transition-colors duration-300" />
                  <h3 className="font-inter-tight font-bold text-white text-lg sm:text-xl mb-3 sm:mb-4 letter-spacing-wide">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-mist leading-relaxed">
                    {item.desc}
                  </p>
                </Card3D>;
          })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Section background="white" className="py-16 sm:py-20 md:py-28">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="font-inter-tight font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-onyx mb-6 sm:mb-8 leading-tight letter-spacing-wide">
            Resultados que Falam
          </h2>
          <p className="font-manrope text-onyx-light text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Empresários que elevaram sua presença digital com AF Devs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-start">
          <div className="animate-fade-in-delay-1">
            <TestimonialCard name="Ricardo Mendes" role="CEO, Mendes Consultoria" content="A landing page criada pela AF Devs transformou nossos resultados. Design impecável e conversão acima de qualquer expectativa. Profissionalismo de verdade." />
          </div>
          <div className="animate-fade-in-delay-2">
            <TestimonialCard name="Mariana Costa" role="Fundadora, Costa Arquitetura" content="Finalmente uma presença digital que reflete o nível do meu trabalho. O André entendeu perfeitamente nossa visão e entregou além do esperado." />
          </div>
          <div className="animate-fade-in-delay-3">
            <TestimonialCard name="Paulo Silva" role="Diretor, Silva & Associados" content="Investimento que valeu cada centavo. Nossa taxa de conversão triplicou e o feedback dos clientes sobre o site tem sido excepcional." />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="mist" className="py-16 sm:py-20 md:py-28">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="font-inter-tight font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-onyx mb-6 sm:mb-8 leading-tight letter-spacing-wide">
            Perguntas Frequentes
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 card-premium">
          <FAQItem question="Quanto tempo leva para criar minha landing page?" answer="O processo completo leva entre 7 a 14 dias, dependendo da complexidade. Priorizamos qualidade sem comprometer prazos." />
          <FAQItem question="A landing page funciona em todos os dispositivos?" answer="Sim. Todas as páginas são desenvolvidas com design responsivo premium, garantindo experiência impecável em desktop, tablet e mobile." />
          <FAQItem question="Posso fazer alterações após a entrega?" answer="Claro. Oferecemos suporte para ajustes e atualizações para garantir que sua página continue performando no máximo." />
          <FAQItem question="Como funciona o processo de criação?" answer="Simples: conversa inicial para entender seu negócio, desenvolvimento da estratégia e design, revisões com você, e entrega da página pronta para converter." />
          <FAQItem question="Qual o investimento necessário?" answer="Entre em contato via WhatsApp para receber uma proposta personalizada baseada nas necessidades específicas do seu projeto." />
        </div>
      </Section>

      {/* Final CTA Section - Enhanced */}
      <section className="hero-gradient py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="font-inter-tight font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 leading-tight letter-spacing-wide px-2">
              Sua presença digital premium <br className="hidden sm:block" />
              <span className="animate-text-shimmer">
                começa agora
              </span>
            </h2>
            <p className="font-manrope text-mist text-base sm:text-lg md:text-xl lg:text-2xl mb-10 sm:mb-12 md:mb-14 leading-relaxed max-w-3xl mx-auto px-4">
              Não deixe mais um dia passar com uma presença digital que não reflete o verdadeiro valor do seu negócio. O momento de elevar sua marca é este.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 max-w-4xl mx-auto mb-10 sm:mb-12">
              <Button variant="primary" icon="whatsapp" onClick={handleWhatsApp} className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-14 py-4 sm:py-5 md:py-6 animate-gold-glow">
                Quero Elevar Minha Marca Agora
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <button onClick={handleInstagram} className="flex items-center gap-2 text-mist hover:text-gold transition-colors duration-300 font-manrope text-sm sm:text-base">
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
                @af.devs
              </button>
              
              <button onClick={handleEmail} className="flex items-center gap-2 text-mist hover:text-gold transition-colors duration-300 font-manrope text-sm sm:text-base">
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                afdevs.app@gmail.com
              </button>
            </div>

            <p className="font-inter text-mist/60 text-xs sm:text-sm letter-spacing-wide">
              AF Devs — Design que converte. Estratégia que eleva.
            </p>
          </div>
        </div>
      </section>
    </div>;
}
