var switchableDivs = document.getElementsByClassName("switchable");
var currentIndex = 0;
displayProperDiv();

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