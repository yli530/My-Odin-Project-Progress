const MyLibrary = {};

let id = 0;

class Book {
    constructor(title, author, pageNum) {
        this.title = title;
        this.author = author;
        this.pageNum = pageNum;
        this.hasRead = false;
    }

    get title() {
        return this.title;
    }

    get author() {
        return this.author;
    }

    get pageNum() {
        return this.pageNum;
    }

    info() {
        return this.title + " by: " + this.author + ", " + this.pageNum + ", " + ((this.hasRead) ? "already read" : "not read yet");
    }

    updateRead() {
        this.hasRead = !this.hasRead;
    }
}

function addBookToLibrary() {
    let bookTitle = document.getElementById("bookTitle").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let numPage = document.getElementById("numPage").value;

    let temp = new Book(bookTitle, bookAuthor, numPage);
    MyLibrary[id] = temp;
    id += 1;

    refreshLibrary()
}

function deleteBookFromLibrary(bookID) {
    delete MyLibrary[bookID];

    refreshLibrary()
}

function refreshLibrary() {
    let libraryTable = document.getElementById("libraryTable");
    libraryTable.innerHTML = 
        "<table class=\"full-width\" id=\"libraryTable\"><legend>Library</legend><tr><th>Name</th><th>Author</th><th>Number of pages</th><th>Read?</th><th>buttons</th></tr></table>";
    for( const [ id, book ] of Object.entries(MyLibrary)) {
        let row = libraryTable.insertRow(-1);
        let title = row.insertCell(-1);
        let author = row.insertCell(-1);
        let num = row.insertCell(-1);
        let read = row.insertCell(-1);
        let buttons = row.insertCell(-1);

        let readButton = document.createElement("button");
        buttons.appendChild(readButton);
        readButton.innerHTML = "read";
        readButton.onclick = (function() {
            book.updateRead();
            read.innerHTML = book.hasRead;
        })

        let deleteButton = document.createElement("button");
        buttons.appendChild(deleteButton);
        deleteButton.innerHTML = "delete";
        deleteButton.onclick = (function() {
            deleteBookFromLibrary(id);
        })

        title.innerHTML = book.title;
        author.innerHTML = book.author;
        num.innerHTML = book.pageNum;
        read.innerHTML = book.hasRead;
    }
}

let b = new Book("sadas", "1giufjds", 123);

MyLibrary[id] = b;
id += 1;

refreshLibrary();