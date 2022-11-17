const createListAndAddElementsFromArray = (idContainer, list) => {
  const parentContainer = document.getElementById(idContainer);
  const listContainer = document.createElement("ul");

  for (const element of list) {
    const container = document.createElement("li");
    const content = document.createTextNode(element);
    container.appendChild(content);
    listContainer.appendChild(container);
  }
  parentContainer.appendChild(listContainer);
};

export { createListAndAddElementsFromArray };
