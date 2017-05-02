var submit = document.querySelector('#submit');
var Age = document.querySelector('#Age');


function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
var name = document.querySelector('#name');
var textBox = document.querySelector('#input');
var submit = document.querySelector('#submit');
submit.addEventListener('click', function() {
    var nameText = name.value;
    var age = textBox.value;

    if (age < 18) {
      alert("Hello! you are too young go back and grow come back when you are old!");

    } else if (age <=35 ) {
            alert("Hello! your application is successful!");

    } else if (age >35) {

                  alert("Hello! you are too old you can't apply for this job !");
    }
    textBox.value = "";
    name.value = "";
});
