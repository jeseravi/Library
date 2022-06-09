function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//need to call functions before the closeForm() is called
//or else data will be deleted
var myForm=document.getElementById("myForm");
myForm.onsubmit=function(){

       
}

//stores form data in local storage
function saveData(){
    let title,author;
    let readStatus = document.querySelector('input[name = "readStatus"]:checked').value;
    title=document.getElementById("title").value;
    author=document.getElementById("author").value;
    localStorage.setItem("title",title);
    localStorage.setItem("author",author);
    localStorage.setItem("readStatus",readStatus);

    createCard();  

}

//take data from local storage and make a card with it    
function createCard(){

    let testDiv = document.createElement("div");
    testDiv.innerHTML="Testing"
    document.getElementById("libraryArea").appendChild(testDiv);

}
    



