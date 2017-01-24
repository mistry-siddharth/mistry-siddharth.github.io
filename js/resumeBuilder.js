/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //Bio section with skills
var bio = {
	"name": "Siddharth Mistry",
	"role": "Front-end Developer",
	"contacts": {
		"email": "mistry.siddharth@gmail.com",
		"github": "mistry-siddharth",
		"mobile": "+1(301)412-7922",
	 	"location": "Chantilly, VA"
	},
	"skills": {
		"programming":
			'Python, HTML5, CSS3, Bootstrap, JavaScript, Angular.js, Java, SQL',
		"tools":
			'Git, Grunt, Vagrant, Jenkins',
		"technologies":
			'AWS, SaaS, IaaS, PaaS, LTE, UMTS, GSM'
	},
	"biopic": "img/sid-400.png",
};

function displayBio() {
	var formattedRole =
		HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName =
		HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedGithub = 
		HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").prepend(formattedGithub);

	var formattedMobile = 
		HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").prepend(formattedMobile);

	var formattedEmail = 
		HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").prepend(formattedEmail);

	var formattedLocation = 
		HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").prepend(formattedLocation);

	var formattedPicture = 
		HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPicture);

	$("#header").append(HTMLskillsStart);

	var formattedProgramming =
		HTMLprogramming.replace("%data%", bio.skills.programming);
	$("#header").append(formattedProgramming);

	var formattedTools =
		HTMLTools.replace("%data%", bio.skills.tools);
	$("#header").append(formattedTools);

	var formattedTechnology =
		HTMLTechnology.replace("%data%", bio.skills.tools);
	$("#header").append(formattedTechnology);
}

displayBio();

//Work section
var work = {
	"jobs": [
		{
			"employer": "Teleworld Solutions",
			"title": "RF Engineer I",
			"location": "Chantilly, VA",
			"dates": "June 2014 - November 2016",
			"description":
				"• Improved network performance by optimizing RF KPIs after diagnosing RF issues for Verizon VoLTE network<br>\
				• Achieved 50% better outdoor coverage for Chicago downtown Sprint LTE network<br>\
				• Achieved >40% improvement for CINR, throughput and spectral efficiency for Chicago downtown Sprint LTE network<br>\
				• Highlighted improvements in network performance for using AltioStar RAN equipment as compared to competing vendor<br>\
				• Performed user experience testing for Comcast public Wi-Fi network and mitigated beacon overreach issues"
		}
	]
};

function displayWork() {
	for(job in work.jobs) {
		//create new div for work exp
		$("#workExperience").append(HTMLworkStart);
		//concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace
			("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace
			("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		//add employment dates
		var formattedDates = HTMLworkDates.replace
			("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		//add job description
		var formattedDescription = HTMLworkDescription.replace
			("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

// Project section
var projects = {
	"projects": [
		{
			"proj_name": "Online Portfolio",
			"proj_dates": "December 2016",
			"description":
				"• Designed an online portfolio using HTML, CSS, Bootstrap and JavaScript<br>\
				• Implemented concepts of responsive web design and responsive images for optimizing site for different screen sizes"
		},
		{
			"proj_name": "Twitter automated response bot",
			"proj_dates": "November 2016",
			"description":
				"• Designed a bot in Python that works on the concept of information dissemination<br>\
				• Configured the bot to listen to certain keywords/#hashtags/users and to reply with a fact based on keyword scraped from Wikipedia<br>\
				• Used BeautifulSoup to scrape events from Wikipedia matching certain criteria and retrieving a random fact from Wikipedia<br>\
				• Developed a module for replying that has a text-to-image converter which allows replying with facts that are greater than 140 characters thereby bypassing the Twitter limit"
		},
		{
			"proj_name": "Flappy Bird Clone",
			"proj_dates": "November 2016",
			"description":
				"• Developed flappy bird game clone in Python using PyGame module<br>\
				• Created methods to start a new game, make decisions when the player has crashed in obstacles, increase the difficulty level as the game progresses and scoring"
		},
		{
			"proj_name": "Implementation of reliable data transfer over UDP",
			"proj_dates": "November 2016",
			"description":
				"• Implemented Stop and Wait Protocol using UDP sockets in Python for communication between the transmitter and receiver<br>\
				• Provided data flow control, implemented error detection and timeout retransmission for reliability"
		}
	]
};

function displayProj() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedProjTitle = HTMLprojectTitle.replace
			("%data%", projects.projects[project].proj_name);
		$(".project-entry:last").append(formattedProjTitle);

		var formattedProjDates = HTMLprojectDates.replace
			("%data%", projects.projects[project].proj_dates);
		$(".project-entry:last").append(formattedProjDates);

		var formattedProjDesc = HTMLprojectDescription.replace
			("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjDesc);
	}
}

displayProj();

//Education section
var education = {
	"onlineCourses": [
		{
			"schoolName": "Udacity",
			"location": "Online",
			"degree": "Nanodegree",
			"major": "Front-end Development",
			"gradDate": "December 2016 - Present"
		}
	],
	"schools": [
		{
			"schoolName": "University of Maryland",
			"location": "College Park, MD",
			"degree": "Masters",
			"major": "Telecommunications Engineering",
			"gradDate": "August 2012 - May 2014",
		},
		{
			"schoolName": "Gujarat University",
			"location": "Ahmedabad, India",
			"degree": "Bachelors",
			"major": "Electronics and Communications Engineering",
			"gradDate": "August 2007 - June 2011"
		}
	]
};

function displayEducation() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace
			("%data%", education.schools[school].schoolName);
		var formattedschoolDegree = HTMLschoolDegree.replace
			("%data%", education.schools[school].degree);
		var formattedSchoolNameDegree = 
		formattedschoolName + formattedschoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedschoolDates = HTMLschoolDates.replace
			("%data%", education.schools[school].gradDate);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedschoolLocation = HTMLschoolLocation.replace
			("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);

		var formattedschoolMajor = HTMLschoolMajor.replace
			("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedschoolMajor);
	}

	for(school in education.onlineCourses) {
		var formattedonlineSchool = HTMLonlineSchool.replace
			("%data%", education.onlineCourses[school].schoolName);
		var formattedonlineDegree = HTMLonlineDegree.replace
			("%data%", education.onlineCourses[school].degree);
		var formattedonlineSchoolDegree = 
		formattedonlineSchool + formattedonlineDegree;		
		$(".education-entry:last").append(formattedonlineSchoolDegree);

		var formattedonlineDates = HTMLonlineDates.replace
			("%data%", education.onlineCourses[school].gradDate);
		$(".education-entry:last").append(formattedonlineDates);

		var formattedonlineLocation = HTMLonlineLocation.replace
			("%data%", education.onlineCourses[school].location);
		$(".education-entry:last").append(formattedonlineLocation);		

		var formattedonlineMajor = HTMLonlineMajor.replace
			("%data%", education.onlineCourses[school].major);
		$(".education-entry:last").append(formattedonlineMajor);
	}
}

displayEducation();

//$("#main").append(internationalizeButton);
/*function inName(name) {
	name = name.trim.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}*/

//Map section
$("#mapDiv").append(googleMap);