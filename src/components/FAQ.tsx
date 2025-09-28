import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "Общие вопросы",
      questions: [
        {
          question: "Что такое Place of Power?",
          answer: "Place of Power — это киберспортивная академия, которая помогает игрокам развивать свои навыки в различных дисциплинах. Мы предлагаем индивидуальные и групповые тренировки, проводим турниры и помогаем новичкам найти свою игру."
        },
        {
          question: "С какого возраста можно начать обучение?",
          answer: "Мы принимаем учеников от 12 лет. Для несовершеннолетних требуется согласие родителей. У нас есть специальные программы для разных возрастных групп."
        },
        {
          question: "Нужен ли опыт в киберспорте?",
          answer: "Опыт не обязателен! Мы работаем как с новичками, так и с опытными игроками. Наши тренеры адаптируют программу под ваш уровень и цели."
        }
      ]
    },
    {
      category: "Обучение и тренировки",
      questions: [
        {
          question: "Какие игры вы преподаете?",
          answer: "Мы обучаем Dota 2, Counter-Strike 2, League of Legends, FIFA и многим другим играм. Если вашей игры нет в списке, мы можем подобрать подходящую альтернативу или найти специалиста."
        },
        {
          question: "Как проходят индивидуальные тренировки?",
          answer: "Индивидуальные тренировки проходят один на один с тренером. Мы анализируем вашу игру, выявляем слабые места и составляем персональную программу развития. Занятия могут проходить онлайн или очно."
        },
        {
          question: "Что входит в групповые тренировки?",
          answer: "Групповые тренировки включают командную работу, анализ матчей, изучение тактик и стратегий. Это отличный способ улучшить навыки в конкурентной среде и найти команду."
        },
        {
          question: "Как долго длится курс обучения?",
          answer: "Длительность зависит от ваших целей и начального уровня. Базовый курс составляет 1-2 месяца, продвинутый — 3-6 месяцев. Мы составляем индивидуальный план для каждого ученика."
        }
      ]
    },
    {
      category: "Стоимость и оплата",
      questions: [
        {
          question: "Сколько стоят тренировки?",
          answer: "Стоимость варьируется от 800 до 2000 рублей за занятие в зависимости от типа тренировки и тренера. Групповые занятия дешевле индивидуальных. Первое занятие часто проводится со скидкой."
        },
        {
          question: "Есть ли скидки?",
          answer: "Да! Мы предоставляем скидки при покупке абонемента на месяц, для студентов и при обучении нескольких игроков из одной семьи. Также действуют сезонные акции."
        },
        {
          question: "Как можно оплатить?",
          answer: "Принимаем оплату наличными, банковскими картами, через СБП, PayPal и криптовалютой. Возможна рассрочка для длительных курсов."
        }
      ]
    },
    {
      category: "Технические вопросы",
      questions: [
        {
          question: "Какие требования к оборудованию?",
          answer: "Для онлайн-занятий нужен стабильный интернет (от 10 Мбит/с), компьютер или консоль с игрой, гарнитура с микрофоном. Для очных занятий оборудование предоставляется."
        },
        {
          question: "Можно ли заниматься онлайн?",
          answer: "Да, большинство наших тренировок доступны онлайн. Мы используем современные платформы для видеосвязи и совместной работы. Качество онлайн-занятий не уступает очным."
        },
        {
          question: "Что делать, если пропустил занятие?",
          answer: "Пропущенные занятия можно отработать в течение месяца. Мы стараемся подстроиться под ваш график и найти удобное время для компенсации."
        }
      ]
    },
    {
      category: "Результаты и достижения",
      questions: [
        {
          question: "Каких результатов можно достичь?",
          answer: "Наши ученики повышают свой рейтинг на 200-500 пунктов за месяц, выходят в более высокие лиги и даже становятся профессиональными игроками. Все зависит от вашей мотивации и времени, которое вы готовы уделять."
        },
        {
          question: "Есть ли система прогресса?",
          answer: "Да! У нас есть система рангов от Bronze до Immortal, достижения за различные успехи и еженедельные отчеты о прогрессе. Это помогает мотивировать и отслеживать развитие."
        },
        {
          question: "Проводятся ли турниры?",
          answer: "Мы регулярно проводим внутренние турниры для наших учеников, а также помогаем участвовать в внешних соревнованиях. Это отличная возможность применить полученные навыки."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-blue-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Часто задаваемые вопросы
            </h2>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о нашей киберспортивной академии. 
            Не нашли ответ? Свяжитесь с нами!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 10 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card 
                      key={itemIndex}
                      className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm group"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                        >
                          <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0 ml-4" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6 animate-fade-in">
                            <div className="border-t border-gray-700 pt-4">
                              <p className="text-gray-300 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
