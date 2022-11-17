import { createFormAndAddFormFieldFromJson } from "./modules/createFormAndAddFormFieldFromJson.js";
import { createListAndAddElementsFromArray } from "./modules/createListAndAddElementsFromArray.js";
import { createElementAndContent } from "./modules/createElementAndContent.js";
import { createTableAndContentFromJson } from "./modules/createTableAndContentFromJson.js";

const nombres = [
  "Juan",
  "José",
  "Pablo",
  "Emma",
  "Paula",
  "Mireia",
  "Eva",
  "Andrés",
  "María",
  "Juanjo",
];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const formObject = [
  {
    label: "Nombre",
    type: "input",
  },
  {
    label: "Apellidos",
    type: "input",
  },
  {
    label: "Email",
    type: "input",
  },
];

let array = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    type: "",
    gender: "Female",
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    type: "Genetic experiment",
    gender: "Male",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 9,
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    type: "Superhuman (Ghost trains summoner)",
    gender: "Male",
  },
];

createListAndAddElementsFromArray("main", nombres);
createFormAndAddFormFieldFromJson("main", formObject);

const whatArrayLength = (array) => {
  return array.length;
};

createElementAndContent(
  "main",
  "p",
  "La cantidad de números es:",
  whatArrayLength(numeros),
  numeros
);

createTableAndContentFromJson("main", array);
