import { useState } from 'react';
import Sidebar from './app/Sidebar';
import ChatsView from './app/ChatsView';
import ContactsView from './app/ContactsView';
import SearchView from './app/SearchView';
import ProfileView from './app/ProfileView';
import SettingsView from './app/SettingsView';
import NotificationsView from './app/NotificationsView';
import PremiumView from './app/PremiumView';

type View = 'chats' | 'contacts' | 'search' | 'profile' | 'settings' | 'notifications' | 'premium';

const MessengerApp = () => {
  const [currentView, setCurrentView] = useState<View>('chats');

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 overflow-hidden">
        {currentView === 'chats' && <ChatsView />}
        {currentView === 'contacts' && <ContactsView />}
        {currentView === 'search' && <SearchView />}
        {currentView === 'profile' && <ProfileView onPremiumClick={() => setCurrentView('premium')} />}
        {currentView === 'settings' && <SettingsView />}
        {currentView === 'notifications' && <NotificationsView />}
        {currentView === 'premium' && <PremiumView />}
      </div>
    </div>
  );
};

export default MessengerApp;
