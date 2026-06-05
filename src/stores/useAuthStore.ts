import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  errorTextKey: string | null;
  authenticate(password: string): Promise<void>;
};

const AUTH_STORAGE_KEY = 'launchpad-auth';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true',
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
      window.localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    } catch {
      set({ errorTextKey: 'authGate.errorUnknown' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
