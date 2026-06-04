import type { FormEvent } from 'react';

interface PasswordFormProps {
  password: string;
  errorMessage: string;
  isSubmitting: boolean;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function PasswordForm({
  password,
  errorMessage,
  isSubmitting,
  onPasswordChange,
  onSubmit,
}: PasswordFormProps) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <label className="auth-form__label" htmlFor="dashboard-password">
        Password
      </label>
      <input
        id="dashboard-password"
        className="auth-form__input"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => onPasswordChange(event.target.value)}
        disabled={isSubmitting}
      />
      {errorMessage ? <p className="auth-form__error">{errorMessage}</p> : null}
      <button
        className="auth-form__button"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Checking...' : 'Open dashboard'}
      </button>
    </form>
  );
}
