
import { Button } from "@/components/ui/button";
import { Gamepad2, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gray-800" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="w-16 h-16 text-red-500 mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-red-400 bg-clip-text text-transparent">
              Академия киберспорта
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Раскройте свой киберспортивный потенциал
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            В этом разделе вы найдете яркий заголовок и иллюстрации, которые подчеркивают уникальные 
            преимущества академии, такие как профессиональная подготовка, индивидуальное обучение и 
            возможности для роста в киберспортивной индустрии.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              <Zap className="w-5 h-5 mr-2" />
              Начать тренировки
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
