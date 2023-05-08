// const inputBox=document.getElementById("input-box");
// const listContainer=document.getElementById("list-container");

// function addTask(){
//     if(inputBox.value===''){
//         alert('You must write something!');
//     }
//     else{
//         let li=document.createElement("li");
//         li.innerHTML=inputBox.value;
//         listContainer.appendChild(li);
//         let span=document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value="";
//     saveData();
// }

// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName==="LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName==="SPAN"){
//         e.target.parentElement.remove();
//     }
// },false);

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML=localStorage.getItem("data");
// }
// showTask();
let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
//local storage,cookies
let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}