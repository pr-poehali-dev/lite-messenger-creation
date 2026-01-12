import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PhoneStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onLoginClick: () => void;
}

const PhoneStep = ({ value, onChange, onNext, onLoginClick }: PhoneStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length >= 10) {
      onNext();
    }
  };

  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <CardTitle>Номер телефона</CardTitle>
        <CardDescription>Введите ваш номер для регистрации</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-lg h-12"
          />
          <Button 
            type="submit" 
            className="w-full h-12 text-lg"
            disabled={value.length < 10}
          >
            Продолжить
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="w-full"
            onClick={onLoginClick}
          >
            Уже есть аккаунт? Войти
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PhoneStep;
