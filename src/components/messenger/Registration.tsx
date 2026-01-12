import { useState } from 'react';
import PhoneStep from './registration/PhoneStep';
import CodeStep from './registration/CodeStep';
import AvatarStep from './registration/AvatarStep';
import UsernameStep from './registration/UsernameStep';
import LoginStep from './registration/LoginStep';

interface RegistrationProps {
  onComplete: () => void;
}

const Registration = ({ onComplete }: RegistrationProps) => {
  const [step, setStep] = useState<'phone' | 'code' | 'avatar' | 'username' | 'login'>('phone');
  const [registrationData, setRegistrationData] = useState({
    phone: '',
    code: '',
    avatar: '',
    nickname: '',
    username: '',
  });

  const updateData = (key: string, value: string) => {
    setRegistrationData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Lites</h1>
          <p className="text-muted-foreground">Современный мессенджер</p>
        </div>

        {step === 'phone' && (
          <PhoneStep
            value={registrationData.phone}
            onChange={(value) => updateData('phone', value)}
            onNext={() => setStep('code')}
            onLoginClick={() => setStep('login')}
          />
        )}

        {step === 'code' && (
          <CodeStep
            phone={registrationData.phone}
            value={registrationData.code}
            onChange={(value) => updateData('code', value)}
            onNext={() => setStep('avatar')}
            onBack={() => setStep('phone')}
          />
        )}

        {step === 'avatar' && (
          <AvatarStep
            value={registrationData.avatar}
            onChange={(value) => updateData('avatar', value)}
            onNext={() => setStep('username')}
            onBack={() => setStep('code')}
          />
        )}

        {step === 'username' && (
          <UsernameStep
            nickname={registrationData.nickname}
            username={registrationData.username}
            onNicknameChange={(value) => updateData('nickname', value)}
            onUsernameChange={(value) => updateData('username', value)}
            onNext={onComplete}
            onBack={() => setStep('avatar')}
          />
        )}

        {step === 'login' && (
          <LoginStep
            onNext={onComplete}
            onBack={() => setStep('phone')}
          />
        )}
      </div>
    </div>
  );
};

export default Registration;
