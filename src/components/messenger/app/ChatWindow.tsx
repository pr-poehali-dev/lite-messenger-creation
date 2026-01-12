import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import VoiceRecorder from './VoiceRecorder';
import VideoRecorder from './VideoRecorder';
import CallWindow from './CallWindow';

interface Message {
  id: number;
  text?: string;
  type: 'text' | 'voice' | 'video';
  sender: 'me' | 'other';
  time: string;
  audioUrl?: string;
  videoUrl?: string;
  duration?: number;
}

interface ChatWindowProps {
  contact: {
    id: number;
    name: string;
    username: string;
    avatar: string;
    status: 'online' | 'offline';
    lastSeen?: string;
  };
  onClose: () => void;
}

const ChatWindow = ({ contact, onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Привет! Как дела?',
      type: 'text',
      sender: 'other',
      time: '14:30',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showVoiceRecorder, setShowVoiceRecorder] = useState(false);
  const [showVideoRecorder, setShowVideoRecorder] = useState(false);
  const [callType, setCallType] = useState<'audio' | 'video' | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputValue,
        type: 'text',
        sender: 'me',
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleVoiceRecorded = (audioUrl: string, duration: number) => {
    const newMessage: Message = {
      id: Date.now(),
      type: 'voice',
      sender: 'me',
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      audioUrl,
      duration,
    };
    setMessages([...messages, newMessage]);
    setShowVoiceRecorder(false);
  };

  const handleVideoRecorded = (videoUrl: string, duration: number) => {
    const newMessage: Message = {
      id: Date.now(),
      type: 'video',
      sender: 'me',
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      videoUrl,
      duration,
    };
    setMessages([...messages, newMessage]);
    setShowVideoRecorder(false);
  };

  return (
    <>
      <div className="flex flex-col h-full bg-background">
        <div className="flex items-center gap-4 p-4 border-b bg-card">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="ArrowLeft" size={20} />
          </Button>
          
          <div className="flex items-center gap-3 flex-1 cursor-pointer">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="text-2xl">{contact.avatar}</AvatarFallback>
              </Avatar>
              {contact.status === 'online' && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium">{contact.name}</p>
              <p className="text-xs text-muted-foreground">
                {contact.status === 'online' ? 'онлайн' : `был(а) ${contact.lastSeen}`}
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCallType('audio')}
            className="text-primary"
          >
            <Icon name="Phone" size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCallType('video')}
            className="text-primary"
          >
            <Icon name="Video" size={20} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl p-3 ${
                  message.sender === 'me'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.type === 'text' && (
                  <p className="break-words">{message.text}</p>
                )}
                
                {message.type === 'voice' && message.audioUrl && (
                  <div className="flex items-center gap-2 min-w-[200px]">
                    <audio src={message.audioUrl} controls className="w-full" />
                  </div>
                )}

                {message.type === 'video' && message.videoUrl && (
                  <div className="rounded-lg overflow-hidden">
                    <video src={message.videoUrl} controls className="w-full max-w-sm" />
                  </div>
                )}

                <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t bg-card">
          <div className="flex items-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowVoiceRecorder(true)}
              className="flex-shrink-0"
            >
              <Icon name="Mic" size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowVideoRecorder(true)}
              className="flex-shrink-0"
            >
              <Icon name="VideoIcon" size={20} />
            </Button>

            <Input
              placeholder="Введите сообщение..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            
            <Button onClick={sendMessage} size="icon" className="flex-shrink-0">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {showVoiceRecorder && (
        <VoiceRecorder
          onRecorded={handleVoiceRecorded}
          onCancel={() => setShowVoiceRecorder(false)}
        />
      )}

      {showVideoRecorder && (
        <VideoRecorder
          onRecorded={handleVideoRecorded}
          onCancel={() => setShowVideoRecorder(false)}
        />
      )}

      {callType && (
        <CallWindow
          contact={contact}
          type={callType}
          onEnd={() => setCallType(null)}
        />
      )}
    </>
  );
};

export default ChatWindow;
