
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
              <span className="text-2xl">🙏</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-purple-700 to-blue-900 bg-clip-text text-transparent leading-tight">
            Descubra o Poder Transformador de Jesus em Sua Vida!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Uma jornada espiritual de 21 dias para fortalecer sua fé, renovar sua mente e caminhar com Cristo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🔹 Quero Começar a Jornada
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="mr-2">✨</span>
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📅</span>
              <span>21 Dias</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">👥</span>
              <span>Comunidade</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-bounce opacity-20">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-16 animate-bounce opacity-20 animation-delay-1000">
        <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
