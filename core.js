// This function adds the Comment Count to the count_badge on each
// article. Ideally, this would be done via an async API call. This gives
// some "dynamic content" which made testing less boring.
// This function is called on page load via the <body> tag;
function addCountBadgeID() {
    // Select all NODES with Class="count_badge";
    var x = document.getElementsByClassName("count_badge");

    // If any are found ...
    if (x.length) {
        // Loop through each NODE and assign an ID (count_badge + index)
        // expect results as id="count_badge3";
        for (let index = 0; index < x.length; index++) {
            x[index].innerHTML = Math.floor(Math.random() * 15);
        }
    }
    // Using the console.log() to provide some feedback;
    if (x.length == 0) {
        console.log("It didn't work.");
    }
}

// Create an object of article details;
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

// Create a function to add the details to the document:
function addArticleDetails() {
    // Select all NODES with Class="article__author"
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

// This function toggles the menu button for mobile devices and toggles
// the mobile menu items visibility.
function toggleMenu(x) {
    // Toggle the menu button to "show" the menu
    x.classList.toggle("change");
    // Toggle the nav-bar-mobile to modify size for new elements;
    document.getElementById("nav-bar-mobile").classList.toggle("change");
    // The next few lines toggles the (visibility: visible) for menu
    // items and adds other styling;
    document.getElementById("home-mobile").classList.toggle("change");
    document.getElementById("about-mobile").classList.toggle("change");
    document.getElementById("work-mobile").classList.toggle("change");
    document.getElementById("links-mobile").classList.toggle("change");
    document.getElementById("contact-mobile").classList.toggle("change");
}

function setActive(x) {

    // Basically, need to turn off the active for the previous link ...
    // Check the other links, and remove the active class;
    var locations = [ 'home', 'about', 'work', 'links', 'contact','home-mobile', 'about-mobile', 'work-mobile','links-mobile','contact-mobile'];
    locations.forEach(loc => {
        if (document.getElementById(loc).classList.contains("active")) {
            document.getElementById(loc).classList.remove("active");
        }
    });
    x.classList.toggle("active");
    toggleMenu(document.getElementById("nav-bar-toggle"));
}

function scrollToLink(elementId) {
    // Assign the input to a variable in order to find the coordinates of the target in the
    // document:
    let location = document.getElementById(elementId)
    // Get the headerLocation based on <div class="header">
    // The header contains the sticky element I want at the top of the screen.
    let headerLocation = document.getElementById("header");

    // Create a new variable to include an offset for the header element;
    // Using the JS functions of offsetTop and scrollHeight to get the right target
    // location within the document. By using these properties of the DOM, the app
    // will perform consistently(-ish) across different devices, browsers, and
    // display resolutions.
    // Adding an additional 168px based on some experimentation;
    let topVisible = location.offsetTop - headerLocation.scrollHeight + 168;

    window.scrollTo({
        top: location.offsetTop - headerLocation.scrollHeight + 168,
        behavior: "smooth"
    });
};

function setCopyrightDate() {
    var now = new Date();
    var x = document.getElementById('copyright');
    x.innerText = now.getFullYear();
}


//  This function is called by the <body onload=()> tag in the
//  document;
function loadPage() {
    this.setCopyrightDate();
    this.addArticleDetails();
    this.addCountBadgeID();
}
