
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send, MessageCircle, Loader2, Twitch, Users } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import OptimizedImage from "./OptimizedImage";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    game: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS конфигурация - замените на ваши реальные значения
  const EMAILJS_CONFIG = {
    serviceId: 'service_3njoeza', // Замените на ваш Service ID
    templateId: 'template_qf27ivk', // Замените на ваш Template ID  
    publicKey: 'AkMK-87kW94De7wzD' // Замените на ваш Public Key
  };

  // Инициализируем EmailJS
  emailjs.init(EMAILJS_CONFIG.publicKey);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Подготавливаем данные для EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        game: formData.game,
        message: formData.message,
        to_email: 'reksar9@mail.ru' // Ваша почта
      };

      console.log('Отправляемые данные:', templateParams);
      console.log('Конфигурация EmailJS:', EMAILJS_CONFIG);

      // ВАРИАНТ 1: Пробуем EmailJS
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          templateParams,
          EMAILJS_CONFIG.publicKey
        );
      } catch (emailjsError) {
        console.log('EmailJS не сработал, пробуем запасной вариант через Vercel API...');
        
        // ВАРИАНТ 2: Запасной через Vercel API
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            game: formData.game,
            message: formData.message
          })
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log('Успешно отправлено через API:', result);
      }

      toast.success("🎉 Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", email: "", phone: "", game: "", message: "" });
      
    } catch (error) {
      console.error('Детальная ошибка EmailJS:', error);
      
      // Логируем все свойства объекта ошибки
      console.log('Все свойства ошибки:', Object.keys(error || {}));
      console.log('JSON ошибки:', JSON.stringify(error, null, 2));
      
      // Проверяем разные типы ошибок EmailJS
      if (error && typeof error === 'object') {
        console.log('status:', (error as any).status);
        console.log('text:', (error as any).text);
        console.log('message:', (error as any).message);
        console.log('name:', (error as any).name);
      }
      
      // Более детальное логирование
      if (error instanceof Error) {
        console.error('Сообщение ошибки:', error.message);
        console.error('Тип ошибки:', error.name);
      }
      
      // Конкретные сообщения об ошибках
      let errorMessage = "❌ Ошибка отправки заявки. ";
      
      if (error && typeof error === 'object' && 'status' in error) {
        const status = (error as any).status;
        const text = (error as any).text || '';
        
        console.log(`Статус ошибки: ${status}, Текст: ${text}`);
        
        switch (status) {
          case 400:
            errorMessage += "Неверные параметры. Проверьте настройки EmailJS.";
            break;
          case 401:
            errorMessage += "Ошибка авторизации EmailJS. Проверьте Public Key.";
            break;
          case 402:
            errorMessage += "Превышен лимит отправки EmailJS.";
            break;
          case 404:
            errorMessage += "Сервис или шаблон EmailJS не найден. Проверьте ID.";
            break;
          case 412:
            errorMessage += "Шаблон содержит неверные переменные.";
            break;
          default:
            errorMessage += `Код ошибки: ${status}. ${text || 'Попробуйте позже.'}`;
        }
      } else {
        errorMessage += "Попробуйте еще раз или свяжитесь с нами напрямую.";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
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
            <OptimizedImage 
              src="/lovable-uploads/5da7a7cd-8dae-461d-a1b6-556993f9a88e.png" 
              alt="Place of Power"
              className="w-16 h-16 object-contain mr-4"
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
                    disabled={isLoading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Отправить заявку
                      </>
                    )}
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
                  <p className="text-gray-400">reksar9@mail.ru</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-green-500 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <Phone className="w-8 h-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Телефон</h3>
                  <p className="text-gray-400">8-968-612-17-00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-purple-500 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <MessageCircle className="w-8 h-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Telegram</h3>
                  <p className="text-gray-400">@F1ife</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-green-400 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <MessageCircle className="w-8 h-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                  <p className="text-gray-400">8-968-612-17-00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-purple-500 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <Twitch className="w-8 h-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Twitch</h3>
                  <a href="https://twitch.tv/mrflifetv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                    twitch.tv/mrflifetv
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-indigo-500 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <Users className="w-8 h-8 text-indigo-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Discord</h3>
                  <a href="https://discord.gg/Flife" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    discord.gg/Flife
                  </a>
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
