function OutHead1() {
    var inputText = document.getElementById("primary-title").value;
    var change = document.getElementById("text-1");
    change.innerHTML = inputText;
    
}

function OutHead2() {
    
    var inputText = document.getElementById("secondary-title").value;
    var change = document.getElementById("text-2");
    change.innerHTML = inputText;
}

function cursive() {
    var head1 = document.getElementById("text-1");
    head1.style.fontFamily = "Bell MT";
    
    var head1 = document.getElementById("text-2");
    head1.style.fontFamily = "Bell MT";
    
}


function serif() {
    var head2 = document.getElementById("text-1");
    head2.style.fontFamily = "Impact";
    
    var head2 = document.getElementById("text-2");
    head2.style.fontFamily = "Impact";
}

function sansSerif () {
    var head3 = document.getElementById("text-1");
    head3.style.fontFamily = "AMGDT";
    
    var head3 = document.getElementById("text-2");
    head3.style.fontFamily = "AMGDT";
}


function changeCol () {
    const colSelect = document.getElementById("font-color").value;
    const colChange1 = document.getElementById("text-1");
    const colChange2 = document.getElementById("text-2");
    
    colChange1.style.color = colSelect;
    colChange2.style.color = colSelect;
}


function changeImg() {
    const selectedImage = document.getElementById("imgSelector").value;
    const resizableImage = document.getElementById("imgchg");

    imgchg.src = selectedImage;
}

function changeSize() {
    const fontSize = document.getElementById("slider").value;
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");

    text1.style.fontSize = fontSize + "px";
    text2.style.fontSize = fontSize + "px";

}























