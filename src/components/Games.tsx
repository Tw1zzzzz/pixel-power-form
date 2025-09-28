
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Games = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const games = [
    {
      title: "ТРЕНИРОВКИ ПО DOTA 2",
      price: "от 1000 RUB",
      description: "Освойте одну из самых популярных игр в мире."
    },
    {
      title: "ТРЕНИРОВКИ ПО COUNTER-STRIKE",
      price: "от 1500 RUB", 
      description: "Развивайте навыки в одной из классических игр в жанре FPS."
    },
    {
      title: "ТРЕНИРОВКИ ПО LEAGUE OF LEGENDS",
      price: "от 1000 RUB",
      description: "Станьте частью большого сообщества поклонников MOBA-игр."
    },
    {
      title: "ТРЕНИРОВКИ ПО ДРУГИМ ИГРАМ",
      price: "от 1000 RUB",
      description: "Мы подберём игру, которая подойдёт именно вам."
    },
    {
      title: "ТРЕНИРОВКИ ПО FIFA",
      price: "от 1500 RUB",
      description: "Разрабатываем программу тренировок, учитывая ваши предпочтения и цели."
    },
    {
      title: "ГРУППОВЫЕ ТРЕНИРОВКИ",
      price: "от 800 RUB",
      description: "Присоединяйтесь к группе единомышленников для совместных тренировок."
    },
    {
      title: "КОММЕНТИРОВАНИЕ",
      price: "от 2000 RUB",
      description: "Профессиональное комментирование турниров и матчей с детальным анализом."
    },
    {
      title: "ПРОВЕДЕНИЕ ТУРНИРОВ",
      price: "от 5000 RUB",
      description: "Организация и проведение киберспортивных турниров любого масштаба."
    },
    {
      title: "ОБУЧЕНИЕ",
      price: "от 1200 RUB",
      description: "Комплексное обучение основам киберспорта и игровой механике."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Игры
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            В разделе представлены популярные киберспортивные дисциплины, отражающие 
            адаптивность академии и её стремление к разнообразию.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-sm group relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">
                  {game.title}
                </CardTitle>
                <div className="text-2xl font-bold text-red-500 group-hover:text-red-400 transition-colors duration-300">
                  {game.price}
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {game.description}
                </p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
