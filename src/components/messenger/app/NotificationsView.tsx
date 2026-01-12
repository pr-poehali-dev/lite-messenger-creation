import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const mockNotifications = [
  {
    id: 1,
    type: 'message',
    user: 'Алексей',
    avatar: '👨‍💻',
    text: 'отправил вам сообщение',
    time: '2 минуты назад',
    unread: true,
  },
  {
    id: 2,
    type: 'contact',
    user: 'Мария',
    avatar: '🎨',
    text: 'добавила вас в контакты',
    time: '1 час назад',
    unread: true,
  },
  {
    id: 3,
    type: 'message',
    user: 'Дмитрий',
    avatar: '📊',
    text: 'отправил вам сообщение',
    time: '3 часа назад',
    unread: false,
  },
];

const NotificationsView = () => {
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Уведомления</h2>
          <Badge variant="secondary">5 новых</Badge>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {mockNotifications.map((notification) => (
            <Card
              key={notification.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                notification.unread ? 'bg-primary/5 border-primary/20' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="text-2xl">{notification.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium">
                        {notification.user}{' '}
                        <span className="font-normal text-muted-foreground">
                          {notification.text}
                        </span>
                      </p>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsView;
