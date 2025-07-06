
import { Instagram, Youtube, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-deep to-gray-800 text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Seção 1: Sobre o projeto + versículo */}
            <div className="lg:col-span-1">
              <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gold-divine">
                🕊️ Jornada Transformadora de Jesus
              </h3>
              <p className="font-lora text-beige-soft/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Transformando vidas através do amor de Cristo. Uma jornada de 21 dias 
                para renovar sua fé e fortalecer seu relacionamento com Jesus.
              </p>
              
              {/* Versículo em destaque */}
              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border-l-4 border-gold-divine">
                <p className="font-lora text-beige-soft font-medium italic text-xs sm:text-sm leading-relaxed">
                  "Porque eu sei os planos que tenho para vocês, diz o Senhor, 
                  planos de fazê-los prosperar e não de causar dano, 
                  planos de dar a vocês esperança e um futuro."
                </p>
                <p className="font-poppins text-gold-divine text-xs mt-2 font-semibold">
                  — Jeremias 29:11
                </p>
              </div>
            </div>
            
            {/* Seção 2: Links rápidos */}
            <div className="lg:col-span-1">
              <h4 className="font-poppins text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
                Links Rápidos
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#sobre" className="font-lora text-beige-soft/80 hover:text-gold-divine transition-colors duration-300 text-sm sm:text-base">
                    Sobre o eBook
                  </a>
                </li>
                <li>
                  <a href="#estrutura" className="font-lora text-beige-soft/80 hover:text-gold-divine transition-colors duration-300 text-sm sm:text-base">
                    Estrutura do Livro
                  </a>
                </li>
                <li>
                  <a href="#bonus" className="font-lora text-beige-soft/80 hover:text-gold-divine transition-colors duration-300 text-sm sm:text-base">
                    Bônus Gratuitos
                  </a>
                </li>
                <li>
                  <a href="#testemunhos" className="font-lora text-beige-soft/80 hover:text-gold-divine transition-colors duration-300 text-sm sm:text-base">
                    Testemunhos
                  </a>
                </li>
              </ul>
              
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gold-divine/10 rounded-lg">
                <p className="font-lora text-beige-soft text-sm">
                  🙏 <strong className="text-gold-divine">Precisa de oração?</strong>
                </p>
                <p className="font-lora text-beige-soft/80 text-xs mt-1">
                  Entre em contato conosco. Estamos aqui para orar com você.
                </p>
              </div>
            </div>
            
            {/* Seção 3: Redes sociais e contato */}
            <div className="lg:col-span-1">
              <h4 className="font-poppins text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
                Conecte-se Conosco
              </h4>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <a 
                  href="mailto:contato@jornadatransformadora.com" 
                  className="flex items-center space-x-2 sm:space-x-3 text-beige-soft/80 hover:text-gold-divine transition-colors duration-300 group"
                >
                  <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-gold-divine/20 transition-colors">
                    <Mail size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-lora text-xs sm:text-sm break-all">contato@jornadatransformadora.com</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-2 sm:space-x-3 text-beige-soft/80 hover:text-gold-divine transition-colors duration-300 group"
                >
                  <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-gold-divine/20 transition-colors">
                    <Instagram size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-lora text-xs sm:text-sm">@jornadatransformadora</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-2 sm:space-x-3 text-beige-soft/80 hover:text-gold-divine transition-colors duration-300 group"
                >
                  <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-gold-divine/20 transition-colors">
                    <Youtube size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-lora text-xs sm:text-sm">Canal Jornada Transformadora</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-2 sm:space-x-3 text-beige-soft/80 hover:text-gold-divine transition-colors duration-300 group"
                >
                  <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-gold-divine/20 transition-colors">
                    <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-lora text-xs sm:text-sm">WhatsApp - Suporte e Oração</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Linha divisória e copyright */}
          <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
              <p className="font-lora text-beige-soft/70 text-xs sm:text-sm text-center md:text-left">
                © 2025 Jornada Transformadora de Jesus. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gold-divine">✨</span>
                <p className="font-lora text-beige-soft/70 text-xs">
                  Feito com amor e fé para a glória de Deus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
