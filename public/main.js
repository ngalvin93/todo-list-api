let todoList = document.querySelector('#todos')

document.addEventListener('DOMContentLoaded', function fetchTodoList () {
    $.getJSON('/api/todos')
        .then(function(response){
            return response
        })
        .then(renderTodoList)
})

function renderTodoList (response) {
    console.log('%cThis is the todo list:', "color: red;")
    response.forEach(function(singleItem){
        console.log(singleItem.todo)
    })
    const todoHtml = response.map(function(singleItem){
        return `<p>${singleItem.todo}</p>`
    })
    todoList.innerHTML = todoHtml.join('')
}