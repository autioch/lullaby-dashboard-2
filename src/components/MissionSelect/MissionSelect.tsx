import { Typography } from '@/components/Typography/Typography';
import { useMissionStore } from '@/stores/useMissionStore';
import { Overlay } from '../Overlay/Overlay';
import { Layout } from '../Layout/Layout';
import { useControlsStore } from '@/stores/useControlsStore';

const { closeMissionSelect } = useControlsStore.getState();
const { selectMission } = useMissionStore.getState();

export function MissionSelect() {
  const lists = useMissionStore((state) => state.lists);

  return (
    <Overlay>
      <Layout className="c-app-options">
        <Typography textKey="missionSelect.missionMenu" as="div" size="large" />
        {lists.map((list) => (
          <div
            key={list.id}
            className="c-app-options__mission"
            onClick={() => {
              selectMission(list.id);
              closeMissionSelect();
            }}
          >
            {list.label}
          </div>
        ))}
      </Layout>
    </Overlay>
  );
}
