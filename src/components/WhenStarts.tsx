
const WhenStarts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            📅 Quando começa?
          </h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg mb-6">
            <div className="text-6xl mb-4">🗓️</div>
            <h3 className="text-2xl font-bold mb-2">Próxima turma</h3>
            <p className="text-3xl font-bold mb-4">15 de Julho de 2025</p>
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg">
            <p className="text-lg font-semibold text-yellow-800">
              📌 Vagas Limitadas para manter a experiência pessoal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenStarts;
