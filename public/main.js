const todoList = document.querySelector('#todos-child')

document.addEventListener('DOMContentLoaded', function fetchTodoList () {
    $.getJSON('/api/todos')
        .then(function(response){return response})
        .then(renderTodoList)
})

function renderTodoList (response) {
    const todoHtml = response.map(function(singleItem){
        return `<p id="todoItem">${singleItem.todo}</p>`
    })
    todoList.innerHTML = todoHtml.join('')
}

const addButton = document.querySelector('#add-button')
addButton.addEventListener('click', function (e) {
    console.log(addButton)
})