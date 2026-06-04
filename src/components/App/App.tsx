import { useState } from "react";
import AppLoader from "../AppLoader/AppLoader";
import Clock from "../Clock/Clock";
import VideoEmbed from "../VideoEmbed/VideoEmbed";
import TodoList from "../TodoList/TodoList";
import ListSelector from "../ListSelector/ListSelector";
import ProgressBar from "../ProgressBar/ProgressBar";
import "../ProgressBar/ProgressBar.css";
import "./App.css";
import { useDashboardStore } from "../../stores/useDashboardStore";
import Typography from "../Typography/Typography";

const { resetState } = useDashboardStore.getState();

function AppContent() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);
  const setLanguage = useDashboardStore((state) => state.setLanguage);

  const selectedList = lists[selectedIndex] ?? null;
  const backgroundStyle = selectedList?.bgColor
    ? { backgroundColor: selectedList.bgColor }
    : undefined;

  const totalItems =
    selectedList?.groups.reduce(
      (sum, group) => sum + (group.items?.length ?? 0),
      0,
    ) ?? 0;

  const completedItems = selectedList
    ? selectedList.groups.reduce((sum, group) => {
        return (
          sum +
          group.items.reduce((groupSum, item) => {
            const key = `${selectedList.id}-${group.id}-${item.id}`;
            return groupSum + (checkedKeys[key] ? 1 : 0);
          }, 0)
        );
      }, 0)
    : 0;

  return (
    <article className="app" style={backgroundStyle}>
      <section className="app__content">
        {selectedList ? (
          <TodoList list={selectedList} />
        ) : (
          <div className="app__no-list">
            <Typography textKey="app.noLists" />
          </div>
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
            <Typography textKey="app.reset" />
          </button>
        </section>
        <ProgressBar completed={completedItems} total={totalItems} />
      </div>

      <div className="app__options-wrap">
        <button
          type="button"
          className="app__options-button"
          onClick={() => setIsOptionsOpen((prev) => !prev)}
          aria-expanded={isOptionsOpen}
          aria-label="Options"
        >
          ⚙
        </button>

        {isOptionsOpen && (
          <div className="app__options-menu" role="menu" aria-label="Language">
            <button
              type="button"
              className="app__options-menu-button"
              onClick={() => {
                setLanguage("en");
                setIsOptionsOpen(false);
              }}
            >
              <Typography textKey="app.english" />
            </button>
            <button
              type="button"
              className="app__options-menu-button"
              onClick={() => {
                setLanguage("pl");
                setIsOptionsOpen(false);
              }}
            >
              <Typography textKey="app.polish" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <AppLoader>
      <AppContent />
    </AppLoader>
  );
}
