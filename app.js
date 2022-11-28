
function toggleImportant(){
    console.log("Icon clicked!");
}

function init() {
    console.log("Task Manager");

    $("#planeIcon").click(toggleImportant);
}

window.onload = init;








/**
 * console log a message when the user clicks on the icon
 * 
 * add an id to the icon
 * catch the click event on the icon, (on init fn)
 * when the icon is clicked, call a fn name toggleImportant
 * in toggleImportantconsole log any message
 */