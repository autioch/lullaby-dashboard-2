import './AppOptions.css';
import { Typography } from '@/components/Typography/Typography';
import { Overlay } from '../Overlay/Overlay';
import { Layout } from '../Layout/Layout';
import { useControlsStore } from '@/stores/useControlsStore';
import { Button } from '../Button/Button';
import { useLanguageStore } from '@/stores/useLanguageStore';

const { closeOptions } = useControlsStore.getState();
const { setLanguage } = useLanguageStore.getState();

export function AppOptions() {
  return (
    <Overlay>
      <Layout className="c-app-options is-center">
        <Typography textKey="appOptions.languageMenu" as="div" size="large" />
        <Button
          textKey="appOptions.polish"
          onClick={() => {
            setLanguage('pl');
            closeOptions();
          }}
        />
        <Button
          textKey="appOptions.english"
          onClick={() => {
            setLanguage('en');
            closeOptions();
          }}
        />
      </Layout>
    </Overlay>
  );
}
