
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-deep via-blue-deep/90 to-gray-900 overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10 lg:opacity-20">
        <div className="absolute top-2 left-2 w-16 h-16 sm:top-4 sm:left-4 sm:w-24 sm:h-24 md:top-8 md:left-8 md:w-32 md:h-32 lg:top-20 lg:left-10 lg:w-64 lg:h-64 bg-gold-divine/30 rounded-full blur-lg sm:blur-xl md:blur-3xl"></div>
        <div className="absolute bottom-2 right-2 w-20 h-20 sm:bottom-4 sm:right-4 sm:w-32 sm:h-32 md:bottom-8 md:right-8 md:w-48 md:h-48 lg:bottom-20 lg:right-10 lg:w-96 lg:h-96 bg-gold-divine/20 rounded-full blur-lg sm:blur-xl md:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-80 lg:h-80 bg-white/10 rounded-full blur-lg sm:blur-xl md:blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto relative z-10 py-6 sm:py-8 md:py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-xl lg:max-w-none">
            <div className="mb-3 sm:mb-4 md:mb-6">
              <span className="inline-block px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gold-divine text-blue-deep rounded-full text-xs sm:text-sm font-poppins font-semibold mb-3 sm:mb-4 tracking-wider uppercase">
                ✨ Transforme sua vida espiritual em 21 dias
              </span>
            </div>
            
            <h1 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mb-3 sm:mb-4 md:mb-6 text-white leading-tight">
              Jornada Transformadora de Jesus
            </h1>
            
            <h2 className="font-lora text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-beige-soft/90 mb-4 sm:mb-6 md:mb-8 font-medium leading-relaxed">
              21 Dias Para Renovar Sua Fé e Caminhar com Cristo
            </h2>
            
            <p className="font-lora text-sm sm:text-base md:text-lg lg:text-xl text-beige-soft/80 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
              Um guia prático e espiritual que vai transformar sua relação com Deus através de 
              devocionais profundos, reflexões bíblicas e exercícios de fé que realmente funcionam.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-4 sm:mb-6 md:mb-8">
              <Button 
                onClick={scrollToCheckout}
                size="lg" 
                className="w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-auto bg-gold-divine hover:bg-gold-divine/90 text-blue-deep font-poppins font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl shadow-2xl hover:shadow-gold-divine/25 transition-all duration-300 transform hover:scale-105 tracking-wide uppercase min-h-[48px] sm:min-h-[56px] md:min-h-[64px]"
              >
                <span className="text-center leading-tight">
                  🔥 Quero Transformar<br className="sm:hidden"/>
                  <span className="sm:inline"> Minha Vida Agora</span>
                </span>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-beige-soft/70 font-lora">
              <div className="flex items-center">
                <span className="mr-1.5 sm:mr-2 text-gold-divine">📖</span>
                <span>eBook Digital</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1.5 sm:mr-2 text-gold-divine">📱</span>
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1.5 sm:mr-2 text-gold-divine">✝️</span>
                <span>21 Dias de Fé</span>
              </div>
            </div>
          </div>
          
          {/* Right side - eBook mockup */}
          <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-last">
            <div className="relative">
              <div className="relative transform rotate-2 sm:rotate-3 lg:rotate-6 hover:rotate-1 sm:hover:rotate-2 lg:hover:rotate-3 transition-transform duration-500">
                <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-90 xl:w-80 xl:h-96 bg-gradient-to-br from-gold-divine via-blue-deep to-gray-800 rounded-lg shadow-2xl relative overflow-hidden border border-gold-divine/20">
                  <div className="absolute right-0 top-0 w-2 sm:w-3 lg:w-4 xl:w-6 h-full bg-black/30"></div>
                  
                  <div className="absolute top-3 sm:top-4 lg:top-6 xl:top-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-gold-divine text-lg sm:text-xl lg:text-2xl xl:text-4xl drop-shadow-lg">✝️</div>
                  </div>
                  
                  <div className="absolute top-10 sm:top-12 lg:top-16 xl:top-20 left-2 right-2 sm:left-3 sm:right-3 lg:left-4 lg:right-4 text-center">
                    <h3 className="text-white font-playfair font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mb-1.5 sm:mb-2 leading-tight drop-shadow-lg">
                      JORNADA TRANSFORMADORA
                    </h3>
                    <h4 className="text-gold-divine font-playfair font-semibold text-xs sm:text-sm lg:text-base xl:text-lg mb-2 sm:mb-3 lg:mb-4 drop-shadow-lg">
                      DE JESUS
                    </h4>
                    <div className="w-8 sm:w-10 lg:w-12 xl:w-16 h-px bg-gold-divine mx-auto mb-2 sm:mb-3 lg:mb-4"></div>
                    <p className="text-beige-soft font-lora text-xs sm:text-sm font-medium leading-relaxed drop-shadow-md px-1 sm:px-2">
                      21 Dias Para Renovar Sua Fé e Caminhar com Cristo
                    </p>
                  </div>
                  
                  <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-gold-divine text-base sm:text-lg lg:text-xl xl:text-2xl drop-shadow-lg">🙏</div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-divine/10 to-white/20"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-gold-divine/20 to-blue-deep/20 rounded-lg blur-lg sm:blur-xl -z-10 transform scale-110"></div>
              </div>
              
              <div className="hidden sm:block absolute -top-1 -left-1 sm:-top-2 sm:-left-2 md:-top-4 md:-left-4 animate-bounce text-base sm:text-lg md:text-2xl opacity-70 text-gold-divine">⭐</div>
              <div className="hidden sm:block absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-4 md:-right-4 animate-bounce animation-delay-1000 text-base sm:text-lg md:text-2xl opacity-70 text-gold-divine">🕊️</div>
              <div className="hidden md:block absolute top-1/2 -right-6 sm:-right-8 animate-pulse text-lg sm:text-xl opacity-60 text-gold-divine">💫</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
