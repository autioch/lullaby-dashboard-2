import { useAuthStore } from '@/stores/useAuthStore';
import { useState } from 'react';
import { Overlay } from '@/components/Overlay/Overlay';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import { Layout } from '../Layout/Layout';
import './AuthGate.css';

const { authenticate } = useAuthStore.getState();

export function AuthGate() {
  const isLoading = useAuthStore((state) => state.isLoading);
  const errorTextKey = useAuthStore((state) => state.errorTextKey);
  const [password, setPassword] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    authenticate(password);
  };

  return (
    <Overlay>
      <Layout>
        <Typography
          textKey="authGate.header"
          as="div"
          className="is-center"
        ></Typography>
        <Typography textKey="authGate.description" as="div"></Typography>
        <input
          className="c-auth-gate__input"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isLoading}
        />
        <Button
          onClick={handleSubmit}
          textKey={isLoading ? 'authGate.loading' : 'authGate.submitButton'}
          isLoading={isLoading}
        />
        <div className="c-auth-gate__error is-center">
          {errorTextKey ? <Typography textKey={errorTextKey} /> : null}
        </div>
      </Layout>
    </Overlay>
  );
}
