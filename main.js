console.log('this is Javascript on the page')

let mainHeader = document.querySelector("h1")

console.log(mainHeader)

mainHeader.textContent = 'josh'
mainHeader.setAttribute("style", "color:red; border: 1px solid blue;");


document.body.setAttribute("style", "background-color: green;");

let myParagraph = document.createElement('p')
myParagraph.textContent = 'i am a giagantic paragraph'

let myDiv = document.createElement('div')
myDiv.appendChild(myParagraph)

console.log(myDiv.textContent)
//myDiv.textContent = 'this is a div'

document.body.appendChild(myDiv)

let myPic = document.createElement('img')

myPic.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg')

document.body.appendChild(myPic)