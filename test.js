var formInfo = document.getElementById('formToFill');
var showBut = document.getElementById('show_form');
var hideBut = document.getElementById('hide_form');
var toggleBut = document.getElementById('toggle_form');

function showForm(){
  formInfo.style.display = 'block';
}

function hideForm(){
  formInfo.style.display = 'none';
}

function toggle(){
if (formInfo.style.display = 'block;') {
  hideForm();
} else {
  showForm();
}
}


showBut.addEventListener ("click", showForm);
hideBut.addEventListener ("click", hideForm);
toggleBut.addEventListener ("click", toggle);
