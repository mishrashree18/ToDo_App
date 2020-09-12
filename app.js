// book class represents the book
class Book {
    constructor(title, author, when) {
        this.title = title;
        this.author = author;
        this.when = when;

    }
}

// ui class handle ui tasks
class UI {
    static displaytodos() {
        const Storedtodos = [
            {
                title: 'todo one',
                author: 'shree',
                when: '9.30pm'

            },
            {
                title: 'todo two',
                author: 'shree',
                when: '3.00pm'
            }
        ];
        
        const todos = Storedtodos;

        todos.forEach(element => UI.addTodoToList(todo));
        
        
    }

    static addTodoToList(todo) {
        const list = document.querySelector('#todo-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${todo.title}</td>
        <td>${todo.author}</td>
        <td>${todo.when}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);

    }
}
//store class handles storage

// event display books
document.addEventListener('DOMContentLoaded', UI.displaytodos);
// event add a book
document.querySelector('#book-form')
// event remove a book
