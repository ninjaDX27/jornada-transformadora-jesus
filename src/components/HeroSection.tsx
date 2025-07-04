
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
                ✨ Transforme sua vida espiritual em 21 dias
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-800 via-blue-700 to-amber-900 bg-clip-text text-transparent leading-tight">
              Jornada Transformadora de Jesus
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              21 Dias Para Renovar Sua Fé e Caminhar com Cristo
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Um guia prático e espiritual que vai transformar sua relação com Deus através de 
              devocionais profundos, reflexões bíblicas e exercícios de fé que realmente funcionam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                onClick={scrollToCheckout}
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-blue-600 hover:from-amber-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🔥 Quero Transformar Minha Vida Agora
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="mr-2">📖</span>
                <span>eBook Digital</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✝️</span>
                <span>21 Dias de Fé</span>
              </div>
            </div>
          </div>
          
          {/* Right side - eBook mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* 3D Book mockup */}
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-80 h-96 bg-gradient-to-br from-amber-600 via-blue-600 to-amber-700 rounded-lg shadow-2xl relative overflow-hidden">
                  {/* Book spine shadow */}
                  <div className="absolute right-0 top-0 w-6 h-full bg-black/20"></div>
                  
                  {/* Cross symbol */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-white/90 text-4xl">✝️</div>
                  </div>
                  
                  {/* Title on cover */}
                  <div className="absolute top-20 left-4 right-4 text-center">
                    <h3 className="text-white font-bold text-xl mb-2 leading-tight">
                      JORNADA TRANSFORMADORA
                    </h3>
                    <h4 className="text-white font-bold text-lg mb-4">
                      DE JESUS
                    </h4>
                    <div className="w-16 h-px bg-white/70 mx-auto mb-4"></div>
                    <p className="text-white/90 text-sm font-medium">
                      21 Dias Para Renovar Sua Fé e Caminhar com Cristo
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-white/80 text-2xl">🙏</div>
                  </div>
                  
                  {/* Light overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
                </div>
                
                {/* Floating glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-blue-400/30 rounded-lg blur-xl -z-10 transform scale-110"></div>
              </div>
              
              {/* Floating elements around book */}
              <div className="absolute -top-4 -left-4 animate-bounce text-2xl opacity-70">⭐</div>
              <div className="absolute -bottom-4 -right-4 animate-bounce animation-delay-1000 text-2xl opacity-70">🕊️</div>
              <div className="absolute top-1/2 -right-8 animate-pulse text-xl opacity-60">💫</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
