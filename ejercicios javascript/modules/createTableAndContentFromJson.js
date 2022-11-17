const createTableAndContentFromJson = (idContainer, array) => {
  const parentContainer = document.getElementById(idContainer);

  /* Table structure */
  const table = document.createElement("table");

  const createAndAddTitlesWithoutTitlesFields = () => {
    const tableRowTitles = document.createElement("tr");
    let counter = 0;
    for (const element of array) {
      for (const property in element) {
        const tableCell = document.createElement("td");
        const titleContent = document.createTextNode(
          property.substring(0, 1).toUpperCase() + property.substring(1)
        );
        tableRowTitles.appendChild(tableCell);
        tableCell.appendChild(titleContent);
        counter++;
      }
      if (counter !== 0) {
        break;
      }
    }
    table.appendChild(tableRowTitles);
  };

  const createAndAddContent = () => {
    for (const element of array) {
      const tableRow = document.createElement("tr");
      // const content = document.createTextNode();
      for (const e in element) {
        const tableCell = document.createElement("td");
        const content = document.createTextNode(element[e]);
        tableCell.appendChild(content);
        tableRow.appendChild(tableCell);
      }
      table.appendChild(tableRow);
    }
  };
  createAndAddTitlesWithoutTitlesFields();
  createAndAddContent();
  parentContainer.appendChild(table);
};

export { createTableAndContentFromJson };
