import { useAuthStore } from '@/stores/useAuthStore';
import { useState } from 'react';

const { authenticate } = useAuthStore.getState();

export function AuthGate() {
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  const [password, setPassword] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    authenticate(password);
  };

  return (
    <div className="loader">
      <div className="loader__panel loader__panel--compact">
        <h1 className="loader__heading">Access required</h1>
        <p className="loader__message">
          Enter the password to open the dashboard on this TV.
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-form__label" htmlFor="dashboard-password">
            Password
          </label>
          <input
            id="dashboard-password"
            className="auth-form__input"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={isLoading}
          />
          {error ? <p className="auth-form__error">{error}</p> : null}
          <button
            className="auth-form__button"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Checking...' : 'Open dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
