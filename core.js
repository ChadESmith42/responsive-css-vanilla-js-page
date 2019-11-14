//This function adds the Comment Count to the count_badge on each
//article. Ideally, this would be done via Angular/AJAX. This gives
//some "dynamic content" which made testing less boring.
//This function is called on page load via the <body> tag;
function addCountBadgeID() {
    //Select all NODES with Class="count_badge";
    var x = document.getElementsByClassName("count_badge");

    //If any are found ...
    if (x.length) {
        //Loop through each NODE and assign an ID (count_badge + index)
        //expect results as id="count_badge3";
        for (let index = 0; index < x.length; index++) {
            x[index].innerHTML = Math.floor(Math.random() * 15);
        }
    }
    //Using the console.log() to provide some feedback;
    if (x.length == 0) {
        console.log("It didn't work.");
    }
}

//Just showing that I can add dynamic JS content. Pointless as
//I would either create content using Angular/AJAX or hard-code
//a single page like this.

//Create an object of article details;
let authors = [{
    name: "Hingle McKringleBerry",
    date: "4/17/2018"
}, {
    name: "Tyroil Smoochie-Wallace",
    date: "3/12/2018"
}, {
    name: "Quatro-Quatro",
    date: "1/14/2018"
}];

//Create a function to add the details to the document:

function addArticleDetails() {
    //Select all NODES with Class="article__author"
    var x = document.getElementsByClassName("article__author");
    if (x.length) {
        for (let index = 0; index < x.length; index++) {
            x[index].innerHTML = "Written by " + authors[index].name;
        }
    }

    var y = document.getElementsByClassName("article__date");
    if (x.length) {
        for (let index = 0; index < y.length; index++) {
            y[index].innerHTML = "Published " + authors[index].date;
        }
    }
}

//This function toggles the menu button for mobile devices and toggles
//the mobile menu items visibility.
function toggleMenu(x) {
    //Toggle the menu button to "show" the menu
    x.classList.toggle("change");
    //Toggle the nav-bar-mobile to modify size for new elements;
    document.getElementById("nav-bar-mobile").classList.toggle("change");
    //The next few lines toggles the (visibility: visible) for menu
    //items and adds other styling;
    document.getElementById("home-mobile").classList.toggle("change");
    document.getElementById("about-mobile").classList.toggle("change");
    document.getElementById("work-mobile").classList.toggle("change");
    document.getElementById("links-mobile").classList.toggle("change");
    document.getElementById("contact-mobile").classList.toggle("change");
}

function setActive(x) {

    //Basically, need to turn off the active for the previous link ...
    //Check the other links, and remove the active class;

    // Refactored this whole function to 6 lines of code below:

    // if (document.getElementById("home").classList.contains("active")) {
    //     document.getElementById("home").classList.remove("active");
    // }
    // if (document.getElementById("about").classList.contains("active")) {
    //     document.getElementById("about").classList.remove("active");
    // }
    // if (document.getElementById("work").classList.contains("active")) {
    //     document.getElementById("work").classList.remove("active");
    // }
    // if (document.getElementById("links").classList.contains("active")) {
    //     document.getElementById("links").classList.remove("active");
    // }
    // if (document.getElementById("contact").classList.contains("active")) {
    //     document.getElementById("contact").classList.remove("active");
    // }
    // if (document.getElementById("home-mobile").classList.contains("active")) {
    //     document.getElementById("home-mobile").classList.remove("active");
    // }
    // if (document.getElementById("about-mobile").classList.contains("active")) {
    //     document.getElementById("about-mobile").classList.remove("active");
    // }
    // if (document.getElementById("work-mobile").classList.contains("active")) {
    //     document.getElementById("work-mobile").classList.remove("active");
    // }
    // if (document.getElementById("links-mobile").classList.contains("active")) {
    //     document.getElementById("links-mobile").classList.remove("active");
    // }
    // if (document.getElementById("contact-mobile").classList.contains("active")) {
    //     document.getElementById("contact-mobile").classList.remove("active");
    // }

    var locations = [ 'home', 'about', 'work', 'links', 'contact','home-mobile', 'about-mobile', 'work-mobile','links-mobile','contact-mobile'];
    for (let loc of locations) {
        if (document.getElementById(loc).classList.contains("active")) {
            document.getElementById(loc).classList.remove("active");
        }
    }


    //Change the class for the current link
    x.classList.toggle("active");
    toggleMenu(document.getElementById("nav-bar-toggle"));

}

function scrollToLink(elementId) {
    //Assign the input to a variable in order to find the coordinates of the target in the
    //document:
    let location = document.getElementById(elementId)
    //Get the headerLocation based on <div class="header">
    //The header contains the sticky element I want at the top of the screen.
    let headerLocation = document.getElementById("header");

    // console.log("Target top pixel y-coordinate: " + location.offsetTop);
    // console.log("Header scrollHeight: " + headerLocation.scrollHeight);
    // console.log("Attempting to scroll to : " + (location.offsetTop - headerLocation.scrollHeight));

    //Create a new variable to include an offset for the header element;
    //Using the JS functions of offsetTop and scrollHeight to get the right target
    //location within the document. By using these properties of the DOM, the app
    //will perform consistently(-ish) across different devices, browsers, and
    //display resolutions.
    //Adding an additional 150px based on some experimentation;
    let topVisible = location.offsetTop - headerLocation.scrollHeight + 168;

    window.scrollTo({
        top: topVisible,
        behavior: "smooth"
    });
};

function setCopyrightDate() {
    var now = new Date();
    var x = document.getElementById('copyright');
    x.innerText = now.getFullYear();
}


//This function is called by the <body onload=()> tag in the
//document;
function loadPage() {
    this.setCopyrightDate();
    this.addArticleDetails();
    this.addCountBadgeID();
}
