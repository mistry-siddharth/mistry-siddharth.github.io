/*
This file contains all of the code running in the background that makes resumeBuilder.js possible.
It adds different HTML elements in the DOM from using JavaScript.
*/
var HTMLThumbnail = '<div class="thumbnail"></div>';

//Header elements
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<p class="yellow-text">%data%</p><hr>';
//Bio pic tag
var HTMLbioPic = '<img src="%data%" class="biopic img-responsive">';
//Top Contacts
var HTMLTopContacts = '<ul id="topContacts" class="flex-box"></ul>';
var HTMLmobile = '<li class="flex-item contactItem"><span class="blue-text">mobile </span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item contactItem"><span class="blue-text">email </span><span>%data%</span></li>';
var HTMLgithub = '<li class="flex-item contactItem"><span class="blue-text">github </span><a href="https://github.com/mistry-siddharth" class="aOverRide" target="_blank"><span>%data%</span></a></li>';
var HTMLlocation = '<li class="flex-item contactItem"><span class="blue-text">location </span><span>%data%</span></li>';
//Skills elements
var HTMLskillsStart = '<div class="skills-entry"></div>';
var HTMLskillsHeader = '<h3 id="skills-h3">Skills at a Glance</h3>';
var HTMLprogramming = '<li class="skillsList"><span class="blue-text">Programming Languages: </span><span>%data%</span></li>';
var HTMLTools = '<li class="skillsList"><span class="blue-text">Tools: </span><span>%data%</span></li>';
var HTMLTechnology = '<li class="skillsList"><span class="blue-text">Technologies: </span><span>%data%</span></li>';

//Work elements
var HTMLworkStart = '<div class="work-entry col-md-12"></div>';
var HTMLworkEmployer = '<a class="blue-text"><b>%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

//Project elements
var HTMLprojectStart = '<div class="project-entry col-md-12"></div>';
var HTMLprojectTitle = '<a class="blue-text"><b>%data%</a>';
var HTMLprojectDates = '<div class="date-text"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

//Education elements
var HTMLschoolStart = '<div class="education-entry col-xs-12 col-md-6"></div>';
var HTMLschoolName = '<a class="blue-text"><b>%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>%data%</div>';
var HTMLschoolLocation = '<div class="location-text"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>%data%</div>';
var HTMLschoolMajor = '<em><br><br><br>Major: %data%</em>';
//Online classes elements
var HTMLonlineHeader = '<div class="online-header"></div>';
var HTMLonlineStart = '<div class="online-entry col-xs-12 col-md-6"></div>';
var HTMLonlineClasses = '<h3 class="onlineHeader">Online Classes</h3>';
var HTMLonlineSchool = '<a class="blue-text"><b>%data%';
var HTMLonlineDegree = ' -- %data%</a>';
var HTMLonlineDates = '<div class="date-text"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>%data%</div>';
var HTMLonlineMajor = '<em><br><br>Major: %data%</em>';

//Google Maps tag
var googleMap = '<div id="map"></div>';

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires
you to create a function that will need this helper code to run. Don't delete!
It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
    $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function() {};
        $name.html(iName);
    });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    // your code goes here!
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations = locations.concat(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations = locations.concat(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});