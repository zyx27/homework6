var video;

function getVid(){
    video = document.querySelector("#myVideo"); 
}

function playVid() {
    video.play();
    console.log("Play Video");
    changeVolume();
    // lecture
    var vol = document.querySelector("#volume");
    vol.innerHTML = video.volume * 100 + "%";
    console.log(video);
} 

function pauseVid() { 
    video.pause();
    console.log("Pause Video");
    
} 

function decreaseSpeed() { 
    var decreaseBy = 0.2;
    video.playbackRate *= 1 - decreaseBy;
    console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {

    console.log("Speed is "+ 1);
} 

function skipAhead() {

    console.log("Current location is "+ 1);
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
    console.log("Volume is ");

    // var v = document.getElementById("volumeSlider").value;
    // document.getElementById("volume").innerHtml = v;

}
       

function gray() { 

    console.log("In grayscale")
}

function color() {

    console.log("In color") 
}
