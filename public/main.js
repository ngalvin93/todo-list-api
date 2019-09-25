const todoList = document.querySelector('#todos-child')

document.addEventListener('DOMContentLoaded', function fetchTodoList () {
    $.getJSON('/api/todos')
        .then(response => response)
        .then(renderTodoList)
    // document.addEventListener('click', function (e) {
    //     console.log(e.target)
    // })
})

function renderTodoList (response) {
    const todoHtml = response.map(function(singleItem){
        return `<p class="todo-item">${singleItem.todo}</p>`
    })
    todoList.innerHTML = todoHtml.join('')
}

// const addBtn = document.getElementById('add-button')
// const addingItem = document.getElementById('add-item').value

// addBtn.addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log('You clicked the submit button')
//     console.log(addingItem)
// })

const btn = document.getElementById("btn")

btn.addEventListener('click', function () {
    const todoString = document.getElementById("input-txt").value
    const todoPromise = postTodoItem('/api/todos', {todo: todoString})
    todoPromise
        .then(response => renderTodoList(response))
        .catch(error => console.log(error))
})

function postTodoItem (url, todoItem) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoItem)
    })
        .then(response => response.json())
        .then(response => renderTodoList(response))
}