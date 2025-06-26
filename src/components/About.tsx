
import { Users, Target, Trophy } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              О нас
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Мы помогаем талантливым спортсменам развиваться в киберспорте. У нас большой 
              выбор игр, профессиональная подготовка и гибкий график занятий. Наши 
              квалифицированные преподаватели работают как очно, так и удаленно, чтобы каждый мог 
              найти удобный формат обучения.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">500+</h3>
                <p className="text-sm text-gray-400">Учеников</p>
              </div>
              
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-red-500 transition-all duration-300">
                <Target className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">15+</h3>
                <p className="text-sm text-gray-400">Игр</p>
              </div>
              
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">50+</h3>
                <p className="text-sm text-gray-400">Побед</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <img 
                src="/lovable-uploads/4235687a-3f27-429a-9223-1e10b9d4e410.png" 
                alt="Команда киберспортсменов" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
