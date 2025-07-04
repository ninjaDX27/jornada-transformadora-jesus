
import { Card } from "@/components/ui/card";

const WhatYouGet = () => {
  const benefits = [
    "Devocional diário por e-mail",
    "PDF com plano espiritual de 21 dias",
    "Vídeos curtos de inspiração",
    "Acesso a grupo fechado no WhatsApp/Telegram",
    "Bônus: Meditação guiada com Salmos"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            🎁 O que você vai receber?
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white shadow-lg">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-green-600 text-xl">✔️</div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
