var switchableDivs = document.getElementsByClassName("switchable");
var popupWindow = document.getElementById("popup");
var nextButton = document.getElementById("nextBtn");
var prevButton = document.getElementById("prevBtn");
var currentIndex = 0;
displayProperDiv();


function showPopup() {
    popupWindow.style.visibility="visible";
}

function hidePopup() {
    popupWindow.style.visibility="hidden";
}

function setButtons(params) {
    if (currentIndex == 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentIndex == 2) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

function displayProperDiv() {
    setButtons();
    for (let i = 0; i < switchableDivs.length; i++) {
        if (i === currentIndex){
            switchableDivs[i].style.display="block";
        }
        else{
            switchableDivs[i].style.display="none";
        }   
    }
}

function nextDiv() {
    currentIndex ++;
    displayProperDiv();
}

function previousDiv() {
    currentIndex --;
    displayProperDiv();
}