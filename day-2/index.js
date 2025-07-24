// add new input
// cross listitem of list when clicked
let input = document.querySelector('#myInput');
let myUl = document.querySelector('#myUl');

let addButton = document.querySelector('.addButton');

addButton.addEventListener('click', function () {
    let x = input.value;
    input.value = '';



    if (x.trim().length == 0) {
        alert("dont be dumb");
        return;
    }

    console.log("addddd" + x);

    //
    let myItem = document.createElement("li");
    myItem.innerText = x;
    addStrikeThroughListener(myItem);
    myUl.appendChild(myItem);
});

function addStrikeThroughListener(element) {
    element.addEventListener("click", function () {
        element.classList.toggle("checked")
    });
}

const allItems = document.querySelectorAll("ul li");

for (const item of allItems) {
    addStrikeThroughListener(item);
}
