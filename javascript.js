function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//array of each book
let myLibrary = []
//myLibrary should match local storage
if(window.localStorage.getItem("myLibrary")===null){
    window.localStorage.setItem("myLibrary",JSON.stringify(myLibrary));  
}
else{
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
}

//puts data from form into array book
function saveData(){

    let book;

    if(document.getElementById("title").value ==""){

        alert("You must fill in both a title and author")
        return

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
    
    //reset the form
    document.getElementById('form').reset();

//take data from the book array and make a card with it    

    generateElement("div",book[0],"","libraryArea",book[0]+book[1],"form-container generatedFormContainer")
    generateElement("div","label",book[0],book[0]+book[1],"generatedTitle","generatedLabel")
    generateElement("div","label","Author: " + book[1],book[0]+book[1],"generatedDiv","generatedDiv")
    generateElement("hr","label","",book[0]+book[1],"generatedHr","generatedLabel")
    generateElement("div","label","Read: " + book[2],book[0]+book[1],"generatedDiv"+book[0]+book[1],"generatedDiv")
    generateElement("button","label","Update",book[0]+book[1],"updateButton"+book[0]+book[1],"btn")
    generateElement("button","label","Delete",book[0]+book[1],"closeButton"+book[0]+book[1],"btn cancel")

//delete button event listener
    let closeButtonListener = document.getElementById("closeButton"+book[0]+book[1]);
    closeButtonListener.addEventListener("click",function(event){

        document.getElementById(book[0]+book[1]).remove();

        //check index in myLibrary. Remove the necessary book.

        for(i=0;i<myLibrary.length;i++){

            if(myLibrary[i][3]==indexHelper){
                myLibrary = myLibrary.splice(i,i);

                
            }

            else{
                console.log("not yet")
                
            }

        }

    })

    //update button event listener
    //create the function that toggles a book's read status on your Book prototype instance
    let updateButtonListener = document.getElementById("updateButton"+book[0]+book[1]);
    updateButtonListener.addEventListener("click",function(event){



    for(i=0;i<myLibrary.length;i++){
        let testing=this.id.substring(12)
        if(myLibrary[i][2]=="Yes" && myLibrary[i][3]==testing){
            myLibrary[i][2]="No";

            //change the displayed value to No
            document.getElementById("generatedDiv"+book[0]+book[1]).innerHTML="Read: No"
            

        }

        else{
            myLibrary[i][2]="Yes";
            document.getElementById("generatedDiv"+book[0]+book[1]).innerHTML="Read: Yes"
            

        }
    }


    //else(//if read//)

    //update info on card based on this prototype change
    })
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


