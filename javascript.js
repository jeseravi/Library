
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//array of each book
//myLibrary should match local storage
let myLibrary=[]
if(window.localStorage.getItem("myLibrary")==null){
    window.localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
}
else{
    myLibrary=JSON.parse(window.localStorage.getItem("myLibrary"))
}

//generate the cards from local Storage
if(myLibrary!=[]){
    for(i=0;i<myLibrary.length;i++){

        let libraryCopy = [];
        for(i=0;i<myLibrary.length;i++){

            libraryCopy[i]=myLibrary[i]

        }

        for(i=0;i<libraryCopy.length;i++){

            let book = libraryCopy[i];
            generateCard(book);
            deleteListener(book);
            updateListener(book);

        }

    }
}

//puts data from form into array book
function saveData(){

    let book;

    if(document.getElementById("title").value ==""){
        alert("You must fill in both a title and author")
        return;

    } 
    
    if(document.getElementById("author").value=="" ){
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
    //index helper helps find and remove this book later
    let indexHelper = title+author;

    book=[title,author,readStatus,indexHelper];

    myLibrary.push(book);
    window.localStorage.setItem("myLibrary",JSON.stringify(myLibrary));

    //reset the form
    document.getElementById('form').reset();

//take data from the book array and make a card with it    
generateCard(book);
    
//delete button event listener
deleteListener(book);

//update button event listener
//create the function that toggles a book's read status on your Book prototype instance
updateListener(book);

}

function spliceTester(testing){
    for(i=0;i<myLibrary.length;i++){
          
        if(myLibrary[i][3]==testing){

            return i
                    
        }

        else{
            
        }

    }
}

function generateCard(book){
    generateElement("div",book[0],"","libraryArea",book[0]+book[1],"form-container generatedFormContainer")
    generateElement("div","label",book[0],book[0]+book[1],"generatedTitle","generatedLabel")
    generateElement("div","label","Author: " + book[1],book[0]+book[1],"generatedDiv","generatedDiv")
    generateElement("hr","label","",book[0]+book[1],"generatedHr","generatedLabel")
    generateElement("div","label","Read: " + book[2],book[0]+book[1],"readStatus"+book[0]+book[1],"generatedDiv")
    generateElement("button","label","Update",book[0]+book[1],"updateButton"+book[0]+book[1],"btn")
    generateElement("button","label","Delete",book[0]+book[1],"closeButton"+book[0]+book[1],"btn cancel")

}

function deleteListener(book){
    let closeButtonListener = document.getElementById("closeButton"+book[0]+book[1]);
    closeButtonListener.addEventListener("click",function(event){

        let testing=this.id.substring(11)
        document.getElementById(testing).remove();

        //check index in myLibrary. Remove the necessary book.

        let index = spliceTester(testing);
        console.log(index);
        console.log(myLibrary.splice(0,1))

        myLibrary == myLibrary.splice(index,index);
        window.localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
        

    })
}

function updateListener(book){
    let updateButtonListener = document.getElementById("updateButton"+book[0]+book[1]);
    updateButtonListener.addEventListener("click",function(event){
        
        let testing=this.id.substring(12);
        let divTesting="readStatus"+testing;
        let index = deleteTesting(testing);
        console.log(index);

        if(myLibrary[index][2]=="Yes"){
            myLibrary[index][2]="No";
            document.getElementById(divTesting).innerHTML="Read: No"
            window.localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
        }
        else{
            myLibrary[index][2]="Yes";
            document.getElementById(divTesting).innerHTML="Read: Yes"
            window.localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
        }
    })
}

function deleteTesting(testing){

    for(i=0;i<myLibrary.length;i++){
              
        if(myLibrary[i][3]==testing){
    
            return i
                        
        }
    
        else{
                
        }
    
    }
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
