
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CheckoutSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🎉 Parabéns! Sua transformação começou!",
      description: "Verifique seu e-mail - o eBook chegará em instantes. Prepare seu coração para 21 dias que mudarão sua vida!",
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section id="checkout" className="py-20 bg-gradient-to-br from-amber-600 via-orange-500 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 animate-bounce">
              🔥 ÚLTIMA CHANCE - Oferta encerra em breve!
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sua Transformação Está a Um Clique de Distância
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Preencha os dados abaixo e receba imediatamente seu eBook + todos os bônus no seu e-mail
            </p>
          </div>
          
          <Card className="p-8 bg-white/95 backdrop-blur-sm border-2 border-yellow-300 text-gray-800">
            {/* Resumo da oferta */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6 border border-green-200">
              <h3 className="font-bold text-lg mb-4 text-green-800">📋 Resumo do seu pedido:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>• eBook Jornada Transformadora (21 dias)</span>
                  <span className="line-through text-gray-500">R$ 97,00</span>
                </div>
                <div className="flex justify-between">
                  <span>• Playlist Adoração Transformadora</span>
                  <span className="line-through text-gray-500">R$ 47,00</span>
                </div>
                <div className="flex justify-between">
                  <span>• Wallpapers Inspiracionais</span>
                  <span className="line-through text-gray-500">R$ 27,00</span>
                </div>
                <div className="flex justify-between">
                  <span>• Guia de Estudo Bíblico</span>
                  <span className="line-through text-gray-500">R$ 67,00</span>
                </div>
                <div className="flex justify-between">
                  <span>• 30 Orações Poderosas</span>
                  <span className="line-through text-gray-500">R$ 37,00</span>
                </div>
                <hr className="my-3 border-green-300"/>
                <div className="flex justify-between font-bold text-lg">
                  <span>TOTAL:</span>
                  <span className="text-green-600 text-2xl">GRATUITO</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="border-2 border-gray-300 focus:border-amber-500 text-gray-800"
                  placeholder="Como você gostaria de ser chamado?"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  Seu Melhor E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-2 border-gray-300 focus:border-amber-500 text-gray-800"
                  placeholder="Digite o e-mail que você mais usa"
                />
                <p className="text-xs text-gray-600 mt-1">
                  📧 Seu eBook será enviado instantaneamente para este e-mail
                </p>
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                  WhatsApp (opcional)
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="border-2 border-gray-300 focus:border-amber-500 text-gray-800"
                  placeholder="(11) 99999-9999"
                />
                <p className="text-xs text-gray-600 mt-1">
                  💬 Para receber lembretes diários motivacionais
                </p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <input type="checkbox" required className="mt-1"/>
                  <p className="text-xs text-gray-700">
                    Ao clicar em "Receber meu eBook", você concorda em receber e-mails inspiracionais 
                    e materiais gratuitos sobre crescimento espiritual. Seus dados estão seguros conosco.
                  </p>
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🔥 RECEBER MEU EBOOK AGORA - 100% GRÁTIS
              </Button>
              
              <div className="text-center text-xs text-gray-600 space-y-1">
                <p>🔒 Suas informações estão seguras e protegidas</p>
                <p>📱 Acesso imediato pelo celular, tablet ou computador</p>
                <p>✝️ Material 100% baseado na Palavra de Deus</p>
              </div>
            </form>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-sm opacity-80">
              ⏰ Esta oferta especial expira em: <span className="font-bold text-yellow-300">23:45:12</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
