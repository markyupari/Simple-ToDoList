function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element. 
const myInput = document.getElementById('myInput');
  //Step 2: Create a text node containing that value
const inputText = myInput.value;
  //Step 3: Create a new li element and append the text node to it
let li = document.createElement('li');
li.append(inputText);
  //Step 4: Append the li element to the existing myTODOs element. 
const myTODOs = document.getElementById('myTODOs');
myTODOs.appendChild(li);
}
