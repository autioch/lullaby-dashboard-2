import { useState } from 'react';
import Clock from './Clock.jsx';
import VideoEmbed from './VideoEmbed.jsx';
import TodoList from './TodoList.jsx';
import ListSelector from './ListSelector.jsx';
import configuration from '../app/configuration.json';

const lists = configuration.savedLists ?? [];

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [checkedKeys, setCheckedKeys] = useState({});

  const selectedList = lists[selectedIndex] ?? null;
  const backgroundStyle = selectedList?.backgroundListColor
    ? { backgroundColor: selectedList.backgroundListColor }
    : null;

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
    <article className="container" style={backgroundStyle}>
      <section className="list-container">
        {selectedList ? (
          <TodoList list={selectedList} checkedKeys={checkedKeys} onToggle={handleToggle} />
        ) : (
          <div className="error">No list selected</div>
        )}
      </section>

      <div>
        <figure>
          <VideoEmbed videoUrl={selectedList?.embeddedYoutubeVideo} />
        </figure>

        <section className="clock">
          <Clock />
        </section>

        <section className="select">
          <ListSelector lists={lists} selectedIndex={selectedIndex} onChange={handleSelectIndex} />
        </section>
      </div>
    </article>
  );
}
