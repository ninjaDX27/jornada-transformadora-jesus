
import { Card } from "@/components/ui/card";

const BonusSection = () => {
  const bonuses = [
    {
      icon: "🎵",
      title: "Playlist Adoração Transformadora",
      value: "R$ 0,00",
      description: "20 músicas selecionadas para acompanhar sua jornada espiritual diária"
    },
    {
      icon: "📱",
      title: "Wallpapers Inspiracionais",
      value: "R$ 0,00", 
      description: "10 papéis de parede com versículos poderosos para seu celular"
    },
    {
      icon: "📖",
      title: "Guia de Estudo Bíblico",
      value: "R$ 0,00",
      description: "Método prático para estudar a Bíblia e crescer na Palavra"
    },
    {
      icon: "🙏",
      title: "30 Orações Poderosas",
      value: "R$ 0,00",
      description: "Coletânea de orações para diferentes momentos da vida cristã"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-deep to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block bg-red-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-poppins font-bold text-xs md:text-sm mb-4 animate-pulse">
            🔥 BÔNUS LIMITADOS - Apenas hoje!
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-white">
            🎁 Bônus Exclusivos Gratuitos
          </h2>
          <p className="font-lora text-base md:text-lg text-beige-soft/90 leading-relaxed">
            Além do eBook, você ainda ganha esses materiais incríveis <strong className="text-gold-divine">totalmente grátis</strong>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="p-4 md:p-6 bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gold-divine">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-2xl md:text-3xl flex-shrink-0 text-gold-divine">{bonus.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="font-poppins font-semibold text-white text-sm md:text-base leading-tight">{bonus.title}</h3>
                    <span className="bg-gold-divine text-blue-deep px-2 py-1 rounded text-xs font-poppins font-bold self-start">
                      GRÁTIS
                    </span>
                  </div>
                  <p className="font-lora text-beige-soft/80 text-xs md:text-sm leading-relaxed">{bonus.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg border-2 border-dashed border-gold-divine">
          <h3 className="font-playfair text-xl md:text-2xl font-semibold text-white mb-4">
            💰 Valor Total dos Bônus: <span className="line-through text-red-300">R$ 197,00</span>
          </h3>
          <p className="font-poppins text-lg md:text-lg text-gold-divine font-bold">
            Seu investimento hoje: <span className="text-2xl md:text-3xl">GRATUITO</span>
          </p>
          <p className="font-lora text-xs md:text-sm text-beige-soft/70 mt-2">
            ⚠️ Oferta por tempo limitado - Não perca!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
