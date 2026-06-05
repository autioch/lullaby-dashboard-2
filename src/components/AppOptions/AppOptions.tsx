import './AppOptions.css';
import { Typography } from '@/components/Typography/Typography';
import { useDashboardStore } from '@/stores/useDashboardStore';
import { Overlay } from '../Overlay/Overlay';
import { Layout } from '../Layout/Layout';
import { useControlsStore } from '@/stores/useControlsStore';
import { Button } from '../Button/Button';

const { closeOptions } = useControlsStore.getState();
const { setLanguage, resetState } = useDashboardStore.getState();

export function AppOptions() {
  return (
    <Overlay>
      <Layout className="c-app-options is-center">
        <Typography textKey="appOptions.languageMenu" as="div" />
        <div className="c-app-options__box">
          <Button
            textKey="appOptions.polish"
            onClick={() => setLanguage('pl')}
          />
          <Button
            textKey="appOptions.english"
            onClick={() => setLanguage('en')}
          />
        </div>
        <Button textKey="appOptions.resetData" onClick={resetState} />
        <Button textKey="appOptions.close" onClick={closeOptions} />
      </Layout>
    </Overlay>
  );
}
