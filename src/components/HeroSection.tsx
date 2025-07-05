
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-deep via-blue-deep/90 to-gray-900 overflow-hidden">
      {/* Background decorative elements - optimized for mobile */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <div className="absolute top-10 left-5 w-32 h-32 md:top-20 md:left-10 md:w-64 md:h-64 bg-gold-divine/30 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-48 h-48 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-gold-divine/20 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 md:w-80 md:h-80 bg-white/10 rounded-full blur-2xl md:blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Text content - Mobile optimized */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-4 md:mb-6">
              <span className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gold-divine text-blue-deep rounded-full text-xs md:text-sm font-poppins font-semibold mb-4 tracking-wider uppercase">
                ✨ Transforme sua vida espiritual em 21 dias
              </span>
            </div>
            
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 md:mb-6 text-white leading-tight">
              Jornada Transformadora de Jesus
            </h1>
            
            <h2 className="font-lora text-lg sm:text-xl md:text-2xl text-beige-soft/90 mb-6 md:mb-8 font-medium leading-relaxed">
              21 Dias Para Renovar Sua Fé e Caminhar com Cristo
            </h2>
            
            <p className="font-lora text-base md:text-lg text-beige-soft/80 mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Um guia prático e espiritual que vai transformar sua relação com Deus através de 
              devocionais profundos, reflexões bíblicas e exercícios de fé que realmente funcionam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6 md:mb-8">
              <Button 
                onClick={scrollToCheckout}
                size="lg" 
                className="w-full sm:w-auto bg-gold-divine hover:bg-gold-divine/90 text-blue-deep font-poppins font-bold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-2xl hover:shadow-gold-divine/25 transition-all duration-300 transform hover:scale-105 tracking-wide uppercase min-h-[44px]"
              >
                <span className="hidden sm:inline">🔥 Quero Transformar Minha Vida Agora</span>
                <span className="sm:hidden">🔥 Transformar Minha Vida</span>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 text-xs md:text-sm text-beige-soft/70 font-lora">
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
          
          {/* Right side - eBook mockup - Mobile optimized */}
          <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-last">
            <div className="relative">
              {/* 3D Book mockup - Responsive sizing */}
              <div className="relative transform rotate-6 lg:rotate-12 hover:rotate-3 lg:hover:rotate-6 transition-transform duration-500">
                <div className="w-64 h-80 md:w-72 md:h-90 lg:w-80 lg:h-96 bg-gradient-to-br from-gold-divine via-blue-deep to-gray-800 rounded-lg shadow-2xl relative overflow-hidden border border-gold-divine/20">
                  {/* Book spine shadow */}
                  <div className="absolute right-0 top-0 w-4 lg:w-6 h-full bg-black/30"></div>
                  
                  {/* Cross symbol */}
                  <div className="absolute top-6 lg:top-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-gold-divine text-2xl lg:text-4xl drop-shadow-lg">✝️</div>
                  </div>
                  
                  {/* Title on cover - Responsive text */}
                  <div className="absolute top-16 lg:top-20 left-3 right-3 lg:left-4 lg:right-4 text-center">
                    <h3 className="text-white font-playfair font-semibold text-lg lg:text-xl mb-2 leading-tight drop-shadow-lg">
                      JORNADA TRANSFORMADORA
                    </h3>
                    <h4 className="text-gold-divine font-playfair font-semibold text-base lg:text-lg mb-3 lg:mb-4 drop-shadow-lg">
                      DE JESUS
                    </h4>
                    <div className="w-12 lg:w-16 h-px bg-gold-divine mx-auto mb-3 lg:mb-4"></div>
                    <p className="text-beige-soft font-lora text-xs lg:text-sm font-medium leading-relaxed drop-shadow-md px-2">
                      21 Dias Para Renovar Sua Fé e Caminhar com Cristo
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-gold-divine text-xl lg:text-2xl drop-shadow-lg">🙏</div>
                  </div>
                  
                  {/* Light overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-divine/10 to-white/20"></div>
                </div>
                
                {/* Floating glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-divine/20 to-blue-deep/20 rounded-lg blur-xl -z-10 transform scale-110"></div>
              </div>
              
              {/* Floating elements around book - Hidden on small screens */}
              <div className="hidden md:block absolute -top-4 -left-4 animate-bounce text-2xl opacity-70 text-gold-divine">⭐</div>
              <div className="hidden md:block absolute -bottom-4 -right-4 animate-bounce animation-delay-1000 text-2xl opacity-70 text-gold-divine">🕊️</div>
              <div className="hidden md:block absolute top-1/2 -right-8 animate-pulse text-xl opacity-60 text-gold-divine">💫</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
