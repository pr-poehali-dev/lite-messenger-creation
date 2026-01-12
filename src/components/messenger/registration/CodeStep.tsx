import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import Icon from '@/components/ui/icon';

interface CodeStepProps {
  phone: string;
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const CodeStep = ({ phone, value, onChange, onNext, onBack }: CodeStepProps) => {
  const [timer, setTimer] = useState(40);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(40);
    setCanResend(false);
  };

  const handleComplete = (code: string) => {
    onChange(code);
    if (code.length === 6) {
      setTimeout(onNext, 300);
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
        <CardTitle>Код подтверждения</CardTitle>
        <CardDescription>
          Введите код, отправленный на {phone}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={value} onChange={handleComplete}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="text-center">
          {canResend ? (
            <Button variant="link" onClick={handleResend}>
              Отправить код снова
            </Button>
          ) : (
            <p className="text-sm text-muted-foreground">
              Отправить снова через {timer} сек
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeStep;
