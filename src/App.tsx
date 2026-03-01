import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, Send, MessageCircle, CheckCircle2, ArrowRight, Star, TrendingUp, Globe,
  Rocket, Briefcase, Baby, GraduationCap, ShoppingBag, Wallet, ChevronDown, Menu, X, MapPin, Users
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[30%] bg-orange-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation Menu */}
      <div className="fixed top-6 right-5 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-xl text-white transition-colors hover:bg-[#222]"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-5 z-40 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl min-w-[200px]"
          >
            <div className="flex flex-col gap-1">
              {[
                { id: 'hero', label: 'О курсе' },
                { id: 'audience', label: 'Для кого' },
                { id: 'format', label: 'Формат обучения' },
                { id: 'pricing', label: 'Тарифы' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container - Mobile Constrained */}
      <main className="relative z-10 max-w-md mx-auto px-5 py-12 flex flex-col gap-10">
        
        {/* Hero Section */}
        <motion.section 
          id="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center pt-8"
        >
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-orange-500 to-orange-800">
              <img 
                src="/profile.png" 
                alt="Капанова Эльмира" 
                className="w-full h-full object-cover rounded-full border-4 border-[#050505]"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#1a1a1a] p-2 rounded-full border border-white/10 shadow-xl">
              <Globe className="w-5 h-5 text-orange-500" />
            </div>
          </div>
          
          <h1 className="font-display text-3xl font-bold tracking-tight mb-2">
            Капанова Эльмира
          </h1>
          <p className="text-orange-400 font-medium text-sm tracking-wide uppercase mb-4">
            Эксперт по товарному бизнесу
          </p>
          <p className="text-white/70 text-sm leading-relaxed max-w-[320px]">
            Научу выкупать товары напрямую с китайских маркетплейсов и фабрик и выстраивать прибыльный бизнес без посредников.
          </p>
        </motion.section>

        {/* Stats / Highlights */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full bg-[#111]/80 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden shadow-xl"
        >
          <div className="flex items-center gap-4 p-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center shrink-0 shadow-[inset_0_0_15px_rgba(249,115,22,0.1)]">
              <TrendingUp className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-white tracking-tight">2+ года</span>
              <span className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">в товарном бизнесе</span>
            </div>
          </div>
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="flex items-center gap-4 p-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center shrink-0 shadow-[inset_0_0_15px_rgba(249,115,22,0.1)]">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 font-display font-bold text-lg text-white tracking-tight">
                <span>Китай</span>
                <ArrowRight className="w-4 h-4 text-orange-500/80" />
                <span>Казахстан</span>
              </div>
              <span className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">реальный опыт логистики</span>
            </div>
          </div>
        </motion.section>

        {/* Target Audience Section */}
        <motion.section 
          id="audience"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-4 mt-4 mb-4"
        >
          <div className="flex flex-col items-center mb-2">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wider mb-4">
              Для кого этот курс?
            </h2>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-2">
              <ChevronDown className="w-5 h-5 text-orange-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Item 1 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                  <Rocket className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight uppercase text-orange-50">Для новичков</h3>
                  <p className="text-orange-200/60 text-xs">(кто хочет начать бизнес)</p>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Вы научитесь заказывать товары напрямую с китайских маркетплейсов (1688, Taobao, Pinduoduo), находить поставщиков, проверять их и выкупать товар без посредников. Подходит даже без опыта.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                  <Briefcase className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight uppercase text-orange-50">Для тех, у кого уже есть бизнес</h3>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Вы сможете расширить ассортимент, снизить себестоимость товара и выйти напрямую к поставщикам и фабрикам в Китае, без переплат посредникам.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                  <Baby className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight uppercase text-orange-50">Для мам в декрете</h3>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Возможность заказывать товары для себя и на продажу напрямую из Китая, экономить и зарабатывать онлайн, не выходя из дома.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                  <GraduationCap className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight uppercase text-orange-50">Для студентов</h3>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Вы освоите простой навык, который позволит зарабатывать онлайн и заказывать товары из Китая значительно дешевле, чем в местных магазинах.
              </p>
            </div>

            {/* Item 5 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                  <ShoppingBag className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight uppercase text-orange-50">Для тех, кто хочет стать байером</h3>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                На обучении вы научитесь работать с заказами клиентов, выкупать товары под запрос и зарабатывать на услугах байера.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Format Section */}
        <motion.section 
          id="format"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
        >
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2 text-orange-500">
            <Users className="w-5 h-5" />
            Формат обучения
          </h2>
          <ul className="space-y-3 mb-5">
            {['Оффлайн встречи', 'Небольшие группы', 'Практика и живые разборы', 'Ответы на вопросы'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
            <p className="text-sm text-orange-100/80 leading-relaxed italic">
              "Мы начинаем спокойно и без перегруза. Главная цель — результат, а не количество учеников."
            </p>
          </div>
        </motion.section>

        {/* Packages Section */}
        <motion.section 
          id="pricing"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <h2 className="font-display text-xl font-semibold mb-2 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-orange-500"></span>
            Тарифы обучения
            <span className="w-8 h-[1px] bg-orange-500"></span>
          </h2>

          {/* Package 1 */}
          <div className="group relative bg-[#111] border border-white/10 rounded-3xl p-6 overflow-hidden transition-all hover:border-orange-500/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-orange-500/10" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1">Базовый</h3>
                  <p className="text-white/50 text-sm">Оффлайн обучение. Подходит для новичков.</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {['Регистрация и работа с 1688, Taobao, Pinduoduo', 'Поиск товара и поставщика', 'Проверка продавцов', 'Общение с поставщиками', 'Выкуп и оплата товара', 'Частые ошибки новичков'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Результат:</p>
                <p className="text-sm font-medium text-white/90">Вы самостоятельно выкупаете товары из Китая без посредников.</p>
              </div>

              <a href="http://wa.me/+77773283088" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                Записаться
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Package 2 */}
          <div className="group relative bg-gradient-to-b from-orange-900/40 to-[#111] border border-orange-500/30 rounded-3xl p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -mr-10 -mt-10" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1 text-orange-50">Наставничество</h3>
                  <p className="text-orange-200/60 text-sm">Оффлайн формат. Личная работа.</p>
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  VIP
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {['Всё из тарифа "Базовый"', 'Регистрация и настройка WeChat', 'Регистрация и настройка Alipay', 'Общение с фабриками напрямую', 'Совместный первый выкуп', 'Помощь с логистикой до Казахстана'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-orange-50/90">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <p className="text-xs text-orange-300/60 uppercase tracking-wider mb-1">Результат:</p>
                <p className="text-sm font-medium text-orange-50/90">Вы работаете с Китаем как предприниматель или байер.</p>
              </div>

              <a href="http://wa.me/+77773283088" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                Записаться на VIP
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section 
          id="contacts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 mt-4"
        >
          <div className="text-center mb-2">
            <p className="text-white/80 text-sm">
              Остались вопросы? Напишите - подскажем и подберём формат обучения.
            </p>
          </div>

          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-2 rounded-xl">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium flex-1">Instagram</span>
            <ArrowRight className="w-4 h-4 text-white/30" />
          </a>
          
          <a href="https://t.me/+tZj1wiiphJQ1ZThi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-[#0088cc] p-2 rounded-xl">
              <Send className="w-5 h-5 text-white ml-0.5" />
            </div>
            <span className="font-medium flex-1">Telegram канал</span>
            <ArrowRight className="w-4 h-4 text-white/30" />
          </a>

          <a href="http://wa.me/+77773283088" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-[#25D366] p-2 rounded-xl">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium flex-1">Написать в WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-white/30" />
          </a>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/30 text-xs mt-4 pb-8"
        >
          <p>© {new Date().getFullYear()} Капанова Эльмира. Все права защищены.</p>
        </motion.footer>

      </main>
    </div>
  );
}
