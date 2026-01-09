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
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent leading-tight">
            Приглашаю на<br />День Рождения
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto font-light">
            Буду рад разделить этот особенный день с тобой
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('rsvp')}
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Подтвердить присутствие
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('details')}
              className="text-lg px-8 py-6 bg-background/50 backdrop-blur hover:bg-background/80 transition-all hover:scale-105"
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
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                О событии
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: 'Sparkles', title: 'Атмосфера', text: 'Стильная вечеринка в современном пространстве' },
                { icon: 'Music', title: 'Развлечения', text: 'Отличная музыка и увлекательная программа' },
                { icon: 'Wine', title: 'Угощения', text: 'Изысканные напитки и деликатесы' }
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
                      Элегантный повседневный стиль. Приветствуются стильные и комфортные наряды в тёплых тонах — идеально подойдут бежевые, лавандовые или пастельные оттенки.
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
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
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
                      <p className="text-lg text-muted-foreground">Суббота, 15 февраля 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Время</h3>
                      <p className="text-lg text-muted-foreground">19:00 - 02:00</p>
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
                        Лофт "Атмосфера"<br />
                        ул. Примерная, 123<br />
                        Москва
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Icon name="Navigation" className="mr-2" size={18} />
                        Открыть на карте
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Подтверди присутствие
              </h2>
              <p className="text-lg text-muted-foreground">
                Буду благодарен за ответ до 1 февраля
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full mt-6" />
            </div>

            <Card className="bg-card/80 backdrop-blur border-border/50 shadow-2xl animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Твоё имя *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 text-base"
                      placeholder="Как тебя представить?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-base">Количество гостей</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">Пожелания или комментарии</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-24 text-base resize-none"
                      placeholder="Есть ли особые пожелания?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Подтвердить участие
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
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
            По всем вопросам: <a href="mailto:party@example.com" className="text-primary hover:underline">party@example.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
