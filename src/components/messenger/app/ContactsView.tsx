import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const mockContacts = [
  { id: 1, name: 'Алексей', username: 'alex_dev', avatar: '👨‍💻', status: 'online', lastSeen: '' },
  { id: 2, name: 'Мария', username: 'maria_design', avatar: '🎨', status: 'offline', lastSeen: '2 часа назад' },
  { id: 3, name: 'Дмитрий', username: 'dmitry_pm', avatar: '📊', status: 'online', lastSeen: '' },
];

const ContactsView = () => {
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold mb-4">Контакты</h2>
        <div className="relative">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Поиск контактов..." className="pl-10" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {mockContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="text-2xl">{contact.avatar}</AvatarFallback>
                </Avatar>
                {contact.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium truncate">{contact.name}</p>
                  {contact.status === 'online' && (
                    <Badge variant="secondary" className="text-xs">онлайн</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">@{contact.username}</p>
                {contact.lastSeen && (
                  <p className="text-xs text-muted-foreground">был(а) {contact.lastSeen}</p>
                )}
              </div>

              <Button size="icon" variant="ghost">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsView;
