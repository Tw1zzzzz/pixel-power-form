
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Target, Star, Award, TrendingUp } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "9 лет в киберспорте",
      description: "Опыт работы комментатором, игроком, тренером и аналитиком",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Команды высокого уровня",
      description: "Работа с Vega Squadron Academy, Quazar, I7, 1win Academy",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Результативность",
      description: "+40% к командной эффективности за 2 месяца тренировок",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Star,
      title: "Индивидуальные успехи",
      description: "Подняли игроков с нуля до 2700 и 2200 Elo (Faceit). Выход в ESEA Main",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Мультикастинг",
      description: "CS2, Dota2, Fifa, LoL. Опыт работы в RuHUB, UCC, Storm Studio и др.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Управленческий опыт",
      description: "Руководство филиалами, спортивное директорство, кризис-менеджмент",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Достижения
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
            Профессиональный путь в киберспорте с проверенными результатами и экспертизой 
            в области тренерской работы, аналитики и управления командами.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} p-4 group-hover:shadow-lg transition-all duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-2">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed text-center">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Achievements;
