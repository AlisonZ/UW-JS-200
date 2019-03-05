$(document).ready(function() {

// If an li element is clicked, toggle the class "done" on the <li>
$('li').on('click', function(e) {
  // not quite clear on why jQuery around the "this"
  // is it because $('li') returns a jQuery object, so need to use jQuery to get at the 'this' in the object?
  $(this).toggleClass('done');
});

// If a delete link is clicked, delete the li element / remove from the DOM
$('.delete').on('click', function(e) {
  $(this).parent().remove();
});


// If a "Move to..."" link is clicked, it should move the item to the correct
// list.  Should also update the working (i.e. from Move to Later to Move to Today)
// and should update the class for that link.
// Should *NOT* change the done class on the <li>
$('.move').on('click', function(e) {
  const $li = $(this).parent();

  if ($(this).hasClass('toLater')) {
    $(this).removeClass('toLater');
    $(this).addClass('toToday');
    $li.remove();
    $('.later-list').append($li);

  } else if ($(this).hasClass('toToday')) {
    $(this).removeClass('toToday');
    $(this).addClass('toLater');
    $li.remove();
    $('.today-list').append($li);
  }
});


// If an 'Add' link is clicked, adds the item as a new list item in correct list
// addListItem function has been started to help you get going!
// Make sure to add an event listener to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const text = $(this).parent().find('input').val();

  // Finish function here

}
//   Add this as a listener to the two Add links
});
