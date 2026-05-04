import { loadList, loadVideo, select } from "./utils";
import { showTime } from "./clock";
import configuration from './configuration.json';
const selectList = document.querySelector('.select-list');

window.addEventListener("DOMContentLoaded", startApp)

function startApp() {

  function showSelectedList() {
    const listIndex = selectList.options[selectList.selectedIndex].value;
    const list = configuration.savedLists[listIndex]

    loadList(list);
  }

  loadVideo(configuration);
  select(configuration);
  showSelectedList();
  showTime();

  selectList.addEventListener('click', showSelectedList);
}
