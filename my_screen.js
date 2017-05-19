// console.log(document.querySelector('#tableTemplate'));
var tableTemplate = document.querySelector('#tableTemplate').innerHTML;
if (tableTemplate) {
    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var JobData = [{
            id: "1",
            jobTitle: 'back end developer',
            JobType: 'Permanent',
            jobLocation: 'waterfront',
            NameOfCompany: 'Codex',
            Age: '18 - 35 years',
            Appy: 'Apply',
            applications: []
        },
        {
            id: "2",
            jobTitle: 'Associate Developer',
            JobType: '1 year contract',
            jobLocation: 'Sea Point ',
            NameOfCompany: 'Nedbank',
            Age: '18 - 35 years',
            Appy: 'Apply'
        },

        {
            id: "3",
            jobTitle: 'Application Developer',
            JobType: 'Permanent',
            jobLocation: 'Cape Town',
            NameOfCompany: 'Media24',
            Age: '18 - 35 years',
            Appy: 'Apply'
        }, {
            id: "3",
            jobTitle: 'Associate Developer',
            JobType: '1 year contract',
            jobLocation: 'Sea Point ',
            NameOfCompany: 'Nedbank',
            Age: '18 - 35 years',
            Appy: 'Apply'
        }, {
            id: "4",
            jobTitle: 'Application Support Analyster',
            JobType: 'Permanent',
            jobLocation: 'Cape Town ',
            NameOfCompany: 'Amazon',
            Age: '18 - 35 years',
            Appy: 'Apply'
        },
    ];


    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var displayTableResults = tableTemplateInst({
        job: JobData
    });
    var tableDisplay = document.querySelector('#tableDisplay');
    tableDisplay.innerHTML = displayTableResults;
}
var formData = [{
    jobTitle: '1',
    submit: 'submit'
}, ];

var textBox = document.querySelector('#input');
function submitFunction(jobTitle) {
    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var displayTableResults = tableTemplateInst({
        job: JobData
    });
    tableDisplay.innerHTML = displayTableResults;
    applicationForm.innerHTML = ""


    var age = textBox.value;

            if (age < 18) {
                alert("Hello! you are too young go back and grow come back when you are old enough for the jobs!");

            } else if (age <= 35) {
                alert("Hello! your application is successful!");

            } else if (age > 35) {

                alert("Hello! you are too old you can't apply for this job !");
            }
            textBox.value = "";
        }

// }
//set up my empty div
var applicationForm = document.querySelector('#applicationForm');
//
// //setup the application template
var applicationTemplate = document.querySelector("#applicationTemplate").innerHTML;
// //compile the applicationForm
var applicationInst = Handlebars.compile(applicationTemplate);
var displayForm = applicationInst({
})
//show results
applicationForm.innerHTML = ""


function formFunction(jobId) {
    var itJob = JobData.find(function(f) {
        return f.id === jobId;
    });

    if (itJob.viewCounter) {
        itJob.viewCounter++;
    } else {
        itJob.viewCounter = 1
    }

    var tableDisplay = document.querySelector('#tableDisplay');
    tableDisplay.innerHTML = "";

    tableDisplay.innerHTML = "This job has been viewed " + itJob.viewCounter + " time(s)."


    applicationForm.innerHTML = displayForm
}
