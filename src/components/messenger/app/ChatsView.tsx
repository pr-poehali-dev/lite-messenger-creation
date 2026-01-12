import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const ChatsView = () => {
  return (
    <div className="flex h-full">
      <div className="w-96 border-r flex flex-col bg-card">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold mb-4">Чаты</h2>
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Поиск чатов..." className="pl-10" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-2 text-center text-muted-foreground py-20">
            <Icon name="MessageSquare" size={64} className="mx-auto mb-4 text-muted-foreground/30" />
            <p className="text-lg">Нет чатов</p>
            <p className="text-sm">Начните новый диалог в контактах</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-muted/10">
        <div className="text-center text-muted-foreground">
          <Icon name="MessageCircle" size={80} className="mx-auto mb-4 opacity-20" />
          <p className="text-xl font-medium">Выберите чат</p>
          <p className="text-sm">Выберите диалог из списка слева</p>
        </div>
      </div>
    </div>
  );
};

export default ChatsView;
