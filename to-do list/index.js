const todo = document.querySelector(".enteredTodo")
const addbtn = document.querySelector(".add-el")
const list = document.querySelector(".ul-el")
let num =0
let arr =[]

//the function for rendering todos
function renderToDos(){
    list.innerHTML =""
    arr.forEach((toDo,index) => {
          
          list.innerHTML += `<li class= "list-item">
          <input type="checkbox" class="todo-checkbox">
          ${index+1}.${toDo}
          <button class = "delete-el" onClick = "deleteToDo(${index})">delete</button></li>`
          num = num+1
    })                   
}


//the function to delete the todos
function deleteToDo(index){

arr.splice(index,1) //I'll also try to use -1 to select the last element
renderToDos()
saveData()
}

// eventlistener for the add button
addbtn.addEventListener("click", () => {
        if(todo.value === ""){
            return
        }
        arr.push(todo.value)
        todo.value =""
        renderToDos()
        saveData()
})

//function for saving to-do
function saveData(){
    localStorage.setItem("data", JSON.stringify(arr))
}

//function to load the dodos
function loadData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        arr = JSON.parse(savedData); // Parse the saved JSON string into an array
        renderToDos(); // Render the saved todos
    }
}

//calling the function to load the data
loadData()



