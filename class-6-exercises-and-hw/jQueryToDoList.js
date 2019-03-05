$(document).ready(function() {

// If an li element is clicked, toggle the class "done" on the <li>
const toggleDone = function(e) {
  // not quite clear on why jQuery around the "this"
  // is it because $('li') returns a jQuery object, so need to use jQuery to get at the 'this' in the object?
  $(this).parent().toggleClass('done');
}

//is there a way to chain jQuery arguments? like only target <span> that has a parent <li>?
$('span').on('click', toggleDone);


// If a delete link is clicked, delete the li element / remove from the DOM
const deleteListItem = function(e) {
  e.preventDefault();
    $(this).parent().remove();
}

$('.delete').on('click', deleteListItem);

// If a "Move to..."" link is clicked, it should move the item to the correct
// list.  Should also update the working (i.e. from Move to Later to Move to Today)
// and should update the class for that link.
// Should *NOT* change the done class on the <li>

const moveListItem = function(e) {
  const $li = $(this).parent();

  if ($(this).hasClass('toLater')) {
    $(this).removeClass('toLater');
    $(this).addClass('toToday');
    $(this).text('Move to Today')
    $('.later-list').append($li);

  } else if ($(this).hasClass('toToday')) {
    $(this).removeClass('toToday');
    $(this).addClass('toLater');
    $(this).text('Move to Later')
    $('.today-list').append($li);
  }
}

$('.move').on('click', moveListItem);


// If an 'Add' link is clicked, adds the item as a new list item in correct list
// addListItem function has been started to help you get going!
// Make sure to add an event listener to your new <li> (if needed)

const addListItem = function(e) {
  e.preventDefault();
  const text = $(this).parent().find('input').val();
  const $ulClass = $(this).parent().parent().hasClass('today') ? 'today-list' : 'later-list';
  // console.log('clsss', $ulClass);
  const $moveClass = $ulClass === 'today-list' ? 'toLater' : 'toToday';

  let $addedLi = $('<li>');
  $addedLi.text(text);
  $addedLi.addClass($ulClass);

  const $addItemName = $('<span>');
  $addItemName.text(text);

  let $addDeleteButton = $('<a>');
  $addDeleteButton.text('Delete');
  $addDeleteButton.addClass('delete');
  $addDeleteButton.on('click', deleteListItem);

  let $addMoveButton = $('<a>');
  let newText = $ulClass === 'later-list' ? 'Move to Today' : 'Move to Later';
  // console.log('newww', newText);
  $addMoveButton.text(newText);
  $addMoveButton.addClass('move');
  $addMoveButton.addClass($moveClass);
  $addMoveButton.on('click', moveListItem);

  $addedLi.append($addItemName);
  $addedLi.append($addDeleteButton);
  $addedLi.append($addMoveButton);




  // console.log('addedli', $addedLi);


  if ($ulClass === 'today-list') {
    $('.today-list').append($addedLi);
  } else if ($ulClass === 'later-list') {
    $('.later-list').parent().append($addedLi);
  }
  $(this).parent().find('input').val("");
}

//   Add this as a listener to the two Add links
$('.add-item').on('click', addListItem);
});
