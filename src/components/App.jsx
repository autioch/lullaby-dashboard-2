import { useState } from 'react';
import Clock from './Clock.jsx';
import VideoEmbed from './VideoEmbed.jsx';
import TodoList from './TodoList.jsx';
import ListSelector from './ListSelector.jsx';
import configuration from '../data/configuration.json';

const lists = configuration.savedLists ?? [];

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [checkedKeys, setCheckedKeys] = useState({});

  const selectedList = lists[selectedIndex] ?? null;
  const backgroundStyle = selectedList?.backgroundListColor
    ? { backgroundColor: selectedList.backgroundListColor }
    : undefined;

  function handleToggle(key) {
    setCheckedKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function handleSelectIndex(index) {
    setSelectedIndex(index);
  }

  return (
    <article
      className="flex flex-col-reverse items-center justify-end w-full min-h-screen p-[2vw] text-white font-['Roboto',sans-serif] md:flex-row md:items-start md:justify-between"
      style={backgroundStyle}
    >
      <section className="md:flex md:flex-1">
        {selectedList ? (
          <TodoList list={selectedList} checkedKeys={checkedKeys} onToggle={handleToggle} />
        ) : (
          <div className="text-[#f1f1f1] bg-[#212121]">No list selected</div>
        )}
      </section>

      <div className="flex flex-col items-center md:w-[40%] md:pl-[2vw] md:h-[50vh]">
        <figure className="relative w-full pb-[56.25%]">
          <VideoEmbed videoUrl={selectedList?.embeddedYoutubeVideo} />
        </figure>

        <section className="p-[5vw] font-bold text-[15vw] md:text-[10vw]">
          <Clock />
        </section>

        <section className="flex flex-col justify-center items-center mb-[3vh]">
          <ListSelector lists={lists} selectedIndex={selectedIndex} onChange={handleSelectIndex} />
        </section>
      </div>
    </article>
  );
}
