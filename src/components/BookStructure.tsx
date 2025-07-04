
import { Card } from "@/components/ui/card";

const BookStructure = () => {
  const weeks = [
    {
      week: "Semana 1",
      title: "Reencontro com Jesus",
      days: "Dias 1-7",
      focus: "Renovação do primeiro amor e intimidade com Cristo",
      highlights: ["Oração de entrega total", "Perdão e libertação", "Novo coração em Cristo"]
    },
    {
      week: "Semana 2", 
      title: "Transformação Interior",
      days: "Dias 8-14",
      focus: "Mudança de mente e coração através da Palavra",
      highlights: ["Renovação da mente", "Frutos do Espírito", "Vida de santidade"]
    },
    {
      week: "Semana 3",
      title: "Missão e Propósito",
      days: "Dias 15-21", 
      focus: "Descobrindo seu chamado e vivendo para Deus",
      highlights: ["Chamado divino", "Servir com amor", "Vida abundante"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            📅 Como funcionam os 21 dias?
          </h2>
          <p className="text-lg text-gray-600">
            Cada semana tem um foco específico para sua transformação espiritual
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {weeks.map((week, index) => (
            <Card key={index} className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-600">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-amber-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                  {week.week}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{week.title}</h3>
                <p className="text-amber-600 font-medium">{week.days}</p>
              </div>
              
              <p className="text-gray-600 text-center mb-6 font-medium">{week.focus}</p>
              
              <div className="space-y-2">
                {week.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-amber-600 to-blue-600 text-white">
            <div className="flex items-center space-x-4">
              <div className="text-3xl">⏰</div>
              <div>
                <h4 className="font-bold text-lg">Apenas 15-20 minutos por dia</h4>
                <p className="text-amber-100">Tempo suficiente para uma transformação real</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookStructure;
