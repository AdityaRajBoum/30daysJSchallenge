// task - 1

changetext = ( )=> {
    document.getElementById("signIn").textContent = "WELCOME! you have successfully signed in"
}

//task - 2
changevisibility = ()=>{
    const image = document.querySelector("#image")
    if(image.style.visibility == "visible"){
        // console.log(`visibility changed to hidden`)
       return image.style.visibility = "hidden"

    }
    // console.log(`visibility changed to visible`)
        return image.style.visibility = "visible"
    
}

//task - 3
changeBgColor = ()=>{
    document.querySelector("#navbar").style.backgroundColor = "lavender"
}

//task - 4
resetBgColor = ()=>{
    document.querySelector("#navbar").style.backgroundColor = "white"
}

//task - 5
   document.querySelector("#input").addEventListener('keydown', (event) => {
    console.log(`key pressed is ${event.key}`)
   })

//task - 6
recordkey = ()=>{
    document.querySelector("#input").addEventListener('keyup', (event) => { 
       console.log(event.target.value)
    }) 
}

//task - 7
document.querySelector("#submit").addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.value)
})

//task - 8
let selectElement = document.getElementById("mySelect");
let displayParagraph = document.getElementById("selectedValue");

function updateParagraph(event) {
  let selectedOption = event.target.options[event.target.selectedIndex];
  let selectedValue = selectedOption.value;
  let selectedText = selectedOption.text;

  displayParagraph.innerText = `Selected: ${selectedText} (${selectedValue})`;
}

selectElement.addEventListener("change", updateParagraph);


//task - 9
let list = document.getElementById("list");

function logListItem(event) {
  if (event.target && event.target.nodeName === "LI") {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
}

list.addEventListener("click", logListItem);

// Task 10:

const addItemButton = document.getElementById("addItemButton");

function addItem() {
  const listItem = document.createElement("li");
  listItem.textContent = `${list.children.length + 1} list`;

  list.appendChild(listItem);
}

addItemButton.addEventListener("click", addItem);