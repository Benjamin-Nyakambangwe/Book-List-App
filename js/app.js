//Book Class: Represents a book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Jane Doe',
                isbn: '3546265'
            },
            {
                title: 'Book Two',
                author: 'John Doe',
                isbn: '7895435'
            }
        ];

        const books = StoredBooks;

        books.array.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
           ` ;

            list.appendChild(row);

    }

    //testing url change
}
//Store Class: Handles Storage

//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)
//Event: Add a book

//Event: Remove a book