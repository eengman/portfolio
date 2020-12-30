
//let listItems = document.getElementById('items');
//console.log(listItems.innerText);

// listItems.innerText = 'What';
// listItems.style.color = 'red';



// GET ELEMENTS BY CLASS NAME // 
/*
    let items = document.getElementsByClassName('item');
    items[1].textContent = 'Hello 2';
    items[1].style.fontWeight = 'bold';
    items[1].style.backgroundColor = 'yellow';
    console.log(items);

    for(var i = 0; i < items.length; i++){
        items[i].style.backgroundColor = 'blue';
    }
*/

// GET ELEMENTS BY TAG NAME // 
/*
var li = document.getElementsByTagName('li');
li[1].style.backgroundColor = 'red';
*/

// QUERYSELECTOR //
let header = document.querySelector('header');
header.style.borderBottom = 'solid 20px #777';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";


// QUERY SELECTOR ALL //

let listItems = document.querySelectorAll('li');
console.log(listItems);

for(let i = 0; i < listItems.length; i++){
    listItems[i].style.borderBottom = 'solid 10px #777';
    listItems[i].style.borderLeft = 'solid 10px #888';
}



























/*
let numRooms = 16;

let rooms = document.getElementById('rooms');
rooms.textContent = numRooms;

let firstName;
let lastName;
let name;

let el = document.getElementById('greeting');
let msg = '<h1>' + document.title + '</h1>' + '<br>';
msg += '<h2> domain: ' + document.domain + '</h2>';
msg += '<h3> last modified: ' + document.lastModified + '</h3>';
el.innerHTML = msg;
*/
/*var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
    greeting = 'Good Evening';
}else if (hourNow > 12){

}else if (hourNow > 0){

}else{
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');*/