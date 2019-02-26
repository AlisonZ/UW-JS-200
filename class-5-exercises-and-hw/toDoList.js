// add setToDone click handler for the actual icons

const todayList = document.getElementsByClassName('todayList')[0];
const laterList = document.getElementsByClassName('laterList')[0];

// If an li element is clicked, toggle the class "done" on the <li>
function setToDone() {
  console.log('in the set to done');
  if (this.className !== 'done') {
    this.setAttribute('class', 'done');

    const squareBox = this.previousElementSibling;
    this.parentNode.removeChild(squareBox);

    let span = document.createElement('span');
    let img = document.createElement('img');

    img.src = 'checked-checkbox.png';
    img.setAttribute('class', 'checkmark');

    span.appendChild(img);

    this.parentNode.insertBefore(span, this);

  } else {
    this.classList.remove('done');

    const checkmark = this.previousElementSibling;
    this.parentNode.removeChild(checkmark);

    let span = document.createElement('span');
    let img = document.createElement('img');

    img.src = 'unchecked-box.png';
    span.appendChild(img);

    this.parentNode.insertBefore(span, this);
  }
}

// If a delete link is clicked, delete the li element / remove from the DOM
function deleteItem() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

// If a "Move to..."" link is clicked, it should move the item to the correct
// list.  Should also update the working (i.e. from Move to Later to Move to Today)
// and should update the class for that link.
// Should *NOT* change the done class on the <li>
function moveItem() {
   console.log('move items function', this);
  const className = this.className;
  const listItem = this.parentNode;
  listItem.parentNode.removeChild(listItem);

  if (className === 'move toLater') {
    this.className = 'move toToday';
    this.innerText = 'Move to Today';
    laterList.appendChild(listItem);
  } else if (className === 'move toToday') {
    this.className='move toLater';
    this.innerText = 'Move to Later';
    todayList.appendChild(listItem);
  }
}


function handleDragStart() {
  console.log('drag start starting', this);
}

// If an 'Add' link is clicked, adds the item as a new list item in correct list
// addListItem function has been started to help you get going!
// Make sure to add an event listener to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();

  const list = this.parentNode.parentNode;
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  const ulList = list.getElementsByTagName('ul')[0];


  let newListItem = document.createElement('li');
  let newSpan = document.createElement('span');
  newSpan.addEventListener('click', setToDone);
  newSpan.innerText = text;


  let checkMarkSpan = document.createElement('span');
  let checkMarkBoxImg = document.createElement('img');
  checkMarkBoxImg.src = 'unchecked-box.png';
  checkMarkSpan.appendChild(checkMarkBoxImg);

  newListItem.insertBefore(checkMarkSpan, newListItem.parentNode)


  let moveBtn = document.createElement('a');
  moveBtn.addEventListener('click', moveItem);

  if (list.className === 'today') {
    moveBtn.className = "move toLater";
    moveBtn.innerText = "Move to Later";
  } else {
    moveBtn.className = "move toToday";
    moveBtn.innerText = "Move to Today";
  }


  let deleteBtn = document.createElement('a');
  deleteBtn.className = "delete";
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener('click', function(){
    let parentNode = newListItem.parentNode;
    parentNode.removeChild(newListItem);
  });

  newListItem.setAttribute('draggable', 'true');
  newListItem.addEventListener('dragstart', handleDragStart);

  newListItem.appendChild(newSpan);
  newListItem.appendChild(moveBtn);
  newListItem.appendChild(deleteBtn);
  ulList.appendChild(newListItem);

  const resetInput = document.getElementsByTagName('input');
  resetInput[0].value = '';
  resetInput[1].value = '';
}


//What's the benefit of doing event listeners over adding click handlers in the html?
//is it that by doing onClick={addListItem} in html means that you have to pass in this, which comes for free with addEventListener?
//should these be event listeners? wondering when to use those?
const addButtons = document.getElementsByClassName('add-item');
for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener('click', addListItem);
}

const spans = document.getElementsByTagName('span');
for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', setToDone);
}

const deleteBtns = document.getElementsByClassName('delete');
for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', deleteItem);
}

const moveBtns = document.getElementsByClassName('move');
for (var i = 0; i < moveBtns.length; i++) {
  moveBtns[i].addEventListener('click', moveItem);
}
