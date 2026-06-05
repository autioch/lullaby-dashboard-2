import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  authenticate(password: string): Promise<void>;
};

const AUTH_STORAGE_KEY = 'launchpad-auth';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true',
  isLoading: false,
  error: null,

  async authenticate(password) {
    if (!password.trim()) {
      set({ error: 'Please enter the password.', isLoading: false });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        set({ error: data.error ?? 'Incorrect password.' });
        return;
      }
      set({ isAuthenticated: true });
      window.localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    } catch {
      set({ error: 'Unable to verify the password right now.' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
