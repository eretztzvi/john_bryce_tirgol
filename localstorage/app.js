function intialNames() {
  // get data from local atorage
  const namesFromLocalStorage = getDataFromLocalStorage("names");

  // if there are name in local storage - display them on screen
  if (namesFromLocalStorage) {
    // function that get names and display them in screen
    displayNames(namesFromLocalStorage);
  }
}

function displayNames(names) {
  // empty all html from element
  listOfNames.innerHTML = "";

  for (let i = 0; i < names.length; i++) {

    const li = document.createElement("li"); // create li element
    li.innerText = names[i]; // take the created li and put inside the name

    const button = document.createElement("button"); // create button element 
    button.innerText = "Delete name"; // insert text to button

    // add function to button
    button.onclick = function () {
      deleteName(names[i]);
    };

    li.append(button);

    listOfNames.append(li); // ol > please append the li
  }
}

// =======================================

function addName() {
  // get data from local atorage
  const namesFromLocalStorage = getDataFromLocalStorage("names");

  if (namesFromLocalStorage) {
    // if there are names key in local storage
    namesFromLocalStorage.push(fullname.value); // add name to names array
    saveDataToLocalStorage("names", namesFromLocalStorage); // save to local storage after stringify the names array
  } else {
    const names = [];
    names.push(fullname.value);
    saveDataToLocalStorage("names", names); // save to local storage after stringify the names array
  }

  displayNames(getDataFromLocalStorage("names"));

  fullname.value = "";
  fullname.focus();
}

// ============================================

function deleteName(fullname) {
  // get data from local atorage
  const namesFromLocalStorage = getDataFromLocalStorage("names");

  // find the index of the fullname inside the names array
  const findNameIndex = namesFromLocalStorage.findIndex((currentNameInLoop) => currentNameInLoop === fullname); // arrow functions

  // remove item from array
  namesFromLocalStorage.splice(findNameIndex, 1);

  // save updated array of names
  saveDataToLocalStorage("names", namesFromLocalStorage);

  // display updated array of names
  displayNames(getDataFromLocalStorage("names"));
}

// ============================================

// a function that gets data from local storage
function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// a function that stores data to local storage
function saveDataToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
