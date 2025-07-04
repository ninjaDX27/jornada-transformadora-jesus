
import { Card } from "@/components/ui/card";

const WhatIsEbook = () => {
  const features = [
    {
      icon: "📖",
      title: "21 Devocionais Transformadores",
      description: "Cada dia uma nova revelação bíblica para fortalecer sua fé"
    },
    {
      icon: "🙏",
      title: "Orações Guiadas Poderosas",
      description: "Aprenda a orar com propósito e veja Deus agir em sua vida"
    },
    {
      icon: "📝",
      title: "Reflexões Práticas Diárias",
      description: "Exercícios espirituais que aplicam a Palavra ao seu dia a dia"
    },
    {
      icon: "💎",
      title: "Versículos de Poder",
      description: "Seleção especial de passagens que vão marcar sua alma"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            📘 O que é a Jornada Transformadora de Jesus?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Este não é apenas mais um eBook cristão. É um <strong>guia prático e espiritual</strong> 
            que vai te acompanhar por 21 dias em uma jornada profunda de renovação da fé, 
            crescimento espiritual e intimidade com Cristo.
          </p>
          <div className="bg-gradient-to-r from-amber-100 to-blue-100 p-6 rounded-lg border-l-4 border-amber-600">
            <p className="text-gray-700 font-medium italic">
              "Cada página foi escrita com oração e inspiração divina para tocar seu coração 
              e transformar sua caminhada com Jesus de forma real e duradoura."
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200 bg-gradient-to-br from-white to-amber-50/30">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsEbook;
