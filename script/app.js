var navElement = null;
var i = 0;

function init() {
    var nav = document.getElementById("nav-elements");
    navElement = nav.getElementsByTagName("a");
    navElement[0].style.color = "orange";

    for(var i = 1; i < navElement.length; i++)
        navElement[i].style.color = "white";
}

function changeNavColor(idx) {
    navElement[idx].style.color = "orange";

    for(var i = 1; i < navElement.length; i++)
        navElement[(idx + i) % navElement.length].style.color = "white";
}