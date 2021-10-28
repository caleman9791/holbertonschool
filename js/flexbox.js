class Item {
  constructor() {
    this.element = document.createElement("div");
    return this.element;
  }

}


let generator = document.querySelector(".generator");
generator.style.display = "flex";

let element_quantity = document.querySelector(".element_quantity");
let element = [];
// removeAllChildNodes(generator);

element_quantity.addEventListener("change", function(argument) {

  generateNodes(this.value);

});

element_quantity.addEventListener("keyup", function(argument) {

  generateNodes(this.value);

});


function generateNodes(count) {
  removeAllChildNodes(generator);
  element = [];
  if (count > 12) {
    count = 12;
  }
  for (var i = 0; i < count; i++) {
    element[i] = new Item();
    element[i].textContent = "xx";
    element[i].style.border = "1px solid black";
  }

  for (var i = 0; i < element.length; i++) {
    generator.appendChild(element[i]);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}