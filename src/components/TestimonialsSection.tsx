
import { Card } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-800">
            ❤️ Vidas Transformadas Por Jesus
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Veja o que pessoas reais estão falando sobre sua jornada de transformação
          </p>
        </div>
        
        {/* Mobile and Tablet Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-white to-amber-50/30 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-600 h-full">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-3">{testimonial.photo}</div>
                        <div className="text-left">
                          <h4 className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">{testimonial.age} • {testimonial.location}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3 sm:mb-4">
                        <div className="flex text-amber-400 mb-1.5 sm:mb-2 text-sm sm:text-base">
                          {"⭐".repeat(5)}
                        </div>
                        <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed">
                          "{testimonial.testimony}"
                        </p>
                      </div>
                      
                      <div className="bg-amber-100 p-2 sm:p-3 rounded-lg">
                        <p className="text-amber-800 font-semibold text-xs">
                          🔥 {testimonial.highlight}
                        </p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-8" />
            <CarouselNext className="right-0 sm:-right-8" />
          </Carousel>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
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
        
        {/* Statistics - Mobile optimized */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <Card className="inline-block p-3 sm:p-4 md:p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="text-2xl sm:text-3xl md:text-4xl">📊</div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-base sm:text-lg md:text-xl">+2.847 vidas transformadas</h4>
                <p className="text-green-100 text-xs sm:text-sm md:text-base">Nota média: 4.9/5 ⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
