import { useState } from 'react';
import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { useAuthStore } from '@/stores/useAuthStore';
import { useEditStore } from '@/stores/useEditStore';

// Shown when a content write returned 401 (expired/missing session). Re-mints
// the session cookie via /api/auth in place and clears the flag on success —
// the editor and its drafts stay mounted, so the user can retry the save.
export function ReauthPrompt() {
  const isLoading = useAuthStore((state) => state.isLoading);
  const errorTextKey = useAuthStore((state) => state.errorTextKey);
  const [password, setPassword] = useState('');

  async function submit() {
    const ok = await useAuthStore.getState().authenticate(password);
    if (ok) {
      setPassword('');
      useEditStore.getState().clearReauth();
    }
  }

  return (
    <div className="c-content-editor__reauth" role="group">
      <Typography
        as="div"
        className="c-content-editor__error"
        textKey="contentEditor.errorSessionExpired"
      />
      <input
        className="c-content-editor__input"
        type="password"
        value={password}
        disabled={isLoading}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        textKey="contentEditor.reauthSubmit"
        onClick={() => void submit()}
        isLoading={isLoading}
      />
      {errorTextKey ? (
        <Typography
          as="div"
          className="c-content-editor__reauth-error"
          textKey={errorTextKey}
        />
      ) : null}
    </div>
  );
}
