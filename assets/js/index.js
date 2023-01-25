let page = 1

document.body.onload = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20&_page=${page}`)
        .then(response => response.json())
        .then(data => renderTodos(data))
}

function renderTodos(todos) {
    todos.forEach(todo => {
        tbody.innerHTML += `
        <tr>
            <td>${todo.id}</td>
            <td>${todo.title}</td>
        </tr>
        
        `
    })
}

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollable) {
        page += 1
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20&_page=${page}`)
            .then(response => response.json())
            .then(data => renderTodos(data));
    }
})