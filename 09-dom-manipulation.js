//task 1
document.getElementById("heading1").innerHTML = "hello Aditya";
//task -2
document.querySelector('.heading').style.backgroundColor = "red"

//task - 3
const fragment = document.createDocumentFragment();
const p = fragment
    .appendChild(document.createElement("div"))
    .appendChild(document.createElement('p'))
    p.textContent = "hello Aditya this is a navbar";
document.body.appendChild(fragment);

//task - 4
const li = document.createElement('li');
document.getElementById("navbar").appendChild(li) ;

//task - 5
document.querySelector('#navbar').children[0].remove()

//task - 6
document.querySelector('#navbar').lastChild.remove();

//task - 7
document.querySelector('.heading').children[0].setAttribute('src', 'https://www.pexels.com/photo/motorboat-splashing-and-making-wake-in-sea-10147934/') 


//task - 9
changetext = () => {
    p.textContent = "hello Aditya";
}
changeBorderColour = () => {
    document.querySelector('#btn').style.border = "2px solid red"
}