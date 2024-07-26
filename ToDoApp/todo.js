const title = document.getElementById("title");
const description =  document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");



let tasks = localStorage.getItem("task")
?JSON.parse(localStorage.getItem("task"))
:[];
ShowAllTasks();

function ShowAllTasks(){
    tasks.forEach((value,index) => {
        let div = document.createElement("div")
        div.setAttribute("class","task")

        const innerDiv = document.createElement("div")
        div.append(innerDiv)

        let p = document.createElement("p")
        p.innerText=value.title
        innerDiv.append(p)
        
        let span = document.createElement("span")
        span.innerText=value.description
        innerDiv.append(span)

        let btn = document.createElement("button")
        btn.setAttribute("class","deleteBtn");
        btn.innerTextxt = "-";

        btn.addEventListener("click", () => {
            removeTasks();
            tasks.splice(index, 1);
            localStorage.setItem("task", JSON.stringify(tasks));

            ShowAllTasks();
        });
        
            div.append(btn);
        container.append(div);
    })
}

// removefunction
function removeTasks(){
    tasks.forEach((value,index) => {
        let div = document.querySelector(".task");
        div.remove();
    })
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removeTasks();

    tasks.push({
        title: title.value,
        description: description.value,
    });
    localStorage.setItem("task", JSON.stringify(tasks));
    ShowAllTasks();
});
