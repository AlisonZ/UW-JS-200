let counter = 0;

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', function(e) {
  counter ++;
  console.log('This is the count increment', counter);
  document.getElementById('counter').innerHTML = counter;
});


decrementButton.addEventListener('click', function(e) {
  counter --;
  console.log('This is the count decrement', counter);
  document.getElementById('counter').innerHTML = counter;
});
