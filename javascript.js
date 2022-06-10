function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//array of each book
let myLibrary=[];


//puts data from form into array book
function saveData(){

    let book;

    if(document.getElementById("title").value =="" && document.getElementById("author").value=="" ){
        alert("You must fill in both a title and author")
        return;
    }

    //terminates function and throws error if book title & author combo has already been added

    for(i=0;i<myLibrary.length;i++){
        if(myLibrary[i][0]==document.getElementById("title").value 
        && myLibrary[i][1]==document.getElementById("author").value){
            alert("A book with this author & title has already been added to your collection");

            document.getElementById('form').reset();

            return;

        }
    }

    let readStatus = document.querySelector('input[name = "readStatus"]:checked').value;
    let title=document.getElementById("title").value;
    let author=document.getElementById("author").value;

    book=[title,author,readStatus];

    myLibrary.push(book);

    //reset the form
    document.getElementById('form').reset();

//take data from the book array and make a card with it    

    generateElement("div",book[0],"","libraryArea",book[0]+book[1],"form-container generatedFormContainer")
    generateElement("div","label",book[0],book[0]+book[1],"generatedTitle","generatedLabel")
    generateElement("div","label","Author: " + book[1],book[0]+book[1],"generatedDiv","generatedLabel")
    generateElement("hr","label","",book[0]+book[1],"generatedHr","generatedLabel")
    generateElement("div","label","Read: " + book[2],book[0]+book[1],"generatedDiv","generatedLabel")
    generateElement("button","label","Update",book[0]+book[1],"updateButton","btn")
    generateElement("button","label","Delete",book[0]+book[1],"updateButton","btn cancel")

//make the close button


}


function generateElement(whatIsIt,entryName,innerHTML,whereToPut,id,chosenClass){

    let generateWhat = whatIsIt;
    let generateEntry = entryName;
    let generateWhere = whereToPut;
    let generateHTML = innerHTML;
    let generateId=id;
    let generateClass=chosenClass;

    generateEntry = document.createElement(generateWhat);
    generateEntry.setAttribute("id",generateId);
    generateEntry.setAttribute("class",generateClass);
    generateEntry.innerHTML=generateHTML;
    document.getElementById(generateWhere).appendChild(generateEntry);
}


