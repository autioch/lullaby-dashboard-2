import AppLoader from "../AppLoader/AppLoader";
import Clock from "../Clock/Clock";
import VideoEmbed from "../VideoEmbed/VideoEmbed";
import TodoList from "../TodoList/TodoList";
import ListSelector from "../ListSelector/ListSelector";
import DebugOverlay from "../DebugOverlay/DebugOverlay";
import "./App.css";
import { useDashboardStore } from "../../stores/useDashboardStore";

function AppContent() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const resetState = useDashboardStore((state) => state.resetState);

  const selectedList = lists[selectedIndex] ?? null;
  const backgroundStyle = selectedList?.bgColor
    ? { backgroundColor: selectedList.bgColor }
    : undefined;

  return (
    <>
      <article className="app" style={backgroundStyle}>
        <section className="app__content">
          {selectedList ? (
            <TodoList list={selectedList} />
          ) : (
            <div className="app__no-list">No list selected</div>
          )}
        </section>

        <div className="app__sidebar">
          <figure className="app__video">
            <VideoEmbed videoUrl={selectedList?.youtubeUrl} />
          </figure>

          <section className="app__clock">
            <Clock />
          </section>

          <section className="app__selector">
            <ListSelector />
            <button
              type="button"
              className="app__reset-button"
              onClick={resetState}
            >
              Reset
            </button>
          </section>
        </div>
      </article>

      <DebugOverlay />
    </>
  );
}

export default function App() {
  return (
    <AppLoader>
      <AppContent />
    </AppLoader>
  );
}
