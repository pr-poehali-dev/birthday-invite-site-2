import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за подтверждение! 🎉",
      description: "Жду тебя на празднике!",
    });
    setFormData({ name: '', email: '', guests: '1', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              День Рождения
            </h1>
            <div className="hidden md:flex gap-6">
              {['hero', 'about', 'details', 'rsvp'].map((section, idx) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {['Главная', 'О событии', 'Детали', 'RSVP'][idx]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(241, 234, 255, 0.9), rgba(229, 221, 255, 0.8)), url('https://cdn.poehali.dev/projects/94ac9901-7b3d-436e-80a1-7e5cec989f84/files/048da0c1-b7cf-4179-9ad9-9944f30b9cfb.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <div className="inline-block animate-float mb-8">
            <div className="text-8xl">🎉</div>
          </div>
          
          <div className="mb-4">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent-foreground rounded-full text-white text-lg md:text-xl font-semibold shadow-lg animate-scale-in">
              Sweet 16
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent leading-tight px-4">
            Приглашаю на<br />День Рождения
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto font-light px-4">
            Буду рад разделить этот особенный день с тобой
          </p>
          
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('rsvp')}
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Подтвердить присутствие
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('details')}
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-background/50 backdrop-blur hover:bg-background/80 transition-all hover:scale-105"
            >
              Подробности
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary/50" />
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-b from-background/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in px-4">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                О событии
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: 'Sparkles', title: 'Кайфово', text: 'Будет невероятная атмосфера и море позитива' },
                { icon: 'Music', title: 'Весело', text: 'Будем петь и танцевать до упаду' },
                { icon: 'UtensilsCrossed', title: 'Вкусно', text: 'Покушаем от души, голодным никто не уйдёт' }
              ].map((item, idx) => (
                <Card 
                  key={idx}
                  className="bg-card/50 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon} size={28} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-accent/30 to-secondary/50 backdrop-blur border-primary/20 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shirt" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Дресс-код</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      <strong>«Как будто ты пришёл не на ту вечеринку»</strong> — приходи в свадебном платье, как будто идёшь на футбольный матч, в офисный костюм или в любом другом неожиданном образе. Чем креативнее, тем лучше!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="details" className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in px-4">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Место и время
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Calendar" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Дата</h3>
                      <p className="text-lg text-muted-foreground">Воскресенье, 18 января 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Время</h3>
                      <p className="text-lg text-muted-foreground">16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Место проведения</h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        Антикинотеатр «Облака»<br />
                        Долгоруковская ул., 38<br />
                        (цокольный этаж)<br />
                        г. Симферополь
                      </p>
                      <a 
                        href="https://yandex.ru/maps/959/simferopol/house/dolgorukovskaya_ulitsa_38/Z00YcwRiTkUFQFpufXV1cnRlYg==/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          <Icon name="Navigation" className="mr-2" size={18} />
                          Открыть на карте
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 animate-fade-in">
              <Card className="bg-card/80 backdrop-blur border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=34.090400%2C44.957244&z=17&l=map&pt=34.090400,44.957244,pm2rdm"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full"
                    title="Карта местоположения Антикинотеатр Облака"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in px-4">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Связаться со мной
              </h2>
              <p className="text-lg text-muted-foreground">
                Напиши мне в Telegram для подтверждения
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full mt-6" />
            </div>

            <Card className="bg-card/80 backdrop-blur border-border/50 shadow-2xl animate-scale-in">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Send" size={40} className="text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Telegram</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Напиши мне для подтверждения участия или если есть вопросы
                </p>
                
                <a 
                  href="https://t.me/pasharux"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="text-xl px-10 py-7 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Icon name="MessageCircle" className="mr-3" size={24} />
                    @pasharux
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in px-4">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Немного воспоминаний
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card/80 backdrop-blur border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/IMG_0847.png" 
                      alt="Детское фото 1"
                      className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Card className="bg-card/80 backdrop-blur border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/IMG_0846.png" 
                      alt="Детское фото 2"
                      className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gradient-to-t from-primary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4 animate-float">🎂</div>
          <p className="text-lg text-muted-foreground mb-2">
            Жду встречи с тобой!
          </p>
          <p className="text-sm text-muted-foreground/70">
            По всем вопросам: <a href="https://t.me/pasharux" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@pasharux</a>
          </p>
        </div>
      </footer>
    </div>
  );
}