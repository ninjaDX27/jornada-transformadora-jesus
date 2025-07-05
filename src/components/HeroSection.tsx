
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-deep via-blue-deep/90 to-gray-900 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 lg:opacity-20">
        <div className="absolute top-4 left-4 w-24 h-24 sm:top-8 sm:left-8 sm:w-32 sm:h-32 md:top-20 md:left-10 md:w-64 md:h-64 bg-gold-divine/30 rounded-full blur-xl md:blur-3xl"></div>
        <div className="absolute bottom-4 right-4 w-32 h-32 sm:bottom-8 sm:right-8 sm:w-48 sm:h-48 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-gold-divine/20 rounded-full blur-xl md:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 sm:w-40 sm:h-40 md:w-80 md:h-80 bg-white/10 rounded-full blur-xl md:blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto relative z-10 py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl lg:max-w-none">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-gold-divine text-blue-deep rounded-full text-xs sm:text-sm font-poppins font-semibold mb-4 tracking-wider uppercase">
                ✨ Transforme sua vida espiritual em 21 dias
              </span>
            </div>
            
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 text-white leading-tight">
              Jornada Transformadora de Jesus
            </h1>
            
            <h2 className="font-lora text-lg sm:text-xl md:text-2xl lg:text-3xl text-beige-soft/90 mb-6 sm:mb-8 font-medium leading-relaxed">
              21 Dias Para Renovar Sua Fé e Caminhar com Cristo
            </h2>
            
            <p className="font-lora text-base sm:text-lg md:text-xl text-beige-soft/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Um guia prático e espiritual que vai transformar sua relação com Deus através de 
              devocionais profundos, reflexões bíblicas e exercícios de fé que realmente funcionam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8">
              <Button 
                onClick={scrollToCheckout}
                size="lg" 
                className="w-full sm:w-auto bg-gold-divine hover:bg-gold-divine/90 text-blue-deep font-poppins font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-gold-divine/25 transition-all duration-300 transform hover:scale-105 tracking-wide uppercase min-h-[56px]"
              >
                <span className="hidden sm:inline">🔥 Quero Transformar Minha Vida Agora</span>
                <span className="sm:hidden">🔥 Transformar Minha Vida</span>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-xs sm:text-sm text-beige-soft/70 font-lora">
              <div className="flex items-center">
                <span className="mr-2 text-gold-divine">📖</span>
                <span>eBook Digital</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-gold-divine">📱</span>
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-gold-divine">✝️</span>
                <span>21 Dias de Fé</span>
              </div>
            </div>
          </div>
          
          {/* Right side - eBook mockup */}
          <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-last">
            <div className="relative">
              <div className="relative transform rotate-3 sm:rotate-6 lg:rotate-12 hover:rotate-1 sm:hover:rotate-3 lg:hover:rotate-6 transition-transform duration-500">
                <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-90 lg:w-80 lg:h-96 bg-gradient-to-br from-gold-divine via-blue-deep to-gray-800 rounded-lg shadow-2xl relative overflow-hidden border border-gold-divine/20">
                  <div className="absolute right-0 top-0 w-3 sm:w-4 lg:w-6 h-full bg-black/30"></div>
                  
                  <div className="absolute top-4 sm:top-6 lg:top-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-gold-divine text-xl sm:text-2xl lg:text-4xl drop-shadow-lg">✝️</div>
                  </div>
                  
                  <div className="absolute top-12 sm:top-16 lg:top-20 left-3 right-3 sm:left-4 sm:right-4 text-center">
                    <h3 className="text-white font-playfair font-semibold text-base sm:text-lg lg:text-xl mb-2 leading-tight drop-shadow-lg">
                      JORNADA TRANSFORMADORA
                    </h3>
                    <h4 className="text-gold-divine font-playfair font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4 drop-shadow-lg">
                      DE JESUS
                    </h4>
                    <div className="w-10 sm:w-12 lg:w-16 h-px bg-gold-divine mx-auto mb-2 sm:mb-3 lg:mb-4"></div>
                    <p className="text-beige-soft font-lora text-xs sm:text-sm font-medium leading-relaxed drop-shadow-md px-1 sm:px-2">
                      21 Dias Para Renovar Sua Fé e Caminhar com Cristo
                    </p>
                  </div>
                  
                  <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-gold-divine text-lg sm:text-xl lg:text-2xl drop-shadow-lg">🙏</div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-divine/10 to-white/20"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-gold-divine/20 to-blue-deep/20 rounded-lg blur-xl -z-10 transform scale-110"></div>
              </div>
              
              <div className="hidden sm:block absolute -top-2 -left-2 md:-top-4 md:-left-4 animate-bounce text-lg md:text-2xl opacity-70 text-gold-divine">⭐</div>
              <div className="hidden sm:block absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 animate-bounce animation-delay-1000 text-lg md:text-2xl opacity-70 text-gold-divine">🕊️</div>
              <div className="hidden md:block absolute top-1/2 -right-8 animate-pulse text-xl opacity-60 text-gold-divine">💫</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
