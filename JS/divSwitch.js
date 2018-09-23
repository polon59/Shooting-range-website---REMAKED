var switchableDivs = document.getElementsByClassName("switchable");
var popupWindow = document.getElementById("popup");
var currentIndex = 0;
displayProperDiv();


function showHidePopup() {
    popupWindow.style.visibility="visible";
    // } else {
    //     popupWindow.style.display="hidden"
    // }
}

function displayProperDiv() {
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