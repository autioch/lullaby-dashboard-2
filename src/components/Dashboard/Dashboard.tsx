import './Dashboard.css';
import { Clock } from '@/components/Clock/Clock';
import { AppOptions } from '@/components/AppOptions/AppOptions';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { ObjectiveList } from '@/components/ObjectiveList/ObjectiveList';
import { VideoEmbed } from '@/components/VideoEmbed/VideoEmbed';
import { useMissionStore } from '@/stores/useMissionStore';
import { useControlsStore } from '@/stores/useControlsStore';
import { Menu } from '../Menu/Menu';
import { MissionSelect } from '@/components/MissionSelect/MissionSelect';
import { ContentEditor } from '@/components/ContentEditor/ContentEditor';
import { CompletionCelebration } from '@/components/CompletionCelebration/CompletionCelebration';

export function Dashboard() {
  const missionId = useMissionStore((state) => state.missionId);
  const isAppOptions = useControlsStore((state) => state.isAppOptions);
  const isMissionSelect = useControlsStore((state) => state.isMissionSelect);
  const isContentEditor = useControlsStore((state) => state.isContentEditor);

  return (
    <div className="c-dashboard">
      <CompletionCelebration />
      <div className="c-dashboard__content">
        <div className="c-dashboard__main">
          <ObjectiveList />
        </div>
        <div className="c-dashboard__aside">
          <VideoEmbed />
          <Clock />
          <Menu />
        </div>
        <div className="c-dashboard__footer">
          <ProgressBar />
        </div>
      </div>
      {isAppOptions ? <AppOptions /> : null}
      {isMissionSelect || !missionId ? <MissionSelect /> : null}
      {isContentEditor ? <ContentEditor /> : null}
    </div>
  );
}
