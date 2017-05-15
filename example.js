//console.log(Handlebars);


var jobs= document.querySelector('.jobs');
var jobInfo = document.querySelector('.jobInfo');


var jobTemplateText = document.querySelector('.jobsTemplate').innerHTML;

var jobTemplateInst = Handlebars.compile(jobTemplateText);

var jobList = [{ id : 15, name : "Associate Developer", job : " 1 year contract	Sea Point	Nedbank"},{  id : 35,  name : "Application Developer", JobType : 'Permanent', job  : 'JobType : Permanent, JobType : Permanent, jobLocation : waterfront,'},];

jobs.innerHTML = jobTemplateInst({job : jobList});



// use event bubbling to check which row in the table was clicked on
jobs.addEventListener('click', function(evt){
    var rowClicked = evt.target;

    // get the Id of the fruit clicked on using dataset
    var jobId = Number(rowClicked.dataset.jobId);

    // now find the price for the fruit you clicked on

    var itJobs = jobList.find(function(f){
      return f.id === jobId;
    });

    jobInfo.textContent = itJobs.job



});
