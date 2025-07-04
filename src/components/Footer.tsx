
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              🕊️ Jornada Transformadora de Jesus
            </h3>
            <p className="text-gray-400">
              Transformando vidas através do amor de Cristo
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="mailto:contato@jornadatransformadora.com" className="text-gray-400 hover:text-white transition-colors">
              📧 Contato
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              📱 Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              📹 YouTube
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              💬 WhatsApp
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Jornada Transformadora de Jesus. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              "Porque eu sei os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro." - Jeremias 29:11
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
