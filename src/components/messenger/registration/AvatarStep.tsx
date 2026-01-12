import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AvatarStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const emojiOptions = ['😊', '😎', '🚀', '⭐', '💙', '🔥', '🎨', '🎮', '🎵', '🌟', '💫', '🎯'];

const AvatarStep = ({ value, onChange, onNext, onBack }: AvatarStepProps) => {
  const [selectedType, setSelectedType] = useState<'emoji' | 'photo'>('emoji');

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (value) {
      onNext();
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
        <CardTitle>Выберите аватар</CardTitle>
        <CardDescription>Эмодзи или фото из галереи</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-2 justify-center">
          <Button
            variant={selectedType === 'emoji' ? 'default' : 'outline'}
            onClick={() => setSelectedType('emoji')}
          >
            <Icon name="Smile" size={20} className="mr-2" />
            Эмодзи
          </Button>
          <Button
            variant={selectedType === 'photo' ? 'default' : 'outline'}
            onClick={() => setSelectedType('photo')}
          >
            <Icon name="Image" size={20} className="mr-2" />
            Фото
          </Button>
        </div>

        {selectedType === 'emoji' ? (
          <div className="grid grid-cols-6 gap-3">
            {emojiOptions.map((emoji) => (
              <button
                key={emoji}
                onClick={() => onChange(emoji)}
                className={`text-4xl p-3 rounded-xl transition-all hover:scale-110 ${
                  value === emoji ? 'bg-primary/10 ring-2 ring-primary' : 'hover:bg-muted'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              {value && !emojiOptions.includes(value) ? (
                <img
                  src={value}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="User" size={48} className="text-muted-foreground" />
                </div>
              )}
            </div>
            <label htmlFor="photo-upload">
              <Button variant="outline" className="w-full" asChild>
                <span>
                  <Icon name="Upload" size={20} className="mr-2" />
                  Выбрать фото
                </span>
              </Button>
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        )}

        <Button
          onClick={handleNext}
          disabled={!value}
          className="w-full h-12 text-lg"
        >
          Продолжить
        </Button>
      </CardContent>
    </Card>
  );
};

export default AvatarStep;
