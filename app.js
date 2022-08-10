let toDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');


toDoButton.addEventListener('click', function() {
    
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;  
    toDoContainer.appendChild(paragraph); 
    if( inputField.value == "") {
        alert("Please Enter a Task")
    }
    inputField.value = ""; 
    paragraph.addEventListener('click', function() {
        paragraph.style.background = "red";
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
})


