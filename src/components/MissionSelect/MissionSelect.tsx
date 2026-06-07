import { Typography } from '@/components/Typography/Typography';
import { useMissionStore } from '@/stores/useMissionStore';
import { Overlay } from '../Overlay/Overlay';
import { Layout } from '../Layout/Layout';
import { useControlsStore } from '@/stores/useControlsStore';
import { Button } from '../Button/Button';

const { closeMissionSelect } = useControlsStore.getState();
const { selectMission } = useMissionStore.getState();

export function MissionSelect() {
  const lists = useMissionStore((state) => state.lists);

  return (
    <Overlay>
      <Layout className="c-app-options">
        <Typography
          textKey="missionSelect.missionMenu"
          as="div"
          size="large"
          className="is-center"
        />
        {lists.map((list) => (
          <Button
            key={list.id}
            onClick={() => {
              selectMission(list.id);
              closeMissionSelect();
            }}
            textKey={list.label}
            raw
          />
        ))}
      </Layout>
    </Overlay>
  );
}
