
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "A jornada é paga?",
      answer: "Não. É 100% gratuita. Nossa missão é compartilhar o amor de Cristo sem barreiras financeiras."
    },
    {
      question: "Preciso de uma Bíblia?",
      answer: "Sim, recomendamos ter uma Bíblia física ou digital. Mas também enviamos todas as passagens necessárias por e-mail."
    },
    {
      question: "É necessário estar em uma igreja?",
      answer: "Não. Basta ter o coração aberto para viver essa experiência com Jesus. Pessoas de todas as denominações são bem-vindas."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Recomendamos de 15 a 30 minutos diários para as atividades propostas, incluindo leitura, reflexão e oração."
    },
    {
      question: "E se eu perder alguns dias?",
      answer: "Não se preocupe! O material ficará sempre disponível e você pode recuperar no seu próprio ritmo."
    },
    {
      question: "Como funciona o grupo de apoio?",
      answer: "Você terá acesso a um grupo fechado onde poderá compartilhar experiências, fazer perguntas e receber oração dos irmãos."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            📩 Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
