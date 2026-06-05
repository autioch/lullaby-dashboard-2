import './Dashboard.css';
import { Clock } from '@/components/Clock/Clock';
import { AppOptions } from '@/components/AppOptions/AppOptions';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { ObjectiveList } from '@/components/ObjectiveList/ObjectiveList';
import { VideoEmbed } from '@/components/VideoEmbed/VideoEmbed';
import { useMissionStore } from '@/stores/useMissionStore';
import { Button } from '../Button/Button';
import { useControlsStore } from '@/stores/useControlsStore';

const { openOptions } = useControlsStore.getState();

export function Dashboard() {
  const missionId = useMissionStore((state) => state.missionId);
  const isAppOptions = useControlsStore((state) => state.isAppOptions);

  return (
    <div className="c-dashboard">
      <div className="c-dashboard__content">
        <div className="c-dashboard__main">
          <ObjectiveList />
        </div>
        <div className="c-dashboard__aside">
          <VideoEmbed />
          <Clock />
          <Button
            onClick={openOptions}
            textKey="appOptions.open"
            variant="text"
          />
        </div>
        <div className="c-dashboard__footer">
          <ProgressBar />
        </div>
      </div>
      {isAppOptions || !missionId ? <AppOptions /> : null}
    </div>
  );
}
