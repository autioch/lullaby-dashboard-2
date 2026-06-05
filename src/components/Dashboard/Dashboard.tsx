import './Dashboard.css';
import { Clock } from '@/components/Clock/Clock';
import { FocusTimerCard } from '@/components/FocusTimerCard/FocusTimerCard';
import { LanguageMenu } from '@/components/LanguageMenu/LanguageMenu';
import { ListSelector } from '@/components/ListSelector/ListSelector';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { TodoList } from '@/components/TodoList/TodoList';
import { Typography } from '@/components/Typography/Typography';
import { VideoEmbed } from '@/components/VideoEmbed/VideoEmbed';
import { useDashboardStore } from '@/stores/useDashboardStore';

const { resetState } = useDashboardStore.getState();

export function Dashboard() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);

  const selectedList = lists[selectedIndex] ?? null;
  const backgroundStyle = selectedList?.bgColor
    ? { backgroundColor: selectedList.bgColor }
    : undefined;

  return (
    <article className="app" style={backgroundStyle}>
      <TodoList />
      <div className="app__sidebar">
        <VideoEmbed />

        <div className="app__clock">
          <Clock />
        </div>

        <div className="app__selector">
          <ListSelector />
          <button
            type="button"
            className="app__reset-button"
            onClick={resetState}
          >
            <Typography textKey="app.reset" />
          </button>
        </div>

        <ProgressBar />

        <FocusTimerCard />
      </div>
      <LanguageMenu />
    </article>
  );
}
