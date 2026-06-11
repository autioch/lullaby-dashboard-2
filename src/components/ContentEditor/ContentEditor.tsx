import './ContentEditor.css';
import { useEffect } from 'react';
import { Typography } from '@/components/Typography/Typography';
import { useControlsStore } from '@/stores/useControlsStore';
import { useEditStore } from '@/stores/useEditStore';
import { Overlay } from '../Overlay/Overlay';
import { Panel } from '../Panel/Panel';
import { Layout } from '../Layout/Layout';
import { MissionsLevel } from './MissionsLevel';
import { MissionLevel } from './MissionLevel';
import { GroupLevel } from './GroupLevel';
import { ReauthPrompt } from './ReauthPrompt';

const { closeContentEditor } = useControlsStore.getState();

// Presentation-only editor shell: one drill-down level visible at a time.
// Levels are keyed by their selected id so per-entity draft state re-seeds
// when a different entity is opened. All logic lives in useEditStore.
export function ContentEditor() {
  const level = useEditStore((state) => state.level);
  const errorKey = useEditStore((state) => state.errorKey);
  const needsReauth = useEditStore((state) => state.needsReauth);
  const selectedMissionId = useEditStore((state) => state.selectedMissionId);
  const selectedGroupId = useEditStore((state) => state.selectedGroupId);

  useEffect(() => {
    useEditStore.getState().reset();

    // Escape / TV Back steps up a level, or closes the overlay at the root.
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return;
      }
      const state = useEditStore.getState();
      if (state.level === 'missions') {
        closeContentEditor();
      } else {
        state.back();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <Overlay className="c-content-editor">
      <Panel>
        <Layout className="c-content-editor__layout">
          {needsReauth ? (
            <ReauthPrompt />
          ) : errorKey ? (
            <Typography
              as="div"
              className="c-content-editor__error"
              textKey={errorKey}
            />
          ) : null}
          {level === 'missions' ? <MissionsLevel /> : null}
          {level === 'mission' ? (
            <MissionLevel key={selectedMissionId} />
          ) : null}
          {level === 'group' ? <GroupLevel key={selectedGroupId} /> : null}
        </Layout>
      </Panel>
    </Overlay>
  );
}
