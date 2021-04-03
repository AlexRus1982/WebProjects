
function deactivateAllButtons() {
    var buttons = document.getElementsByClassName("button active");
    
    for(var j = 0; j < buttons.length; j++)
        buttons[j].classList.remove("active");
}

function hideAllPages() {
    var pages = document.getElementsByClassName("page");
    
    for(var j = 0; j < pages.length; j++)
        pages[j].style.display = "none";
}

/**
 * 
 * @param {!HTMLElement} el 
 */
function setActiveButtonPage(el) {
    deactivateAllButtons();
    hideAllPages();

    var pages = document.getElementsByClassName("page");
    pages[el.getAttribute("order")].style.display = "block";
    el.classList.add("active");
}

function setActiveButtonPageByNum(num) {
    deactivateAllButtons();
    hideAllPages();

    var buttons = document.getElementsByClassName("button");
    var pages = document.getElementsByClassName("page");
    var el = buttons[num];
    el.classList.add("active");
    pages[el.getAttribute("order")].style.display = "block";
}


var text = document.getElementById("text");
var shadow = "";
for(var i = 0; i < 30; i++)
    shadow += (shadow ? ", " : "") + -i * 1 + "px " + i * 1 + "px 0 #D9D9D9";
text.style.textShadow = shadow;

var buttons = document.getElementsByClassName("button");
for(var i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("click", function()
    {
        setActiveButtonPage(this);
    });

setActiveButtonPageByNum(0);