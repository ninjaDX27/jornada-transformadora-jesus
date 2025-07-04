
import { Card } from "@/components/ui/card";
import { Book, Heart, Route } from "lucide-react";

const AboutJourney = () => {
  const pillars = [
    {
      icon: <Book className="w-8 h-8 text-blue-600" />,
      title: "Conexão com Deus",
      description: "Fortaleça sua relação pessoal com o Criador"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Transformação Interior",
      description: "Renove sua mente e coração através da Palavra"
    },
    {
      icon: <Route className="w-8 h-8 text-green-600" />,
      title: "Missão no Mundo",
      description: "Descubra seu propósito e chamado em Cristo"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            📘 O que é a Jornada Transformadora de Jesus?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Jornada é um percurso espiritual de 21 dias que combina devocionais, desafios práticos, 
            orações guiadas e reflexões bíblicas. É uma experiência íntima e profunda que irá tocar 
            seu coração e renovar sua alma.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-50 rounded-full">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
