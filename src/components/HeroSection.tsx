
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-deep via-blue-deep/90 to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-divine/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-divine/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gold-divine text-blue-deep rounded-full text-sm font-poppins font-semibold mb-4 tracking-wider uppercase">
                ✨ Transforme sua vida espiritual em 21 dias
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white leading-tight">
              Jornada Transformadora de Jesus
            </h1>
            
            <h2 className="font-lora text-xl md:text-2xl text-beige-soft/90 mb-8 font-medium leading-relaxed">
              21 Dias Para Renovar Sua Fé e Caminhar com Cristo
            </h2>
            
            <p className="font-lora text-lg text-beige-soft/80 mb-8 leading-relaxed max-w-lg">
              Um guia prático e espiritual que vai transformar sua relação com Deus através de 
              devocionais profundos, reflexões bíblicas e exercícios de fé que realmente funcionam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                onClick={scrollToCheckout}
                size="lg" 
                className="bg-gold-divine hover:bg-gold-divine/90 text-blue-deep font-poppins font-bold px-8 py-6 text-lg shadow-2xl hover:shadow-gold-divine/25 transition-all duration-300 transform hover:scale-105 tracking-wide uppercase"
              >
                🔥 Quero Transformar Minha Vida Agora
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start items-center space-x-6 text-sm text-beige-soft/70 font-lora">
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
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* 3D Book mockup */}
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-80 h-96 bg-gradient-to-br from-gold-divine via-blue-deep to-gray-800 rounded-lg shadow-2xl relative overflow-hidden border border-gold-divine/20">
                  {/* Book spine shadow */}
                  <div className="absolute right-0 top-0 w-6 h-full bg-black/30"></div>
                  
                  {/* Cross symbol */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-gold-divine text-4xl drop-shadow-lg">✝️</div>
                  </div>
                  
                  {/* Title on cover */}
                  <div className="absolute top-20 left-4 right-4 text-center">
                    <h3 className="text-white font-playfair font-semibold text-xl mb-2 leading-tight drop-shadow-lg">
                      JORNADA TRANSFORMADORA
                    </h3>
                    <h4 className="text-gold-divine font-playfair font-semibold text-lg mb-4 drop-shadow-lg">
                      DE JESUS
                    </h4>
                    <div className="w-16 h-px bg-gold-divine mx-auto mb-4"></div>
                    <p className="text-beige-soft font-lora text-sm font-medium leading-relaxed drop-shadow-md">
                      21 Dias Para Renovar Sua Fé e Caminhar com Cristo
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-gold-divine text-2xl drop-shadow-lg">🙏</div>
                  </div>
                  
                  {/* Light overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-divine/10 to-white/20"></div>
                </div>
                
                {/* Floating glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-divine/20 to-blue-deep/20 rounded-lg blur-xl -z-10 transform scale-110"></div>
              </div>
              
              {/* Floating elements around book */}
              <div className="absolute -top-4 -left-4 animate-bounce text-2xl opacity-70 text-gold-divine">⭐</div>
              <div className="absolute -bottom-4 -right-4 animate-bounce animation-delay-1000 text-2xl opacity-70 text-gold-divine">🕊️</div>
              <div className="absolute top-1/2 -right-8 animate-pulse text-xl opacity-60 text-gold-divine">💫</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
