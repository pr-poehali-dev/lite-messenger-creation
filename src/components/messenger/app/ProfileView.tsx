import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface ProfileViewProps {
  onPremiumClick: () => void;
}

const ProfileView = ({ onPremiumClick }: ProfileViewProps) => {
  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">Профиль</h2>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-4">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="text-5xl">😊</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold">Иван</h3>
                <p className="text-muted-foreground">@ivan_user</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-muted-foreground">онлайн</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-4">
              <Icon name="Phone" size={20} className="text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <p className="font-medium">+7 (900) 123-45-67</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="AtSign" size={20} className="text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Юзернейм</p>
                <p className="font-medium">@ivan_user</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Crown" size={24} className="text-primary" />
                  <h3 className="text-xl font-bold">Lites Premium</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Получите доступ к эксклюзивным функциям и возможностям
                </p>
                <Button onClick={onPremiumClick} className="w-full">
                  Подробнее
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full">
          <Icon name="Edit" size={20} className="mr-2" />
          Редактировать профиль
        </Button>
      </div>
    </div>
  );
};

export default ProfileView;
