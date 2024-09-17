const myLibrary = [];

function Book() {};

function addBookToLibrary(title,author,pages,checkRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checkRead = checkRead;
};
