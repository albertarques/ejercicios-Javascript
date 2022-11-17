const createElementAndContent = (
  idContainer,
  tagElement,
  text,
  func,
  array
) => {
  const parentContainer = document.getElementById(idContainer);
  const container = document.createElement(tagElement);

  const arrayLength = array.length;
  const content = document.createTextNode(text + func);
  container.appendChild(content);

  parentContainer.appendChild(container);
};

export { createElementAndContent };
