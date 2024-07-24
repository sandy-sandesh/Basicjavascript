const title = document.getElementById("title");
const description =  document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");



let tasks = [];
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    tasks.push({
        title: title.value,
        description: description.value,
    });
    console.log(tasks);
});