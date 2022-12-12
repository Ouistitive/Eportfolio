var navElement = null;
var i = 0;

function init() {
    var nav = document.getElementById("nav-elements");
    navElement = nav.getElementsByTagName("a");
    navElement[0].style.color = "rgb(29, 210, 210)";

    for(var i = 1; i < navElement.length; i++)
        navElement[i].style.color = "white";



    $('#tools').viewportChecker({
        // Class to add to the elements when they are visible
        classToAdd: 'visible',
        
        // The offset of the elements (let them appear earlier or later)
        offset: 100,
        
        // Add the possibility to remove the class if the elements are not visible
        repeat: false,
        
        // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
        callbackFunction: function(elem, action) {
            alert("test");
        }
        });
}

function changeNavColor(idx) {
    navElement[idx].style.color = "rgb(29, 210, 210)";

    for(var i = 1; i < navElement.length; i++)
        navElement[(idx + i) % navElement.length].style.color = "white";
}