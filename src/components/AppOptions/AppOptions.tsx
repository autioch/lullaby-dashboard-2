import './AppOptions.css';
import { Typography } from '@/components/Typography/Typography';
import { Overlay } from '../Overlay/Overlay';
import { Layout } from '../Layout/Layout';
import { useControlsStore } from '@/stores/useControlsStore';
import { Button } from '../Button/Button';
import { useLanguageStore } from '@/stores/useLanguageStore';
import { useMissionStore } from '@/stores/useMissionStore';
import { useTimerStore } from '@/stores/useTimerStore';
import { Panel } from '../Panel/Panel';

const { closeOptions } = useControlsStore.getState();
const { setLanguage } = useLanguageStore.getState();
const { resetBest } = useTimerStore.getState();

export function AppOptions() {
  const missionId = useMissionStore((state) => state.missionId);
  const hasBest = useTimerStore((state) =>
    missionId ? state.bestByMission[missionId] !== undefined : false
  );

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
          {missionId && hasBest ? (
            <Button
              textKey="appOptions.resetBest"
              variant="danger"
              onClick={() => {
                if (confirm('Reset best time?')) {
                  resetBest(missionId);
                }
              }}
            />
          ) : null}
          <Typography
            textKey="appOptions.buildInfo"
            values={{ commit: __BUILD_COMMIT__, time: __BUILD_TIME__ }}
            as="div"
            size="small"
            className="is-center c-app-options__build"
          />
        </Layout>
      </Panel>
    </Overlay>
  );
}
