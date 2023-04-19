let input = document.querySelector("input")
let add = document.querySelector(".add");
let todo = document.querySelector(".todo");
let clear = document.querySelector(".btn-del");

document.body.append(todo)
let item;
var Btn;

add.addEventListener("click", (e) => {
    e.preventDefault();
    if(todo.innerText == "No ToDo Item"){
        todo.innerText = "";
    }
    item = document.createElement("div");
    item.style.margin = "10px"
   let newitem = document.createElement("div");
    newitem.style.display = "inline-block"
    newitem.innerText = input.value;
    Btn = document.createElement("button");
    Btn.setAttribute("class");
    Btn.style.color = "red";
    Btn.style.display = "inline-block"
    item.append(newitem, Btn);
    todo.append(item)
    Btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Are you sure to delete?") == true) {
            item.remove();
        }

    })
    input.value = "";

});



clear.addEventListener("click", (e) => {
    e.preventDefault();

    if (confirm("Are you sure to delete?") == true) {
        todo.remove()
    }
})
    