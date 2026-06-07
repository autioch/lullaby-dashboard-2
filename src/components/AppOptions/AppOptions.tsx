import './AppOptions.css';
import { Typography } from '@/components/Typography/Typography';
import { Overlay } from '../Overlay/Overlay';
import { Layout } from '../Layout/Layout';
import { useControlsStore } from '@/stores/useControlsStore';
import { Button } from '../Button/Button';
import { useLanguageStore } from '@/stores/useLanguageStore';
import { Panel } from '../Panel/Panel';

const { closeOptions } = useControlsStore.getState();
const { setLanguage } = useLanguageStore.getState();

export function AppOptions() {
  return (
    <Overlay>
      <Panel>
        <Layout>
          <Typography
            textKey="appOptions.languageMenu"
            as="div"
            size="large"
            className="is-center"
          />
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
      </Panel>
    </Overlay>
  );
}
