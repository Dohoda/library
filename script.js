// Main stuff

const myLibrary = [];

function Book() {};

function addBookToLibrary(title,author,pages,checkRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checkRead = checkRead;
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
            checkRead = true;
        }
        else{
            checkRead = false;
        }

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