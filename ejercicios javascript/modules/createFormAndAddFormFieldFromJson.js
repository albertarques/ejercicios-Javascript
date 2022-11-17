const createFormAndAddFormFieldFromJson = (idContainer, object) => {
  /* Where you would create the form? */
  const parentContainer = document.getElementById(idContainer);

  /* Create the form html element */
  const container = document.createElement("form");

  /* The formObject must contain an Array with all fields */
  for (const element of object) {
    const formLabel = document.createElement("label");
    formLabel.classList.add("label");
    const formElement = document.createElement(element.type);
    formElement.classList.add("field");
    const formLabelContent = document.createTextNode(element.label);

    /* All fields must be inside an Array */
    for (const field in element) {
      formLabel.appendChild(formLabelContent);
    }
    container.appendChild(formLabel);
    container.appendChild(formElement);
  }
  parentContainer.appendChild(container);
};

export { createFormAndAddFormFieldFromJson };
