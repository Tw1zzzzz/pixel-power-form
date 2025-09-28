
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";

const Team = () => {
  const trainers = [
    {
      name: "Петр Постников",
      role: "Тренер по киберспорту",
      image: "/lovable-uploads/956dbb6b-eb3f-4fc5-adb7-725d784ac601.png"
    },
    {
      name: "Константин Шарапов", 
      role: "Тренер по Dota2",
      image: "/lovable-uploads/e7a6a48a-a09e-4f7a-bf95-d3f418d5905e.png"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Познакомьтесь с нашей командой
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            В разделе представлены опытные тренеры академии, подчеркивающие свою квалификацию и преданность успеху учеников. 
            Узнайте о компетенции команды и стремлении к развитию игроков.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trainers.map((trainer, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-blue-400 transition-all duration-300">
                  <OptimizedImage 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-gray-400">
                  {trainer.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
