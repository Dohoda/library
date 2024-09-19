// Main stuff

const myLibrary = [];

function Book(title,author,pages,checkRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checkRead = checkRead
};

function addBookToLibrary(title,author,pages,checkRead) {

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer");
    container.appendChild(cardContainer);

    const cardCancelButton = document.createElement("button");
    cardCancelButton.classList.add("cardCancelButton");
    cardCancelButton.textContent = "X";

    cardCancelButton.addEventListener("click",function(){
        cardContainer.remove();
    });

    cardContainer.appendChild(cardCancelButton);

    const cardChangeStatusButton = document.createElement("button");
    cardChangeStatusButton.classList.add("cardStatusButton");
    cardChangeStatusButton.textContent = "C"

    cardChangeStatusButton.addEventListener("click",function(){
        if(checkRead = true){
            cardRow5.textContent = "The book is not read";
        }
        else{
            cardRow5.textContent = "The book is read";
        }
    });

    cardContainer.appendChild(cardChangeStatusButton);

    /* for creating rows to fill with book information */

    const cardRow1 = document.createElement("div");
    cardRow1.classList.add("cardRow");
    cardContainer.appendChild(cardRow1);

    const cardRow2 = document.createElement("div");
    cardRow2.classList.add("cardRow");
    cardContainer.appendChild(cardRow2);

    const cardRow3 = document.createElement("div");
    cardRow3.classList.add("cardRow");
    cardContainer.appendChild(cardRow3);

    const cardRow4 = document.createElement("div");
    cardRow4.classList.add("cardRow");
    cardContainer.appendChild(cardRow4);

    const cardRow5 = document.createElement("div");
    cardRow5.classList.add("cardRow");
    cardContainer.appendChild(cardRow5);

    cardRow1.textContent = title;
    cardRow2.textContent = "by";
    cardRow3.textContent = author;
    cardRow4.textContent = pages + " pages";
    cardRow5.textContent = checkRead;

};

// Main Buttons and container

const container = document.querySelector(".container");
const newBookButton = document.querySelector(".newBook");
const resetLibraryButton = document.querySelector(".resetLibrary");

// Button that adds new books

newBookButton.addEventListener("click",function(e){

    let title = "";
    let author = "";
    let pages = 0;
    let checkRead = false;

    const dialog = document.createElement("dialog");
    container.appendChild(dialog);

    const form = document.createElement("form");
    dialog.appendChild(form);

    // For Title input and label.

    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for","inputTitle");
    labelTitle.textContent = "Title:";
    form.appendChild(labelTitle);

    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type","text");
    inputTitle.setAttribute("id","inputTitle");
    form.appendChild(inputTitle);

    // For author input and label.

    const labelAuthor = document.createElement("label");
    labelAuthor.setAttribute("for","inputAuthor");
    labelAuthor.textContent = "Author:";
    form.appendChild(labelAuthor);

    const inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("type","text");
    inputAuthor.setAttribute("id","inputAuthor");
    form.appendChild(inputAuthor);

    // For page input and label.

    const labelPages = document.createElement("label");
    labelPages.setAttribute("for","inputPages");
    labelPages.textContent = "Number of Pages:";
    form.appendChild(labelPages);

    const inputPages = document.createElement("input");
    inputPages.setAttribute("type","number");
    inputPages.setAttribute("id","inputPages");
    form.appendChild(inputPages);

    // For checking if the book is read yet.

    const optionContainer = document.createElement("div");
    optionContainer.classList.add("optionContainer");
    form.appendChild(optionContainer);

    const inputCheck = document.createElement("input");
    inputCheck.setAttribute("type","radio");
    inputCheck.setAttribute("id","checkYes");
    inputCheck.setAttribute("value","false");
    optionContainer.appendChild(inputCheck);

    const labelCheck = document.createElement("label");
    labelCheck.setAttribute("for","checkYes");
    labelCheck.textContent = "Book is read.";
    optionContainer.appendChild(labelCheck);

    // For Confirm Button.

    const formButtonConfirm = document.createElement("button");
    formButtonConfirm.setAttribute("for","submit");
    formButtonConfirm.classList.add("confirmButton");
    formButtonConfirm.textContent = "Add Book";
    form.appendChild(formButtonConfirm);

    // For cancel button.

    const formButtonCancel = document.createElement("button");
    formButtonCancel.classList.add("cancelButton");
    formButtonCancel.textContent = "X";
    form.appendChild(formButtonCancel);

    formButtonConfirm.addEventListener("click",function(e){
        e.preventDefault();
        title = inputTitle.value;
        author = inputAuthor.value;
        pages = inputPages.value;
        if(inputCheck.checked == true ){
            checkRead = "the book is read.";
        }
        else{
            checkRead = "the book is not read.";
        }

        const book = new Book(title,author,pages,checkRead);
        myLibrary.push(book);
        addBookToLibrary(title,author,pages,checkRead);

        dialog.close();

    });

    formButtonCancel.addEventListener("click",function(e){
        e.preventDefault();
        dialog.close();
    });

    dialog.show();
    
});

// Button that resets the library.

resetLibraryButton.addEventListener("click",function(){
    container.innerHTML = "";
});