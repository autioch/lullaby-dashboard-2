import { useStartupStore } from "../../stores/useStartupStore";

export default function AppLoaderError() {
  const failureInfo = useStartupStore((state) => state.failureInfo);

  if (!failureInfo) {
    return null;
  }

  return (
    <div className="loader loader--error">
      <div className="loader__panel">
        <h1 className="loader__heading">Unable to load the dashboard</h1>
        <p className="loader__message">
          The application could not complete startup. Please refresh the page
          and try again.
        </p>
        <div className="loader__error">
          <strong>Error during:</strong> {failureInfo.step}
          <br />
          <strong>Message:</strong> {failureInfo.message}
        </div>
        <div className="loader__debug">
          <strong>Debug details</strong>
          <pre>
            {`step: ${failureInfo.step}
message: ${failureInfo.message}
stack:
${failureInfo.stack ?? "(no stack available)"}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
