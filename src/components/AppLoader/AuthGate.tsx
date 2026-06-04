import { type FormEvent, useEffect, useState } from 'react';
import PasswordForm from './PasswordForm';

const AUTH_STORAGE_KEY = 'lullaby-dashboard-auth';

type AuthGateProps = {
  onUnlocked: () => void;
};

export default function AuthGate({ onUnlocked }: AuthGateProps) {
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true') {
      onUnlocked();
    }
  }, [onUnlocked]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!password.trim()) {
      setErrorMessage('Please enter the password.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setErrorMessage(data.error ?? 'Incorrect password.');
        return;
      }

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      }

      setPassword('');
      onUnlocked();
    } catch {
      setErrorMessage('Unable to verify the password right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="loader">
      <div className="loader__panel loader__panel--compact">
        <h1 className="loader__heading">Access required</h1>
        <p className="loader__message">
          Enter the password to open the dashboard on this TV.
        </p>
        <PasswordForm
          password={password}
          errorMessage={errorMessage}
          isSubmitting={isSubmitting}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
