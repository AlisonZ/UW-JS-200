// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

const p = document.getElementsByTagName("p")[0];
const a1El = document.createElement('a');
a1El.setAttribute("id", "cta");
const a1Text = document.createTextNode('Buy Now!');
a1El.appendChild(a1Text);
document.body.appendChild(a1El);

// Access (read) the data-color attribute of the <img>,
// log to the console
const img = document.getElementsByTagName('img')[0];
const dataColor = img.getAttribute('data-color');
console.log(dataColor);



// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const list = document.getElementsByTagName('ul')[0];
const listItems = list.children;
const third = listItems[2];
third.setAttribute('class', 'highlight');


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
// const p = document.getElementsByTagName('p')[0];
p.remove();
