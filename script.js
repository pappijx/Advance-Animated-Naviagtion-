var menu_status_change = false;

function ToggleClasses() {
    this.menu_status_change = !this.menu_status_change;
    var ele = document.getElementById("hamburger").children;
    var ele1 = document.getElementById("advanceMenu");
    if (this.menu_status_change === true) {
        ele[0].style.cssText = "transition : 0.5s;transform:translateY(10px) rotate(135deg); background-color:red;";
        ele[1].style.cssText = "transition : 0.5s;transform:scale(0); background-color:red;";
        ele[2].style.cssText = "transition : 0.5s;transform:translateY(-10px) rotate(-135deg); background-color:red;";
        ele1.classList.add("inside");
        ele1.classList.remove("outside");
    } else {
        ele[0].style.cssText = "transition : 0.5s;transform:translateY(0px) rotate(0deg); background-color:white;";
        ele[1].style.cssText = "transition : 1s;transform:scale(1); background-color:white;";
        ele[2].style.cssText = "transition : 0.5s;transform:translateY(0px) rotate(0deg); background-color:white;";
        ele1.classList.add("outside");
        ele1.classList.remove("inside");
    }
}