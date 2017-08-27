//JAVASCRIPT


//  accessing the children of typewriter with class txtHidden [array]
var txtShow = document.querySelectorAll(".typewriter .txtHidden");

//  Starting Counter
var currentTxtShow = 0;

//  setInterval method for Slide show with 5sec delay and function call
var txtShowInterval = setInterval(nextTxtShow, 3500);

//  Function to slide show the Txt
function nextTxtShow() {
    //  it overwrites the class of [index] to txtHidden
    txtShow[currentTxtShow].className = "txtHidden";
    //  Important statement for slide show looping, counter gets incremented and once it gets to max length it starts again
    currentTxtShow = (currentTxtShow + 1) % txtShow.length;
    //  it overwrites the class of [index] to showing
    txtShow[currentTxtShow].className = "Showing";

}


