let toDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');
let resultDisplay = document.getElementById('result');

let result = 1



toDoButton.addEventListener('click', function() {
    if( inputField.value == "") {
        alert("Please Enter a Task")
    } else {
        let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;  
        let closeButton = document.createElement("button");
        paragraph.appendChild(closeButton);
        toDoContainer.appendChild(paragraph); 
        resultDisplay.innerHTML = result
        result ++
        inputField.value = ""; 

        paragraph.addEventListener('click', function() {
            paragraph.style.background = " rgb(199, 117, 117)";
        })
        closeButton.addEventListener('click', function() {
            toDoContainer.removeChild(paragraph);
        })
    }
    
})


