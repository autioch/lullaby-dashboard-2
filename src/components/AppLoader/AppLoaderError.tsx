import Typography from '@/components/Typography/Typography';
import { useStartupStore } from '@/stores/useStartupStore';

export default function AppLoaderError() {
  const failureInfo = useStartupStore((state) => state.failureInfo);

  if (!failureInfo) {
    return null;
  }

  return (
    <div className="loader loader--error">
      <div className="loader__panel">
        <h1 className="loader__heading">
          <Typography textKey="loader.errorHeading" size="large" />
        </h1>
        <p className="loader__message">
          <Typography textKey="loader.errorMessage" />
        </p>
        <div className="loader__error">
          <strong>Error during:</strong> {failureInfo.step}
          <br />
          <strong>Message:</strong> {failureInfo.message}
        </div>
        <div className="loader__debug">
          <strong>
            <Typography textKey="loader.debugHeading" />
          </strong>
          <pre>
            {`step: ${failureInfo.step}
message: ${failureInfo.message}
stack:
${failureInfo.stack ?? '(no stack available)'}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
