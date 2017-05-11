var textBox = document.querySelector('#input');

var submit = document.querySelector('#submit');
submit.addEventListener('click', function() {
    var age = textBox.value;

    if (age < 18) {
        alert("Hello! you are too young go back and grow come back when you are old enough for the jobs!");

    } else if (age <= 35) {
        alert("Hello! your application is successful!");

    } else if (age > 35) {

        alert("Hello! you are too old you can't apply for this job !");
    }
    textBox.value = "";
});
