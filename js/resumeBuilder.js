//Bio section with skills
var bio = {
    "name": "Siddharth Mistry",
    "role": "Front-end Developer",
    "biopic": "img/sid-200.png",
    "contacts": {
        "location": "Chantilly, VA",
        "email": "mistry.siddharth@gmail.com",
        "mobile": "+1(301)412-7922",
        "github": "mistry-siddharth"
    },
    "skills": [{
        "programming": "Python, HTML5, CSS3, Bootstrap, JavaScript, jQuery, Java, SQL",
        "tools": "Git, Grunt, Jenkins, Vagrant",
        "technologies": "AWS, SaaS, IaaS, PaaS, LTE, UMTS, GSM"
    }]
};

bio.display = function() {
    //append role to header
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    //append name to header
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    //#top-contacts-biopic contains top-contacts and biopic so that they can be displayed
    //side by side
    //append biopic first
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    $("#top-contacts-biopic").append(formattedPicture);

    //append top-ontacts to #top-contacts-biopic, which is an UL and contains other LIs
    $("#top-contacts-biopic").append(HTMLTopContacts);

    //append each LI to UL top-contacts
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#top-contacts").append(formattedLocation, formattedEmail, formattedMobile, formattedGithub);

    //Skills section
    for(var skill=0; skill<bio.skills.length; skill++) {
        $("#skills").append(HTMLskillsStart);
        $(".skills-entry").append(HTMLskillsHeader);

        var formattedProgramming = HTMLprogramming.replace("%data%", bio.skills[skill].programming);
        var formattedTools = HTMLtools.replace("%data%", bio.skills[skill].tools);
        var formattedTechnology = HTMLtechnology.replace("%data%", bio.skills[skill].technologies);
        $(".skills-entry").append(formattedProgramming, formattedTools, formattedTechnology);
    }

    //display footer contacts
    $("#lets-connect").append(HTMLcopyright);
    $("#lets-connect").append(HTMLfooterContacts);
    $("#footerContacts").append(HTMLfooteremail, HTMLfooterUdacity, HTMLfooterlinkedin, HTMLfootergithub);
};

bio.display();

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

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        //create new div for work exp
        $("#work-experience").append(HTMLworkStart);
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
};

work.display();

// Project section
var projects = {
    "projects": [{
            "title": "Online Portfolio and Resume",
            "dates": "December 2016 - February 2017",
            "description": "<br>• Designed an online portfolio and resume using HTML, CSS, Bootstrap, JavaScript and jQuery" +
                "<br>• Implemented concepts of responsive web design and responsive images for optimizing site for different screen sizes"
        },
        {
            "title": "Twitter automated response bot",
            "dates": "November 2016",
            "description": "<br>• Designed a bot in Python that works on the concept of information dissemination" +
                "<br>• Configured the bot to listen to certain keywords/#hashtags/users and to reply with a fact based on keyword scraped from Wikipedia" +
                "<br>• Used BeautifulSoup to scrape events from Wikipedia matching certain criteria and retrieving a random fact from Wikipedia" +
                "<br>• Developed a module for replying that has a text-to-image converter which allows replying with facts that are greater than 140 characters thereby bypassing the Twitter limit"
        },
        {
            "title": "Flappy Bird Clone",
            "dates": "November 2016",
            "description": "<br>• Developed flappy bird game clone in Python using PyGame module" +
                "<br>• Created methods to start a new game, make decisions when the player has crashed in obstacles, increase the difficulty level as the game progresses and scoring"
        },
        {
            "title": "Implementation of reliable data transfer over UDP",
            "dates": "November 2016",
            "description": "<br>• Implemented Stop and Wait Protocol using UDP sockets in Java for communication between the transmitter and receiver" +
                "<br>• Provided data flow control, implemented error detection and timeout retransmission for reliability"
        }
    ]
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLThumbnail);

        var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".thumbnail:last").append(formattedProjTitle);

        var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".thumbnail:last").append(formattedProjDates);

        var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".thumbnail:last").append(formattedProjDesc);
    }
};

projects.display();

//Education section
var education = {
    "schools": [{
            "name": "University of Maryland",
            "location": "College Park, MD",
            "degree": "Masters",
            "majors": ["Telecommunications Engineering"],
            "dates": "August 2012 - May 2014",
        },
        {
            "name": "Gujarat University",
            "location": "Ahmedabad, India",
            "degree": "Bachelors",
            "majors": ["Electronics and Communications Engineering"],
            "dates": "August 2007 - June 2011",
        }
    ],
    "onlineCourses": [{
            "school": "Udacity",
            "degree": "Nanodegree",
            "title": "Front-End Development",
            "dates": "2016 - Present",
        },
        {
            "school": "Udemy",
            "degree": "Bootcamp",
            "title": "Bootcamp in Jenkins",
            "dates": "November 2016",
        }
    ]
};

education.display = function() {
    //iterate through each item in schools object
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLThumbnail);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedschoolName + formattedschoolDegree;
        $(".thumbnail:last").append(formattedSchoolNameDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".thumbnail:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".thumbnail:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".thumbnail:last").append(formattedschoolMajor);
    }

    //iterate through each item in online courses
    $("#education").append(HTMLonlineHeader);
    $(".online-header").append(HTMLonlineClasses);
    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
        $(".online-header:last").append(HTMLonlineStart);
        $(".online-entry:last").append(HTMLThumbnail);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineDegree = HTMLonlineDegree.replace("%data%", education.onlineCourses[onlineCourse].degree);
        var formattedOnlineSchoolDegree = (formattedOnlineSchool + formattedOnlineDegree);
        $(".thumbnail:last").append(formattedOnlineSchoolDegree);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".thumbnail:last").append(formattedonlineDates);

        var formattedonlineMajor = HTMLonlineMajor.replace("%data%", education.onlineCourses[onlineCourse].title);
        $(".thumbnail:last").append(formattedonlineMajor);
    }
};

education.display();

//Map section
$("#map-div").append(googleMap);