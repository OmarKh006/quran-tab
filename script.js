import * as utils from "./utils.js";

const labels = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");

labels.forEach(utils.labalClicked);

utils.observeElements(sectionElements);
