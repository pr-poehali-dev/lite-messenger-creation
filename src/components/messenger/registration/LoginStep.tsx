import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LoginStepProps {
  onNext: () => void;
  onBack: () => void;
}

const LoginStep = ({ onNext, onBack }: LoginStepProps) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && code) {
      onNext();
    }
  };

  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="w-fit -ml-2"
        >
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <CardTitle>Вход в аккаунт</CardTitle>
        <CardDescription>Войдите с помощью телефона</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="code">Код подтверждения</Label>
            <Input
              id="code"
              type="text"
              placeholder="000000"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="h-12"
              maxLength={6}
            />
          </div>

          <Button
            type="submit"
            disabled={!phone || code.length !== 6}
            className="w-full h-12 text-lg"
          >
            Войти
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginStep;
