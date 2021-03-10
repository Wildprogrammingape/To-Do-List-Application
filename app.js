// Define selectors of elements by class name
const todoAddButton = document.querySelector(".todo-addButton");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

// Add event and event handler
todoAddButton.addEventListener("click", addTodo);   // when click button
todoList.addEventListener("click", checkButton);    // when click list


// Event handler
function addTodo(event){
    // prevent the form from submitting
    event.preventDefault();

    // create a new div
    const newDiv = document.createElement("div");
    // add class name
    newDiv.classList.add("new-div");
    
    // create a new li
    const newList = document.createElement("li");
    // add class name
    newList.classList.add("new-list");
    // add content
    newList.innerText = todoInput.value;
    // append li to div
    newDiv.appendChild(newList);

    // create complete button
    const newCompleteBtn = document.createElement("button");
    // add class name
    newCompleteBtn.classList.add("complete-button");
    // append btn to div
    newDiv.appendChild(newCompleteBtn);

    // create delete button
    const newDeleteBtn = document.createElement("button");
    // add class name
    newDeleteBtn.classList.add("delete-button");
    newDiv.appendChild(newDeleteBtn);

    // finally append div child to ul parent
    todoList.appendChild(newDiv);
}

// Check complete button and delete button
function checkButton(event){
    // check delete
    if (event.target.classList[0] === "delete-button"){
        // remove the parent node "div"
        const parentDivNode = event.target.parentNode;
        parentDivNode.remove();
    }
    // check complete
    if (event.target.classList[0] === "complete-button"){
        const parentDivNode = event.target.parentNode;
        //parentDivNode.classList.add("complete-style");
        // toggle method: add or remove className
        parentDivNode.classList.toggle("complete-style");
    }
}