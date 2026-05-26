import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import Clock from "./Clock";
import VideoEmbed from "./VideoEmbed";
import TodoList from "./TodoList";
import ListSelector from "./ListSelector";
import DebugOverlay from "./DebugOverlay";
import { useDashboardStore } from "../stores/useDashboardStore";
import { db } from "../firebase";

export default function App() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const setLists = useDashboardStore((state) => state.setLists);
  const hydrateState = useDashboardStore((state) => state.hydrateState);
  const resetState = useDashboardStore((state) => state.resetState);

  useEffect(() => {
    async function loadConfiguration() {
      const snapshot = await getDoc(doc(db, "dashboard", "configuration"));
      if (!snapshot.exists()) {
        throw new Error("Firebase configuration document not found");
      }

      const data = snapshot.data();
      if (!data || !Array.isArray(data.savedLists)) {
        throw new Error("Firebase configuration is missing savedLists");
      }

      setLists(data.savedLists);
      hydrateState();
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
