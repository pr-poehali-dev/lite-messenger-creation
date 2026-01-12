import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: 'chats', icon: 'MessageSquare', label: 'Чаты', badge: 3 },
    { id: 'contacts', icon: 'Users', label: 'Контакты' },
    { id: 'search', icon: 'Search', label: 'Поиск' },
    { id: 'notifications', icon: 'Bell', label: 'Уведомления', badge: 5 },
    { id: 'settings', icon: 'Settings', label: 'Настройки' },
  ];

  return (
    <div className="w-20 bg-card border-r flex flex-col items-center py-4 gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="mb-4"
        onClick={() => onViewChange('profile')}
      >
        <Avatar className="w-10 h-10">
          <AvatarImage src="" />
          <AvatarFallback>😊</AvatarFallback>
        </Avatar>
      </Button>

      <div className="flex-1 flex flex-col gap-2">
        {menuItems.map((item) => (
          <div key={item.id} className="relative">
            <Button
              variant={currentView === item.id ? 'default' : 'ghost'}
              size="icon"
              onClick={() => onViewChange(item.id)}
              className="w-12 h-12"
            >
              <Icon name={item.icon as any} size={24} />
            </Button>
            {item.badge && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {item.badge}
              </Badge>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-xs text-muted-foreground font-medium">
        Lites
      </div>
    </div>
  );
};

export default Sidebar;
