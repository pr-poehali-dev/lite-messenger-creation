import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const SettingsView = () => {
  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">Настройки</h2>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Уведомления</CardTitle>
            <CardDescription>Управление оповещениями</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Звук уведомлений</Label>
                <p className="text-sm text-muted-foreground">
                  Воспроизводить звук при новых сообщениях
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push-уведомления</Label>
                <p className="text-sm text-muted-foreground">
                  Показывать уведомления на рабочем столе
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Конфиденциальность</CardTitle>
            <CardDescription>Контроль приватности</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Статус онлайн</Label>
                <p className="text-sm text-muted-foreground">
                  Показывать когда вы онлайн
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Время последней активности</Label>
                <p className="text-sm text-muted-foreground">
                  Показывать время последнего визита
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Интерфейс</CardTitle>
            <CardDescription>Настройки отображения</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Темная тема</Label>
                <p className="text-sm text-muted-foreground">
                  Использовать темное оформление
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/20">
          <CardHeader>
            <CardTitle className="text-destructive">Опасная зона</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full text-destructive">
              <Icon name="LogOut" size={20} className="mr-2" />
              Выйти из аккаунта
            </Button>
            <Button variant="outline" className="w-full text-destructive">
              <Icon name="Trash2" size={20} className="mr-2" />
              Удалить аккаунт
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsView;
