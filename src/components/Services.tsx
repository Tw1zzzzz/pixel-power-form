
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Headphones, Tv, Trophy, GraduationCap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуальные тренировки",
      description: "Разработаем программу, адаптированную под ваши цели и игровые предпочтения, чтобы вы могли максимально эффективно развивать свои навыки.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Групповые тренировки",
      description: "Участвуйте в групповых занятиях по выбранной дисциплине, работайте в команде и улучшайте свои навыки в конкурентной среде.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Headphones,
      title: "Помощь в выборе игры",
      description: "Если вы еще не определились с игрой, наши специалисты помогут вам выбрать наиболее подходящий вариант для развития ваших киберспортивных навыков.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Tv,
      title: "Трансляции и комментирование",
      description: "Проводим трансляции игр и профессиональное комментирование турниров с детальным анализом игровых моментов.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Trophy,
      title: "Проведение турниров",
      description: "Организуем и проводим киберспортивные турниры различного уровня для развития соревновательного опыта.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Киберспортивное обучение",
      description: "Киберспортивное обучение по разным направлениям - смягчаем порог вхождения в выбранную игру для новичков.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Услуги
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Раздел с информацией об обучении: индивидуально и группами, помощь в выборе 
            игры, подготовка к соревнованиям и программы развития навыков.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} p-4 group-hover:shadow-lg transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
