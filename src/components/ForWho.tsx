
import { Card } from "@/components/ui/card";

const ForWho = () => {
  const audiences = [
    {
      icon: "🧍‍♂️",
      title: "Para quem está distante da fé",
      description: "Reencontre o caminho de volta ao coração de Deus"
    },
    {
      icon: "🧕",
      title: "Para quem deseja aprofundar sua caminhada com Deus",
      description: "Leve sua relação com Cristo a um novo nível"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Para famílias que querem orar juntas",
      description: "Fortaleça os laços familiares através da fé compartilhada"
    },
    {
      icon: "🤝",
      title: "Para líderes de grupos, células ou comunidades",
      description: "Inspire e lidere outros no crescimento espiritual"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            ⛪ Para quem é essa jornada?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{audience.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
