import { Typography } from '@/components/Typography/Typography';
import { useStartupStore } from '@/stores/useStartupStore';
import { Overlay } from '@/components/Overlay/Overlay';
import { Layout } from '@/components/Layout/Layout';

export function StartupError() {
  const failureInfo = useStartupStore((state) => state.failureInfo);

  if (!failureInfo) {
    return null;
  }

  return (
    <Overlay>
      <Layout>
        <Typography textKey="startup.errorHeader" as="div" />
        <div>
          <Typography textKey="startup.errorStep" />
          {failureInfo.step}
        </div>
        <div>
          <Typography textKey="startup.errorMessage" />
          {failureInfo.message}
        </div>
        <pre>
          {failureInfo.stack ?? <Typography textKey="startup.errorNoStack" />}
        </pre>
      </Layout>
    </Overlay>
  );
}
