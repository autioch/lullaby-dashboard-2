import { Dashboard } from '@/components/Dashboard/Dashboard';
import { Startup } from '@/components/Startup/Startup';
import { AuthGate } from '@/components/AuthGate/AuthGate';
import { useAuthStore } from '@/stores/useAuthStore';
import { useStartupStore } from '@/stores/useStartupStore';

export function Shell() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isReady = useStartupStore((state) => state.isReady);

  if (!isAuthenticated) {
    return <AuthGate />;
  }

  if (!isReady) {
    return <Startup />;
  }

  return <Dashboard />;
}
