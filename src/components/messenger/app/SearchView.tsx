import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const SearchView = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold mb-4">Поиск</h2>
        <div className="relative">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Поиск по сообщениям, людям..."
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center text-muted-foreground max-w-md">
          <Icon name="Search" size={80} className="mx-auto mb-4 opacity-20" />
          <p className="text-xl font-medium mb-2">Начните поиск</p>
          <p className="text-sm">
            Введите запрос для поиска по чатам, контактам и сообщениям
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
