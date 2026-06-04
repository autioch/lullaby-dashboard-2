import Clock from "../Clock/Clock";
import ListSelector from "../ListSelector/ListSelector";
import ProgressBar from "../ProgressBar/ProgressBar";
import FocusTimerCard from "../FocusTimerCard/FocusTimerCard";
import VideoEmbed from "../VideoEmbed/VideoEmbed";
import Typography from "../Typography/Typography";
import { useDashboardStore } from "../../stores/useDashboardStore";
import { useMemo } from "react";

const { resetState } = useDashboardStore.getState();

export default function AppSidebar() {
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);
  const selectedList = useDashboardStore((state) => {
    const list = state.lists[state.selectedIndex];
    return list ?? null;
  });

  const totalItems = useMemo(
    () =>
      selectedList?.groups.reduce(
        (sum, group) => sum + (group.items?.length ?? 0),
        0,
      ) ?? 0,
    [selectedList],
  );
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

      <FocusTimerCard />
    </div>
  );
}
