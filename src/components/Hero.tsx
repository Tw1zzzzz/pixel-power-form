
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/57d613c7-e74d-4118-9302-a2894d62aff6.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="animate-fade-in">
          {/* Логотип в центре */}
          <div className="flex justify-center mb-6">
            <OptimizedImage 
              src="/lovable-uploads/5da7a7cd-8dae-461d-a1b6-556993f9a88e.png" 
              alt="Place of Power"
              className="w-24 h-24 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-red-400 bg-clip-text text-transparent mb-6">
            Place of Power
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Раскройте свой киберспортивный потенциал
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            В этом разделе вы найдете яркий заголовок и иллюстрации, которые подчеркивают уникальные 
            преимущества академии, такие как профессиональная подготовка, индивидуальное обучение и 
            возможности для роста в киберспортивной индустрии.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 animate-glow"
            >
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              Начать тренировки
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 backdrop-blur-sm"
            >
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
