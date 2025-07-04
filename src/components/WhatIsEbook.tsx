
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
    <section className="py-20 bg-beige-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-blue-deep">
            📘 O que é a Jornada Transformadora de Jesus?
          </h2>
          <p className="font-lora text-lg text-gray-spiritual leading-relaxed mb-8">
            Este não é apenas mais um eBook cristão. É um <strong className="text-blue-deep">guia prático e espiritual</strong> 
            que vai te acompanhar por 21 dias em uma jornada profunda de renovação da fé, 
            crescimento espiritual e intimidade com Cristo.
          </p>
          <div className="bg-gradient-to-r from-gold-divine/10 to-blue-deep/10 p-6 rounded-lg border-l-4 border-gold-divine">
            <p className="font-lora text-gray-spiritual font-medium italic">
              "Cada página foi escrita com oração e inspiração divina para tocar seu coração 
              e transformar sua caminhada com Jesus de forma real e duradoura."
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-gold-divine/30 bg-white">
              <div className="text-4xl mb-4 text-gold-divine">{feature.icon}</div>
              <h3 className="font-poppins text-lg font-semibold mb-3 text-blue-deep">{feature.title}</h3>
              <p className="font-lora text-gray-spiritual text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsEbook;
