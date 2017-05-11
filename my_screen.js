// console.log(document.querySelector('#tableTemplate'));
var tableTemplate = document.querySelector('#tableTemplate').innerHTML;
if (tableTemplate) {
    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var JobData = [{
            jobTitle: 'back end developer',
            JobType: 'Permanent',
            jobLocation: 'waterfront',
            NameOfCompany: 'Codex',
            Age: '18 - 35 years',
              Appy : 'Apply'
        },
        {
            jobTitle: 'Associate Developer',
            JobType: '1 year contract',
            jobLocation: 'Sea Point ',
            NameOfCompany: 'Nedbank',
            Age: '18 - 35 years',
            Appy : 'Apply'
        },

        {
            jobTitle: 'Application Developer',
            JobType: 'Permanent',
            jobLocation: 'Cape Town',
            NameOfCompany: 'Media24',
            Age: '18 - 35 years',
              Appy : 'Apply'
        }, {

            jobTitle: 'Associate Developer',
            JobType: '1 year contract',
            jobLocation: 'Sea Point ',
            NameOfCompany: 'Nedbank',
            Age: '18 - 35 years',
              Appy : 'Apply'
        }, {
            jobTitle: 'Application Support Analyster',
            JobType: 'Permanent',
            jobLocation: 'Cape Town ',
            NameOfCompany: 'Amazon',
            Age: '18 - 35 years',
              Appy : 'Apply'
        },
    ];


    var tableDisplay = document.querySelector('#tableDisplay');
    var displayButton = document.getElementById('display');
    displayButton.addEventListener('click', function() {
        var tableTemplateInst = Handlebars.compile(tableTemplate);

        var displayTableResults = tableTemplateInst({
            job: JobData
        });
        tableDisplay.innerHTML = displayTableResults;
        var applicationForm = document.querySelector('.applicationForm');
        applicationForm.style="display:none";
      });

}


function formFunction(jobTitle){
  var tableDisplay = document.querySelector('#tableDisplay');
  tableDisplay.innerHTML = "";
  var applicationForm = document.querySelector('.applicationForm');
  applicationForm.style="display:show";

  console.log(jobTitle);
}

var table = document.getElementById("tableID");
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function () {
                tableText(this);
            };
        }
    }

    function tableText(tableCell) {
        alert(tableCell.innerHTML);
    }



    var formDisplay = document.querySelector('#formDisplay');
    var textBox = document.querySelector('#input');
    var mit = document.querySelector('#submit');
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






    //var applyButton = document.getElementById('apply');
    //applyButton.addEventListener('click', function () {
    //  console.log("test");
    //});
