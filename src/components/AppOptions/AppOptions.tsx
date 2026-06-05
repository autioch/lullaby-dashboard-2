import './AppOptions.css';
import { Typography } from '@/components/Typography/Typography';
import { useMissionStore } from '@/stores/useMissionStore';
import { Overlay } from '../Overlay/Overlay';
import { Layout } from '../Layout/Layout';
import { useControlsStore } from '@/stores/useControlsStore';
import { Button } from '../Button/Button';
import { useLanguageStore } from '@/stores/useLanguageStore';
import { useTimerStore } from '@/stores/useTimerStore';

const { closeOptions } = useControlsStore.getState();
const { resetState, selectMission } = useMissionStore.getState();
const { setLanguage } = useLanguageStore.getState();
const { resetTimerState } = useTimerStore.getState();

export function AppOptions() {
  const lists = useMissionStore((state) => state.lists);

  return (
    <Overlay>
      <Layout className="c-app-options is-center">
        <Typography
          textKey="appOptions.missionMenu"
          as="div"
          className="c-app-options__header"
        />
        <div className="c-app-options__box">
          {lists.map((list) => (
            <div
              className="c-app-options__mission"
              onClick={() => {
                selectMission(list.id);
                closeOptions();
              }}
            >
              {list.label}
            </div>
          ))}
        </div>
        <Typography
          textKey="appOptions.languageMenu"
          as="div"
          className="c-app-options__header"
        />
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
        <Typography
          textKey="appOptions.options"
          as="div"
          className="c-app-options__header"
        />

        <Button
          textKey="appOptions.resetData"
          onClick={() => {
            resetState();
            resetTimerState();
          }}
        />
        <Button textKey="appOptions.close" onClick={closeOptions} />
      </Layout>
    </Overlay>
  );
}
