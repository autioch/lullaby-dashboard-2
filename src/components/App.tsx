import { useEffect } from "react";
import Clock from "./Clock";
import VideoEmbed from "./VideoEmbed";
import TodoList from "./TodoList";
import ListSelector from "./ListSelector";
import DebugOverlay from "./DebugOverlay";
import { useDashboardStore } from "../stores/useDashboardStore";
import type { Configuration } from "../types";

export default function App() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const setLists = useDashboardStore((state) => state.setLists);
  const hydrateState = useDashboardStore((state) => state.hydrateState);
  const resetState = useDashboardStore((state) => state.resetState);

  useEffect(() => {
    async function loadConfiguration() {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}/configuration.json`,
        );
        if (!response.ok) {
          throw new Error(
            `Failed to load configuration: ${response.status} ${response.statusText}`,
          );
        }

        const config = (await response.json()) as Configuration;
        setLists(config.savedLists);
        hydrateState();
      } catch (error) {
        console.error("Error loading dashboard configuration:", error);
      }
    }

    loadConfiguration();
  }, [hydrateState, setLists]);

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
              className="mt-4 px-4 py-2 rounded border border-white/20 bg-black/50 text-white hover:bg-white hover:text-black transition"
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
