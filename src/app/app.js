import logError from './logError';
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

  //Load youtube video
  loadVideo(configuration);

  //Load list options
  select(configuration);

  //Load landing page list
  showSelectedList();

  showTime();

  //Load list
  selectList.addEventListener('click', showSelectedList);
}
