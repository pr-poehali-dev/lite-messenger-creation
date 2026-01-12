import { useState } from 'react';
import Registration from '@/components/messenger/Registration';
import MessengerApp from '@/components/messenger/MessengerApp';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {!isAuthenticated ? (
        <Registration onComplete={() => setIsAuthenticated(true)} />
      ) : (
        <MessengerApp />
      )}
    </div>
  );
};

export default Index;
