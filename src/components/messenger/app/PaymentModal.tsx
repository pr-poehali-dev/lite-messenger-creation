import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  plan: string;
}

const PaymentModal = ({ isOpen, onClose, amount, plan }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'sbp'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [phoneForSBP, setPhoneForSBP] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: 'Оплата успешна! 🎉',
        description: `Premium подписка на ${plan} активирована`,
      });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Оплата Premium</DialogTitle>
          <DialogDescription>
            {plan} — {amount} ₽
          </DialogDescription>
        </DialogHeader>

        <Tabs value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as 'card' | 'sbp')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="card">
              <Icon name="CreditCard" size={16} className="mr-2" />
              Картой
            </TabsTrigger>
            <TabsTrigger value="sbp">
              <Icon name="Smartphone" size={16} className="mr-2" />
              СБП
            </TabsTrigger>
          </TabsList>

          <TabsContent value="card" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Номер карты</Label>
              <Input
                id="cardNumber"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength={19}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Срок</Label>
                <Input
                  id="expiry"
                  placeholder="MM/ГГ"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  maxLength={5}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="***"
                  type="password"
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  maxLength={3}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sbp" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phoneForSBP}
                onChange={(e) => setPhoneForSBP(e.target.value)}
              />
            </div>

            <div className="p-4 rounded-lg bg-muted space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Info" size={16} className="text-primary" />
                <span className="font-medium">Как это работает:</span>
              </div>
              <ol className="text-sm text-muted-foreground space-y-1 ml-6 list-decimal">
                <li>Введите номер телефона</li>
                <li>Откройте приложение банка</li>
                <li>Подтвердите платеж</li>
              </ol>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-3 pt-4">
          <Button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full h-12"
          >
            {isProcessing ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Обработка...
              </>
            ) : (
              <>
                <Icon name="Lock" size={20} className="mr-2" />
                Оплатить {amount} ₽
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с условиями обработки платежа
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
