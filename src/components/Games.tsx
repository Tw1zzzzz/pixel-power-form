
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Games = () => {
  const games = [
    {
      title: "ТРЕНИРОВКИ ПО DOTA 2",
      price: "RUB 1000",
      description: "Освойте одну из самых популярных игр в мире."
    },
    {
      title: "ТРЕНИРОВКИ ПО COUNTER-STRIKE",
      price: "RUB 1500", 
      description: "Развивайте навыки в одной из классических игр в жанре FPS."
    },
    {
      title: "ТРЕНИРОВКИ ПО LEAGUE OF LEGENDS",
      price: "RUB 1000",
      description: "Станьте частью большого сообщества поклонников MOBA-игр."
    },
    {
      title: "ТРЕНИРОВКИ ПО ДРУГИМ ИГРАМ",
      price: "RUB 1000",
      description: "Мы подберём игру, которая подойдёт именно вам."
    },
    {
      title: "ТРЕНИРОВКИ ПО FIFA",
      price: "RUB 1500",
      description: "Разрабатываем программу тренировок, учитывая ваши предпочтения и цели."
    },
    {
      title: "ГРУППОВЫЕ ТРЕНИРОВКИ",
      price: "RUB 800",
      description: "Присоединяйтесь к группе единомышленников для совместных тренировок."
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
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm group">
              <CardHeader>
                <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors">
                  {game.title}
                </CardTitle>
                <div className="text-2xl font-bold text-red-500">
                  {game.price}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {game.description}
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300">
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
