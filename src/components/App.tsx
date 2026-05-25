import { useEffect } from "react";
import Clock from "./Clock";
import VideoEmbed from "./VideoEmbed";
import TodoList from "./TodoList";
import ListSelector from "./ListSelector";
import DebugOverlay from "./DebugOverlay";
import { useDashboardStore } from "../stores/useDashboardStore";

export default function App() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const hydrateState = useDashboardStore((state) => state.hydrateState);

  useEffect(() => {
    hydrateState();
  }, [hydrateState]);

  const selectedList = lists[selectedIndex] ?? null;
  const backgroundStyle = selectedList?.backgroundListColor
    ? { backgroundColor: selectedList.backgroundListColor }
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
            <VideoEmbed videoUrl={selectedList?.embeddedYoutubeVideo} />
          </figure>

          <section className="app__clock">
            <Clock />
          </section>

          <section className="app__selector">
            <ListSelector />
          </section>
        </div>
      </article>

      <DebugOverlay />
    </>
  );
}
