// console.log(document.querySelector('#tableTemplate'));
var tableTemplate = document.querySelector('#tableTemplate').innerHTML;
if (tableTemplate) {
    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var JobData = [{
            id : "1",
            jobTitle: 'back end developer',
            JobType: 'Permanent',
            jobLocation: 'waterfront',
            NameOfCompany: 'Codex',
            Age: '18 - 35 years',
              Appy : 'Apply'
        },
        {
          id : "2",
            jobTitle: 'Associate Developer',
            JobType: '1 year contract',
            jobLocation: 'Sea Point ',
            NameOfCompany: 'Nedbank',
            Age: '18 - 35 years',
            Appy : 'Apply'
        },

        {
          id : "3",
            jobTitle: 'Application Developer',
            JobType: 'Permanent',
            jobLocation: 'Cape Town',
            NameOfCompany: 'Media24',
            Age: '18 - 35 years',
              Appy : 'Apply'
        }, {
          id : "3",
            jobTitle: 'Associate Developer',
            JobType: '1 year contract',
            jobLocation: 'Sea Point ',
            NameOfCompany: 'Nedbank',
            Age: '18 - 35 years',
              Appy : 'Apply'
        }, {
          id : "4",
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


function formFunction(jobId){

  //var rowClicked = evt.target;

  // get the Id of the fruit clicked on using dataset
  //var jobId = Number(rowClicked.dataset.jobId);

  // now find the price for the fruit you clicked on

  var itJob = JobData.find(function(f){
    return f.id === jobId;
  });

  alert(itJob);

  // var tableDisplay = document.querySelector('#tableDisplay');
  // tableDisplay.innerHTML = "";
  // var applicationForm = document.querySelector('.applicationForm');
  // applicationForm.style="display:show";

  // console.log(jobTitle);
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
            formDisplay
        } else if (age <= 35) {
            alert("Hello! your application is successful!");

        } else if (age > 35) {

            alert("Hello! you are too old you can't apply for this job !");
        }
        textBox.value = "";
    });

    var applicationTemplateText = document.querySelector('.applicationTemplate').innerHTML;

    var applicationTemplate = Handlebars.compile(applicationTemplateText);

    var jobList = [{ id : 35,  jobTitle : "Application Developer", JobType : 'Permanent', job  : 'JobType : Permanent, JobType : Permanent, jobLocation : waterfront,',}];

    //jobs.innerHTML = applicationTemplate({job : jobList});



    // use event bubbling to check which row in the table was clicked on
    // jobs.addEventListener('click', function(evt){
    //     var rowClicked = evt.target;
    //
    //     // get the Id of the fruit clicked on using dataset
    //     var jobId = Number(rowClicked.dataset.jobId);
    //
    //     // now find the price for the fruit you clicked on
    //
    //     var itJobs = jobList.find(function(f){
    //       return f.id === jobId;
    //     });
    //
    //     jobInfo.textContent = itJobs.job
    //
    // });





    //var applyButton = document.getElementById('apply');
    //applyButton.addEventListener('click', function () {
    //  console.log("test");
    //});
