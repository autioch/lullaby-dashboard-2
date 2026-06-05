import './Dashboard.css';
import { Clock } from '@/components/Clock/Clock';
import { AppOptions } from '@/components/AppOptions/AppOptions';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { ObjectiveList } from '@/components/ObjectiveList/ObjectiveList';
import { VideoEmbed } from '@/components/VideoEmbed/VideoEmbed';
import { useDashboardStore } from '@/stores/useDashboardStore';
import { Button } from '../Button/Button';
import { useControlsStore } from '@/stores/useControlsStore';

const { openOptions } = useControlsStore.getState();

export function Dashboard() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
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
        </div>
        <div className="c-dashboard__footer">
          <ProgressBar />
          <Button onClick={openOptions} textKey="appOptions.open" />
        </div>
      </div>
      {isAppOptions || selectedIndex === -1 ? <AppOptions /> : null}
    </div>
  );
}
