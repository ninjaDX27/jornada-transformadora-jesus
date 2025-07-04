
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
    <section className="py-20 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
            🔥 BÔNUS LIMITADOS - Apenas hoje!
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            🎁 Bônus Exclusivos Gratuitos
          </h2>
          <p className="text-lg text-gray-600">
            Além do eBook, você ainda ganha esses materiais incríveis <strong>totalmente grátis</strong>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-600">
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{bonus.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800">{bonus.title}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">
                      GRÁTIS
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{bonus.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-white p-8 rounded-lg shadow-lg border-2 border-dashed border-amber-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            💰 Valor Total dos Bônus: <span className="line-through text-red-500">R$ 197,00</span>
          </h3>
          <p className="text-lg text-green-600 font-bold">
            Seu investimento hoje: <span className="text-3xl">GRATUITO</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            ⚠️ Oferta por tempo limitado - Não perca!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
