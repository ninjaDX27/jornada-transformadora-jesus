
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-deep to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block bg-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-poppins font-bold text-xs sm:text-sm md:text-base mb-4 sm:mb-6 animate-pulse">
            🔥 BÔNUS LIMITADOS - Apenas hoje!
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-white leading-tight">
            🎁 Bônus Exclusivos Gratuitos
          </h2>
          <p className="font-lora text-base sm:text-lg md:text-xl text-beige-soft/90 leading-relaxed max-w-3xl mx-auto">
            Além do eBook, você ainda ganha esses materiais incríveis <strong className="text-gold-divine">totalmente grátis</strong>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="p-4 sm:p-6 md:p-8 bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gold-divine">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0 text-gold-divine">{bonus.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2">
                    <h3 className="font-poppins font-semibold text-white text-sm sm:text-base md:text-lg leading-tight">{bonus.title}</h3>
                    <span className="bg-gold-divine text-blue-deep px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-poppins font-bold self-start">
                      GRÁTIS
                    </span>
                  </div>
                  <p className="font-lora text-beige-soft/80 text-xs sm:text-sm md:text-base leading-relaxed">{bonus.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-lg shadow-lg border-2 border-dashed border-gold-divine max-w-2xl mx-auto">
          <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
            💰 Valor Total dos Bônus: <span className="line-through text-red-300">R$ 197,00</span>
          </h3>
          <p className="font-poppins text-lg sm:text-xl md:text-2xl text-gold-divine font-bold mb-2 sm:mb-4">
            Seu investimento hoje: <span className="text-2xl sm:text-3xl md:text-4xl">R$ 19,99</span>
          </p>
          <p className="font-lora text-xs sm:text-sm text-beige-soft/70">
            ⚠️ Oferta por tempo limitado - Não perca!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
