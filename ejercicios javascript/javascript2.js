let nombres = ["andrés", "fátima", "carmelo", "pol"];

function arrayUppercase(array) {
  let arrayLength = array.length;
  while (arrayLength <= array) {
    for (element of array) {
      let initial = element.charAt(0).toUpperCase();
      let char = element[0];
      let newElement = element.replace(char, initial);
      array.push(newElement);
      console.log(arrayLength);
      arrayLength = arrayLength - 1;
      array.shift();
    }
  }
}
arrayUppercase(nombres);
