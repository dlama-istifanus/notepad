var note = document.querySelector("#notes ul");
// ****************** Search filter

var searchInput = document.querySelector("#search-filter");
searchInput.addEventListener("keyup", function (e) {
  var searchChar = e.target.value.toUpperCase();

  var lists = note.getElementsByTagName("li");

  Array.from(lists).forEach(function (list) {
    var listTxt = list.firstElementChild.textContent;

    if (listTxt.toUpperCase().indexOf(searchChar) !== -1) {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  });
});

// **********Add-Note
var input = document.getElementById("add-input");
var btn = document.getElementById("add");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value !== "") {
    var newLi = document.createElement("li");
    var par = document.createElement("p");
    var iconsPar = document.createElement("p");
    var edit = document.createElement("i");
    edit.className = "fas fa-pen-square";
    var cancel = document.createElement("i");
    cancel.className = "fa fa-times";
    var editNt = document.createElement("input");
    editNt.setAttribute("id", "edit-note");
    editNt.setAttribute("type", "text");
    var text = document.createTextNode(input.value);

    par.appendChild(text);
    note.appendChild(newLi);
    newLi.appendChild(par);
    newLi.appendChild(iconsPar);
    iconsPar.appendChild(edit);
    iconsPar.appendChild(cancel);
    newLi.appendChild(editNt);

    input.value = "";
  }
});

//************ edit and delete note */
note.addEventListener("click", function (e) {
    if (e.target.classList[0] === "fas"){
      var par = e.target.parentElement
      var input = par.nextElementSibling
      var textPar = par.previousElementSibling
      input.style.display = "block";

      var list = par.parentNode
      list.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) {
          if (input.value !== "") {
            textPar.textContent = input.value;
            input.style.display = "none";
          } else {
           var li = list.parentNode;
           li.removeChild(list)
          }
        }
      });
    } else if (e.target.classList[0] === "fa") {
        var par = e.target.parentElement
        var li = par.parentElement
        li.style.display = 'none'
    }
});

/****************hide note */
var hide = document.getElementById('click-hide');
hide.addEventListener('click', function(){
    var label = document.querySelector('label')
    if(hide.checked){
       note.style.display = 'none'
       label.textContent = 'Unhide notes'
    }else{
        note.style.display = 'block'
        label.textContent = 'Hide notes'
    }
})
