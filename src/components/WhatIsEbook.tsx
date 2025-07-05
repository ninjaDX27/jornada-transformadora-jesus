
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-beige-soft px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-blue-deep leading-tight">
            📘 O que é a Jornada Transformadora de Jesus?
          </h2>
          <p className="font-lora text-base sm:text-lg md:text-xl text-gray-spiritual leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
            Este não é apenas mais um eBook cristão. É um <strong className="text-blue-deep">guia prático e espiritual</strong> 
            que vai te acompanhar por 21 dias em uma jornada profunda de renovação da fé, 
            crescimento espiritual e intimidade com Cristo.
          </p>
          <div className="bg-gradient-to-r from-gold-divine/10 to-blue-deep/10 p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-gold-divine">
            <p className="font-lora text-gray-spiritual font-medium italic text-sm sm:text-base md:text-lg leading-relaxed">
              "Cada página foi escrita com oração e inspiração divina para tocar seu coração 
              e transformar sua caminhada com Jesus de forma real e duradoura."
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-gold-divine/30 bg-white">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-gold-divine">{feature.icon}</div>
              <h3 className="font-poppins text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-blue-deep leading-tight">{feature.title}</h3>
              <p className="font-lora text-gray-spiritual text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsEbook;
