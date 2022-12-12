var navElement = null;
var i = 0;

function init() {
    var nav = document.getElementById("nav-elements");
    navElement = nav.getElementsByTagName("a");
    navElement[0].style.color = "rgb(29, 210, 210)";

    for(var i = 1; i < navElement.length; i++)
        navElement[i].style.color = "white";



    // Remove the transition class
    const square = document.getElementsByClassName('project');

    for(var i = 0; i < square.length; i++)
        square[i].classList.remove("project-transition");

    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            for(var i = 0; i < square.length; i++)
                square[i].classList.add("project-transition");
            return;
        }

        for(var i = 0; i < square.length; i++)
            square[i].classList.remove("project-transition");
        });
    });

    observer.observe(document.querySelector('#projects'));
}

function changeNavColor(idx) {
    navElement[idx].style.color = "rgb(29, 210, 210)";

    for(var i = 1; i < navElement.length; i++)
        navElement[(idx + i) % navElement.length].style.color = "white";
}

