
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscrição realizada com sucesso! 🙏",
      description: "Você receberá mais informações em breve no seu e-mail.",
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🔥 Inscreva-se Gratuitamente
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não perca esta oportunidade de viver algo real, profundo e transformador. 
            Jesus está te chamando para caminhar com Ele. Você aceita?
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white font-medium mb-2 block">
                  Nome *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white font-medium mb-2 block">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white font-medium mb-2 block">
                  Telefone (opcional)
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🔹 Sim, eu quero participar!
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
