
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      location: "São Paulo - SP",
      photo: "👩‍🦳",
      testimony: "Minha vida mudou completamente! Em 21 dias senti Jesus mais próximo do que nunca. Cada devocional tocou meu coração de forma única.",
      highlight: "Relacionamento com Deus renovado"
    },
    {
      name: "João Santos", 
      age: "28 anos",
      location: "Rio de Janeiro - RJ",
      photo: "👨‍💼",
      testimony: "Estava passando por uma crise espiritual terrível. Este livro me trouxe de volta aos braços do Pai. Gratidão eterna!",
      highlight: "Restauração espiritual completa"
    },
    {
      name: "Ana Oliveira",
      age: "45 anos", 
      location: "Belo Horizonte - MG",
      photo: "👩‍🏫",
      testimony: "Como líder na igreja, sempre busco materiais de qualidade. Este eBook superou todas as expectativas. Recomendo para todos!",
      highlight: "Crescimento ministerial"
    },
    {
      name: "Pedro Costa",
      age: "52 anos",
      location: "Salvador - BA", 
      photo: "👨‍🦳",
      testimony: "Depois de 30 anos como cristão, pensava que já sabia tudo. Mas Deus usou este livro para me ensinar coisas novas sobre Ele.",
      highlight: "Renovação na fé madura"
    },
    {
      name: "Carla Mendes",
      age: "31 anos",
      location: "Fortaleza - CE",
      photo: "👩‍⚕️",
      testimony: "Cada oração, cada reflexão tocou minha alma. Senti o Espírito Santo agindo de forma poderosa na minha vida diária.",
      highlight: "Experiência sobrenatural"
    },
    {
      name: "Lucas Ferreira", 
      age: "26 anos",
      location: "Brasília - DF",
      photo: "👨‍🎓",
      testimony: "Era novo na fé e este livro me ajudou a ter uma base sólida. Aprendi a orar, a ler a Bíblia e a viver para Jesus de verdade.",
      highlight: "Fundamento espiritual sólido"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            ❤️ Vidas Transformadas Por Jesus
          </h2>
          <p className="text-lg text-gray-600">
            Veja o que pessoas reais estão falando sobre sua jornada de transformação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-white to-amber-50/30 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-600">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.photo}</div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.age} • {testimonial.location}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex text-amber-400 mb-2">
                  {"⭐".repeat(5)}
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{testimonial.testimony}"
                </p>
              </div>
              
              <div className="bg-amber-100 p-3 rounded-lg">
                <p className="text-amber-800 font-semibold text-xs">
                  🔥 {testimonial.highlight}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">📊</div>
              <div className="text-left">
                <h4 className="font-bold text-xl">+2.847 vidas transformadas</h4>
                <p className="text-green-100">Nota média: 4.9/5 ⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
