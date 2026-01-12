import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface UsernameStepProps {
  nickname: string;
  username: string;
  onNicknameChange: (value: string) => void;
  onUsernameChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const UsernameStep = ({
  nickname,
  username,
  onNicknameChange,
  onUsernameChange,
  onNext,
  onBack,
}: UsernameStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname && username) {
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
        <CardTitle>Завершение регистрации</CardTitle>
        <CardDescription>Как вас будут называть?</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nickname">Имя</Label>
            <Input
              id="nickname"
              placeholder="Введите ваше имя"
              value={nickname}
              onChange={(e) => onNicknameChange(e.target.value)}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Юзернейм</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                @
              </span>
              <Input
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => onUsernameChange(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                className="h-12 pl-7"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Только латиница, цифры и подчеркивание
            </p>
          </div>

          <Button
            type="submit"
            disabled={!nickname || !username}
            className="w-full h-12 text-lg"
          >
            Готово
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UsernameStep;
