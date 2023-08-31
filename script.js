// /* =================
//   TESTS, LOOK AT THESE
//   Reading tests will always help you discover your requirements.
//   You can make this window bigger. 
//    ===================
// */

// const {
//   core: { test, expect, run },
//   prettify
// } = window.jestLite;

// /* =================
//   FIND ELEMENTS
//   These are all the elements we will look for.
//    ===================
// */
// const getHeader = document.querySelectorAll("header"),
//   getH1 = document.querySelectorAll("h1"),
//   getSiteHeader = document.querySelectorAll(".c-site-header"),
//   getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
//   getMain = document.querySelectorAll("main"),
//   getFooter = document.querySelectorAll("footer"),
//   getSiteFooter = document.querySelectorAll(".c-site-footer"),
//   getIFrame = document.querySelectorAll("iframe"),
//   getImage = document.querySelectorAll("img"),
//   getWords = document.body.innerText;

// /* =================
//    ASSERTIONS 
//    These are the things we check are true about your page.
//    Read and update your HTML to discover the requirements.
//    The tests will run every time you update your code.
//    ===================
// */
// test("There is at least one header element", () => {
//   expect(getHeader.length).toBeGreaterThanOrEqual(1);
// });
// test("There is at least one h1", () => {
//   expect(getH1.length).toBeGreaterThanOrEqual(1);
// });
// test("There is only one header element with the class c-site-header", () => {
//   expect(getSiteHeader.length).toBe(1);
// });
// test("There is a nav element with an aria-label of Main Site Links.", () => {
//   expect(getAria.length).toBeGreaterThanOrEqual(1);
// });
// test("There is only one main element", () => {
//   expect(getMain.length).toBe(1);
// });
// test("There is at least one footer element", () => {
//   expect(getFooter.length).toBeGreaterThanOrEqual(1);
// });
// test("There is only one footer element with the class c-site-footer", () => {
//   expect(getSiteFooter.length).toBe(1);
// });
// test("There is embedded video", () => {
//   expect(getIFrame.length).toBeGreaterThanOrEqual(1);
// });
// test("There is at least one image", () => {
//   expect(getImage.length).toBeGreaterThanOrEqual(1);
// });
// test("There are at least 500 words on the page", () => {
//   expect(getWords.length).toBeGreaterThanOrEqual(500);
// });

// const console = document.getElementById("tests");
// prettify.toHTML(run(), console);
document.getElementById('day mode').addEventListener('click', (event) => {
  let element_listsab = document.getElementById('listsab');
  element_listsab.style.backgroundColor = '#ffcc66';
  element_listsab.style.color = '#000000';

});

document.getElementById('night mode').addEventListener('click', (event) => {
  let element_listsab2 = document.getElementById('listsab');
  element_listsab2.style.backgroundColor = '#000000';
  element_listsab2.style.color = '#ffffff';

});
var rolls, dice, keep_playing_button;

// Describe this function...
function display_the_rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  let element_list2 = document.getElementById('list');
  rolls.forEach((rolls) => {
    let new_li = document.createElement('li');
    new_li.innerText = rolls;

    element_list2.appendChild(new_li);
  });
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
  keep_playing_button = rolls.reduce((a,b) => a+b, 0);
  if (keep_playing_button < 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'keep playing';
  } else if (keep_playing_button == 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'you won';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'you lost';
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


rolls = [1, 2, 3];
dice = [1, 2, 3, 4, 5, 6];
display_the_rolls();


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  display_the_rolls();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  rolls.pop();
  display_the_rolls();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  display_the_rolls();

});
var array, imageLength, item, imageCounter, imageIndex;

// Describe this function...
function createArrayimages() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  array = ['https://t.ly/BavJM', 'https://t.ly/nsKYn', 'https://t.ly/Z_sh_'];
}

// Describe this function...
function resetData() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  imageLength = 0;
  imageCounter = 0;
  imageIndex = 0;
}

// Describe this function...
function imageLength2() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  array.forEach((item) => {
    imageLength = (typeof imageLength === 'number' ? imageLength : 0) + 1;
  });
}

// Describe this function...
function getNextimage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (imageIndex >= imageLength) {
    imageIndex = 1;
  } else {
    imageIndex = (typeof imageIndex === 'number' ? imageIndex : 0) + 1;
  }
  displayImage();
}

// Describe this function...
function incrementCounter() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (imageCounter >= imageLength) {
    imageCounter = 1;
  } else {
    imageCounter = (typeof imageCounter === 'number' ? imageCounter : 0) + 1;
  }
}

// Describe this function...
function displayImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  array.forEach((item) => {
    incrementCounter();
    if (imageCounter == imageIndex) {
      let element_image = document.getElementById('image');
      element_image.setAttribute("src", item);
    }
  });
}

// Describe this function...
function getPreviousImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (imageIndex <= 1) {
    imageIndex = imageLength;
  } else {
    imageIndex = (typeof imageIndex === 'number' ? imageIndex : 0) + -1;
  }
  displayImage();
}


resetData();
createArrayimages();
imageLength2();
getNextimage();


document.getElementById('next').addEventListener('click', (event) => {
  getNextimage();

});

document.getElementById('previous').addEventListener('click', (event) => {
  getPreviousImage();

});
var names;

// Describe this function...
function listOfNames() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  names = [];
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


listOfNames();


document.getElementById('add_name').addEventListener('click', (event) => {
  if (document.getElementById('namegame').value != '') {
    let element_listgame = document.getElementById('listgame');
    names.unshift(document.getElementById('namegame').value);
  }

});

document.getElementById('add_raname').addEventListener('click', (event) => {
  if (!!names.length) {
    let element_randlist = document.getElementById('randlist');
    element_randlist.replaceChildren();
    let new_li = document.createElement('li');
    new_li.innerText = randomMember(names);

    element_randlist.appendChild(new_li);
  }

});