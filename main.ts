let myLibrary = [];

function Book(name, author, page, read) {
    this.name = name
    this.author = author
    this.page = page
    this.read = read
}

Book.prototype.info = function() {
    return `${this.name} by ${this.author}, ${this.page} pages, ${this.read ? "have read" : "have not read"}`
}

function addBookToLibrary(bookObj) {
    //Declaring variables for bookObj
    let name = document.createTextNode(bookObj.name)
    let author = document.createTextNode(bookObj.author)
    let page = document.createTextNode(bookObj.page)
    let read = document.createTextNode(bookObj.read?"have read":"have not read")

    //
    let bookDiv = document.createElement("div")
    let bookName = document.createElement("p") 
    let bookAuthor = document.createElement("p") 
    let bookPage = document.createElement("p") 
    let bookRead = document.createElement("p") 

    bookName.appendChild(name)
    bookAuthor.appendChild(author)
    bookPage.appendChild(page)
    bookRead.appendChild(read)

    bookDiv.appendChild(bookName)
    bookDiv.appendChild(bookAuthor)
    bookDiv.appendChild(bookPage)
    bookDiv.appendChild(bookRead)

    document.getElementById("library-container").appendChild(bookDiv)
}

let addBookFormBtn = document.getElementById("book-form-popup")