import './Startup.css';
import { useEffect } from 'react';
import { StartupError } from './StartupError';
import { Typography } from '@/components/Typography/Typography';
import { useStartupStore } from '@/stores/useStartupStore';
import { Overlay } from '../Overlay/Overlay';
import { Layout } from '../Layout/Layout';
import { StartupItem } from './StartupItem';

const { loadData } = useStartupStore.getState();

export function Startup() {
  const steps = useStartupStore((state) => state.steps);
  const failureInfo = useStartupStore((state) => state.failureInfo);

  useEffect(() => {
    loadData();
  }, []);

  if (failureInfo) {
    return <StartupError />;
  }

  return (
    <Overlay>
      <Layout>
        <Typography textKey="startup.header" as="div" className="is-center" />
        <Typography textKey="startup.description" as="div" />
        {steps.map((step) => (
          <StartupItem key={step.id} step={step} />
        ))}
      </Layout>
    </Overlay>
  );
}
