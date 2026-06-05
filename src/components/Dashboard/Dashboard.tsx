import './Dashboard.css';
import { Clock } from '@/components/Clock/Clock';
// import { FocusTimerCard } from '@/components/FocusTimerCard/FocusTimerCard';
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
  const lists = useDashboardStore((state) => state.lists);
  const isAppOptions = useControlsStore((state) => state.isAppOptions);

  const selectedList = lists[selectedIndex] ?? null;
  const backgroundStyle = selectedList?.bgColor
    ? { backgroundColor: selectedList.bgColor }
    : undefined;

  return (
    <article className="app" style={backgroundStyle}>
      <ObjectiveList />
      <div className="app__sidebar">
        <VideoEmbed />

        <div className="app__clock">
          <Clock />
        </div>

        <ProgressBar />

        {/* <FocusTimerCard /> */}
      </div>
      <Button onClick={openOptions} textKey="appOptions.open" />
      {isAppOptions || selectedIndex === -1 ? <AppOptions /> : null}
    </article>
  );
}
