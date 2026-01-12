import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import PaymentModal from './PaymentModal';

const premiumFeatures = [
  { icon: 'Zap', title: 'Без рекламы', description: 'Наслаждайтесь мессенджером без отвлечений' },
  { icon: 'Cloud', title: 'Больше хранилища', description: 'До 100 ГБ для файлов и медиа' },
  { icon: 'Users', title: 'Больше участников', description: 'До 200 человек в групповых чатах' },
  { icon: 'Sticker', title: 'Эксклюзивные стикеры', description: 'Премиум-коллекции стикеров' },
  { icon: 'Badge', title: 'Уникальный значок', description: 'Отличительный знак Premium-аккаунта' },
  { icon: 'Download', title: 'Быстрая загрузка', description: 'Приоритет при скачивании файлов' },
];

const plans = [
  { id: '1month', period: '1 месяц', price: 199, discount: null },
  { id: '6months', period: '6 месяцев', price: 999, discount: '17%' },
  { id: '12months', period: '12 месяцев', price: 1699, discount: '29%' },
];

const PremiumView = () => {
  const [selectedPlan, setSelectedPlan] = useState('12months');
  const [showPayment, setShowPayment] = useState(false);

  const selectedPlanData = plans.find((p) => p.id === selectedPlan)!;

  return (
    <>
      <div className="flex flex-col h-full bg-background overflow-y-auto">
        <div className="p-6 border-b bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center gap-3">
            <Icon name="Crown" size={32} className="text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Lites Premium</h2>
              <p className="text-muted-foreground">Откройте все возможности</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="pt-6">
                  <Icon name={feature.icon as any} size={32} className="text-primary mb-3" />
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle>Выберите подписку</CardTitle>
              <CardDescription>Оплата безопасна и защищена</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`flex items-center space-x-3 rounded-lg border-2 p-4 cursor-pointer transition-all ${
                      selectedPlan === plan.id ? 'border-primary bg-primary/5' : 'border-border'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <RadioGroupItem value={plan.id} id={plan.id} />
                    <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{plan.period}</p>
                          <p className="text-sm text-muted-foreground">
                            {plan.price} ₽ {plan.discount && `• Выгода ${plan.discount}`}
                          </p>
                        </div>
                        {plan.discount && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            -{plan.discount}
                          </Badge>
                        )}
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium">Итого:</span>
                  <span className="text-2xl font-bold">{selectedPlanData.price} ₽</span>
                </div>
                <Button onClick={() => setShowPayment(true)} className="w-full h-12 text-lg">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оформить Premium
                </Button>
              </div>

              <div className="flex items-center gap-4 justify-center text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Shield" size={16} />
                  <span>Безопасно</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Lock" size={16} />
                  <span>Зашифровано</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        amount={selectedPlanData.price}
        plan={selectedPlanData.period}
      />
    </>
  );
};

export default PremiumView;
