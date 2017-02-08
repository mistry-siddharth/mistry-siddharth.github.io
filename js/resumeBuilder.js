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
        "programming": 'Python, HTML5, CSS3, Bootstrap, JavaScript, jQuery, Java, SQL',
        "tools": 'Git, Grunt, Jenkins, Vagrant',
        "technologies": 'AWS, SaaS, IaaS, PaaS, LTE, UMTS, GSM'
    },
    "biopic": "img/sid-200.png",
};

function displayBio() {
    //append role to header
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    //append name to header
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    //#topContactsbiopic contains topContacts and biopic so that they can be displayed
    //side by side
    //append biopic first
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    $("#topContactsbiopic").append(formattedPicture);

    //append topContacts to #topContactsbiopic, which is an UL and contains other LIs
    $("#topContactsbiopic").append(HTMLTopContacts);

    //append each LI to UL topContacts
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").prepend(formattedGithub);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").prepend(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").prepend(formattedEmail);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").prepend(formattedLocation);

    //Skills section	
    $("#skills").append(HTMLskillsStart);
    $(".skills-entry").append(HTMLskillsHeader);

    var formattedProgramming = HTMLprogramming.replace("%data%", bio.skills.programming);
    $(".skills-entry").append(formattedProgramming);

    var formattedTools = HTMLTools.replace("%data%", bio.skills.tools);
    $(".skills-entry").append(formattedTools);

    var formattedTechnology = HTMLTechnology.replace("%data%", bio.skills.technologies);
    $(".skills-entry").append(formattedTechnology);
}

displayBio();

//Work section
var work = {
    "jobs": [{
        "employer": "Teleworld Solutions",
        "title": "RF Engineer I",
        "location": ["San Francisco, CA", "Philadelphia, PA",
            "Chantilly, VA", "Chicago, IL", "Charlotte, NC"
        ],
        "dates": "June 2014 - November 2016",
        "description": "<br>• Improved network performance by optimizing RF KPIs after diagnosing RF issues for Verizon VoLTE network" +
            "<br>• Achieved 50% better outdoor coverage for Chicago downtown Sprint LTE network" +
            "<br>• Achieved >40% improvement for CINR, throughput and spectral efficiency for Chicago downtown Sprint LTE network" +
            "<br>• Highlighted improvements in network performance for using AltioStar RAN equipment as compared to competing vendor" +
            "<br>• Performed user experience testing for Comcast public Wi-Fi network and mitigated beacon overreach issues"
    }]
};

function displayWork() {
    for (var job = 0; job < work.jobs.length; job++) {
        //create new div for work exp
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLThumbnail);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".thumbnail:last").append(formattedEmployerTitle);

        //add employment dates
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".thumbnail:last").append(formattedDates);

        //add job description
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".thumbnail:last").append(formattedDescription);
    }
}

displayWork();

// Project section
var projects = {
    "projects": [{
            "proj_name": "Online Portfolio and Resume",
            "proj_dates": "December 2016",
            "description": "<br>• Designed an online portfolio and resume using HTML, CSS, Bootstrap, JavaScript and jQuery" +
                "<br>• Implemented concepts of responsive web design and responsive images for optimizing site for different screen sizes"
        },
        {
            "proj_name": "Twitter automated response bot",
            "proj_dates": "November 2016",
            "description": "<br>• Designed a bot in Python that works on the concept of information dissemination" +
                "<br>• Configured the bot to listen to certain keywords/#hashtags/users and to reply with a fact based on keyword scraped from Wikipedia" +
                "<br>• Used BeautifulSoup to scrape events from Wikipedia matching certain criteria and retrieving a random fact from Wikipedia" +
                "<br>• Developed a module for replying that has a text-to-image converter which allows replying with facts that are greater than 140 characters thereby bypassing the Twitter limit"
        },
        {
            "proj_name": "Flappy Bird Clone",
            "proj_dates": "November 2016",
            "description": "<br>• Developed flappy bird game clone in Python using PyGame module" +
                "<br>• Created methods to start a new game, make decisions when the player has crashed in obstacles, increase the difficulty level as the game progresses and scoring"
        },
        {
            "proj_name": "Implementation of reliable data transfer over UDP",
            "proj_dates": "November 2016",
            "description": "<br>• Implemented Stop and Wait Protocol using UDP sockets in Java for communication between the transmitter and receiver" +
                "<br>• Provided data flow control, implemented error detection and timeout retransmission for reliability"
        }
    ]
};

function displayProj() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLThumbnail);

        var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].proj_name);
        $(".thumbnail:last").append(formattedProjTitle);

        var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].proj_dates);
        $(".thumbnail:last").append(formattedProjDates);

        var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".thumbnail:last").append(formattedProjDesc);
    }
}

displayProj();

//Education section
var education = {
    "schools": [{
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
    ],
    "onlineCourses": [{
            "schoolName": "Udacity",
            "degree": "Nanodegree",
            "major": "Front-End Development",
            "gradDate": "2016 - Present",
        },
        {
            "schoolName": "Udemy",
            "degree": "Bootcamp",
            "major": "Bootcamp in Jenkins",
            "gradDate": "November 2016",
        }
    ]
};

function displayEducation() {
    //iterate through each item in schools object
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLThumbnail);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].schoolName);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedschoolName + formattedschoolDegree;
        $(".thumbnail:last").append(formattedSchoolNameDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].gradDate);
        $(".thumbnail:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".thumbnail:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".thumbnail:last").append(formattedschoolMajor);
    }

    //iterate through each item in online courses

    $("#education").append(HTMLonlineHeader);
    $(".online-header").append(HTMLonlineClasses);
    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
        $(".online-header:last").append(HTMLonlineStart);
        $(".online-entry:last").append(HTMLThumbnail);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].schoolName);
        var formattedOnlineDegree = HTMLonlineDegree.replace("%data%", education.onlineCourses[onlineCourse].degree);
        var formattedOnlineSchoolDegree = (formattedOnlineSchool + formattedOnlineDegree);
        $(".thumbnail:last").append(formattedOnlineSchoolDegree);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].gradDate);
        $(".thumbnail:last").append(formattedonlineDates);

        var formattedonlineMajor = HTMLonlineMajor.replace("%data%", education.onlineCourses[onlineCourse].major);
        $(".thumbnail:last").append(formattedonlineMajor);
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