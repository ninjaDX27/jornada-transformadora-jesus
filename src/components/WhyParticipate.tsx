
import { Card } from "@/components/ui/card";

const WhyParticipate = () => {
  const benefits = [
    {
      icon: "📖",
      title: "Entendimento mais profundo da Palavra",
      description: "Descubra novos significados e aplicações das Escrituras"
    },
    {
      icon: "💬",
      title: "Grupo de apoio com partilhas e orações",
      description: "Conecte-se com irmãos em uma comunidade de fé"
    },
    {
      icon: "🧘‍♂️",
      title: "Práticas diárias de fé e silêncio",
      description: "Desenvolva disciplinas espirituais transformadoras"
    },
    {
      icon: "❤️",
      title: "Reconexão com propósito de vida",
      description: "Redescubra o plano de Deus para sua existência"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            🌱 Uma jornada para transformar sua mente e renovar seu espírito
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow duration-300 bg-white border-2 hover:border-blue-200">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white shadow-lg border-l-4 border-blue-600">
            <div className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Nunca imaginei que em 21 dias minha vida espiritual pudesse dar um salto tão grande. 
                Jesus me encontrou de novo!"
              </blockquote>
              <p className="text-blue-600 font-semibold">– Maria Oliveira, 32 anos</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
