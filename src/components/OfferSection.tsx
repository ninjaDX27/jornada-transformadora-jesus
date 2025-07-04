
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const OfferSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
              🚨 OFERTA ESPECIAL - Por tempo limitado!
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sua Vida Espiritual Vale Mais Que Isso!
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Enquanto outros cobram centenas de reais por cursos de crescimento espiritual, 
              você tem acesso à transformação completa por um valor simbólico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Preço normal */}
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold mb-4">❌ Outros Cursos Espirituais</h3>
              <div className="text-4xl font-bold mb-4 text-red-300">R$ 297,00</div>
              <ul className="text-left space-y-2 text-white/80">
                <li>• Conteúdo básico</li>
                <li>• Sem acompanhamento</li>
                <li>• Teoria sem prática</li>
                <li>• Sem garantia</li>
              </ul>
            </Card>
            
            {/* Nossa oferta */}
            <Card className="p-8 bg-gradient-to-br from-amber-400 to-amber-600 text-amber-900 border-4 border-yellow-300 relative overflow-hidden">
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
                MELHOR OFERTA!
              </div>
              <h3 className="text-2xl font-bold mb-4">✅ Jornada Transformadora</h3>
              <div className="mb-2">
                <span className="text-lg line-through text-amber-700">De R$ 97,00</span>
              </div>
              <div className="text-5xl font-bold mb-4">GRATUITO</div>
              <ul className="text-left space-y-2">
                <li>• eBook completo (21 dias)</li>
                <li>• 4 bônus exclusivos</li>
                <li>• Garantia de transformação</li>
                <li>• Acesso imediato</li>
              </ul>
            </Card>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">🛡️ Garantia de Transformação Espiritual</h3>
            <p className="text-lg opacity-90 mb-4">
              Estamos tão confiantes no poder transformador deste material que oferecemos uma garantia única:
            </p>
            <div className="bg-green-500 p-4 rounded-lg text-white font-bold">
              Se em 21 dias você não sentir uma transformação real em sua vida espiritual, 
              devolvemos 100% do seu investimento - sem perguntas!
            </div>
          </div>
          
          <Button 
            onClick={scrollToCheckout}
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 font-bold px-12 py-6 text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4"
          >
            🔥 SIM! Quero Me Transformar AGORA
          </Button>
          
          <p className="text-sm opacity-80">
            ⚠️ Oferta válida apenas hoje • Após a meia-noite voltará ao preço normal de R$ 97,00
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
