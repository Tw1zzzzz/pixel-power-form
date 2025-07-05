
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    game: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", game: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/5da7a7cd-8dae-461d-a1b6-556993f9a88e.png" 
              alt="Академия киберспорта"
              className="w-12 h-12 object-contain mr-4"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Свяжитесь с нами
            </h2>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Профессиональное обучение киберспорту для всех возрастов. 
            Подберём игру и составим график занятий.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="phone"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    />
                    <Input
                      name="game"
                      placeholder="Интересующая игра"
                      value={formData.game}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    />
                  </div>
                  
                  <Textarea
                    name="message"
                    placeholder="Расскажите о ваших целях в киберспорте..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 animate-fade-in">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <Mail className="w-8 h-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-400">info@cybersport-academy.ru</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-green-500 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <Phone className="w-8 h-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Телефон</h3>
                  <p className="text-gray-400">+7 (999) 123-45-67</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-red-500 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <MapPin className="w-8 h-8 text-red-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Адрес</h3>
                  <p className="text-gray-400">г. Москва, ул. Киберспортивная, д. 1</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-radial from-blue-500/20 to-transparent p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 10:00 - 22:00</p>
                <p>Сб-Вс: 12:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
