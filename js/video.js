var video;
var vol;

// vol = document.querySelector("#volume"); //this won't work
// js is loaded before the html/body therefore vol will get a null.

// console.log(vol);

function getVid(){
    video = document.querySelector("#myVideo"); 
    vol = document.querySelector("#volume");
}


function playVid() {
    video.play();
    console.log("Play Video");
    changeVolume();
    // lecture
    vol.innerHTML = video.volume * 100 + "%";
} 

function pauseVid() { 
    video.pause();
    console.log("Pause Video");
    
} 

function decreaseSpeed() { 
    var decreaseBy = 0.2;
    video.playbackRate *= 1 - decreaseBy;
    console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
    var increaseBy = 0.25;
    video.playbackRate *= 1 + increaseBy;
    console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
    var vidLimit = video.duration - 60;
    if (video.currentTime < vidLimit){
        video.currentTime += 60;
        video.play();
    } else {
        video.currentTime = 0;
        video.playbackRate = 1;
    }
    // playVid();
    console.log("Current location is " + video.currentTime);
} 

function mute() {
    if (video.muted){
        console.log("Changing to unmuted");
        video.muted = false;
        document.getElementById("mute").innerHTML = "Unmuted";

    } else {
        console.log("Changing to muted");
        video.muted = true;
        document.getElementById("mute").innerHTML = "Muted";
    }
          
}

function changeVolume() {
    slider = document.querySelector("#volumeSlider");
    video.volume = slider.value / 100;
    vol.innerHTML = video.volume * 100 + "%";
    console.log("Volume is ", slider.value);
        // var v = document.getElementById("volumeSlider").value;
    // document.getElementById("volume").innerHtml = v;
}
       

function gray() {
    if (video.classList.value != "grayscale"){
        video.classList.toggle("grayscale");
    }
    console.log("In grayscale");
}

function color() {
    if (video.classList.value == "grayscale"){
        video.classList.toggle("grayscale");
    }
    
    console.log("In color") 
}
