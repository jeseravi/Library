function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var myForm=document.getElementById("myForm");
myForm.onsubmit=function(){

}


//stores form data in local storage
function saveData()
    {
        let title,author;
        var readStatus = document.querySelector('input[name = "readStatus"]:checked').value;
        console.log(readStatus);
        title=document.getElementById("title").value;
        author=document.getElementById("author").value;
        localStorage.setItem("title",title);
        localStorage.setItem("author",author);
        localStorage.setItem("readStatus",readStatus);
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
