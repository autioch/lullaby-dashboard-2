import { lsWrapper } from '@/utils/ls';
import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  errorTextKey: string | null;
};

type AuthMethods = {
  authenticate(password: string): Promise<void>;
};

const ls = lsWrapper<boolean>('auth');

// Dev-only escape hatch: set PUBLIC_SKIP_AUTH=true in .env to bypass the
// password gate. Off by default, so production still gates and the gate
// itself stays testable by toggling the flag off.
const skipAuth = import.meta.env.PUBLIC_SKIP_AUTH === 'true';

export const useAuthStore = create<AuthState & AuthMethods>((set) => ({
  isAuthenticated: skipAuth || (ls.load() ?? false),
  isLoading: false,
  errorTextKey: null,

  async authenticate(password) {
    if (!password.trim()) {
      set({ errorTextKey: 'authGate.errorEmptyPassword', isLoading: false });
      return;
    }

    set({ isLoading: true, errorTextKey: null });

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        set({ errorTextKey: 'authGate.errorInvalidPassword' });
        return;
      }
      set({ isAuthenticated: true });
      ls.save(true);
    } catch {
      set({ errorTextKey: 'authGate.errorUnknown' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
