import { useMemo } from "react";
import AppLoader from "../AppLoader/AppLoader";
import TodoList from "../TodoList/TodoList";
import "../ProgressBar/ProgressBar.css";
import "./App.css";
import { useDashboardStore } from "../../stores/useDashboardStore";
import Typography from "../Typography/Typography";
import AppSidebar from "../AppSidebar/AppSidebar";
import CelebrationLayer from "../CelebrationLayer/CelebrationLayer";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

function AppContent() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);

  const selectedList = lists[selectedIndex] ?? null;
  const backgroundStyle = selectedList?.bgColor
    ? { backgroundColor: selectedList.bgColor }
    : undefined;

  return (
    <article className="app" style={backgroundStyle}>
      <TodoList />
      <AppSidebar />
      <CelebrationLayer />
      <LanguageMenu />
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
