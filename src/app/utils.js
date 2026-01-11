const container = document.querySelector('.container');
const video = document.querySelector('.video');
const selectList = document.querySelector('.select-list');


//Load youtube video
export function loadVideo(data) {
  video.setAttribute("src", data.embeddedYoutubeVideo + '&autoplay=1')
}

//Load lists' options

export function select(data) {
  data.savedLists.forEach((list, idx) => {
    const newElement = document.createElement("option");
    newElement.setAttribute("value", idx);
    newElement.textContent = list.label;

    selectList.appendChild(newElement);
  })

}

export function loadList(list) {
  const listContainer = document.querySelector('.list-container');

  //List background
  container.style.backgroundColor = list.backgroundListColor;

  if (list.toDos) {
    const listElements = document.createElement('ul');

    listElements.classList.add('list');

    list.toDos.forEach(element => {
      const newElement = document.createElement("li");

      newElement.style.color = element.color;
      newElement.classList.add("list-element");
      newElement.textContent = element.name;
      newElement.addEventListener("click", (event) => event.target.classList.toggle("checked"));

      listElements.appendChild(newElement);
    });

    listContainer.appendChild(listElements);
  }

  if (list.toDos2) {
    const listElements2 = document.createElement('ul');

    listElements2.classList.add('list');

    list.toDos2.forEach(element => {
      const newElement = document.createElement("li");

      newElement.style.color = element.color;
      newElement.classList.add("list-element");
      newElement.textContent = element.name;
      newElement.addEventListener("click", (event) => event.target.classList.toggle("checked"));

      listElements2.appendChild(newElement);
    });

    listContainer.appendChild(listElements2);
  }
}
