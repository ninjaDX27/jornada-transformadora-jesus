
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const OfferSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-600 via-blue-deep to-green-700 text-white px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <div className="inline-block bg-red-500 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-poppins font-bold text-sm sm:text-base md:text-lg mb-4 sm:mb-6 animate-pulse">
              🚨 OFERTA ESPECIAL - Por tempo limitado!
            </div>
            
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight">
              Sua Vida Espiritual Vale Mais Que Isso!
            </h2>
            
            <p className="font-lora text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Enquanto outros cobram centenas de reais por cursos de crescimento espiritual, 
              você tem acesso à transformação completa por um valor simbólico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {/* Preço normal */}
            <Card className="p-4 sm:p-6 md:p-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <h3 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-red-300">❌ Outros Cursos Espirituais</h3>
              <div className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-red-300">R$ 297,00</div>
              <ul className="text-left space-y-1.5 sm:space-y-2 text-white/80 font-lora text-sm sm:text-base">
                <li>• Conteúdo básico</li>
                <li>• Sem acompanhamento</li>
                <li>• Teoria sem prática</li>
                <li>• Sem garantia</li>
              </ul>
            </Card>
            
            {/* Nossa oferta */}
            <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gold-divine to-yellow-500 text-blue-deep border-4 border-yellow-300 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-poppins font-bold transform rotate-12">
                MELHOR OFERTA!
              </div>
              <h3 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">✅ Jornada Transformadora</h3>
              <div className="mb-2">
                <span className="font-lora text-sm sm:text-base md:text-lg line-through text-blue-deep/70">De R$ 97,00</span>
              </div>
              <div className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">R$ 19,99</div>
              <ul className="text-left space-y-1.5 sm:space-y-2 font-lora text-sm sm:text-base">
                <li>• eBook completo (21 dias)</li>
                <li>• 4 bônus exclusivos</li>
                <li>• Garantia de transformação</li>
                <li>• Acesso imediato</li>
              </ul>
            </Card>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg border border-white/20 mb-6 sm:mb-8">
            <h3 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">🛡️ Garantia de Transformação Espiritual</h3>
            <p className="font-lora text-sm sm:text-base md:text-lg opacity-90 mb-3 sm:mb-4 leading-relaxed">
              Estamos tão confiantes no poder transformador deste material que oferecemos uma garantia única:
            </p>
            <div className="bg-green-500 p-3 sm:p-4 rounded-lg text-white font-lora font-semibold text-sm sm:text-base leading-relaxed">
              Se em 21 dias você não sentir uma transformação real em sua vida espiritual, 
              devolvemos 100% do seu investimento - sem perguntas!
            </div>
          </div>
          
          <Button 
            onClick={scrollToCheckout}
            size="lg" 
            className="w-full sm:w-auto bg-gold-divine hover:bg-gold-divine/90 text-blue-deep font-poppins font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-3 sm:mb-4 tracking-wide uppercase min-h-[56px] sm:min-h-[64px] max-w-md sm:max-w-none mx-auto"
          >
            <span className="text-center leading-tight">
              🔥 SIM! Quero Me<br className="sm:hidden"/>
              <span className="sm:inline"> Transformar AGORA</span>
            </span>
          </Button>
          
          <p className="font-lora text-xs sm:text-sm opacity-80">
            ⚠️ Oferta válida apenas hoje • Após a meia-noite voltará ao preço normal de R$ 97,00
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
