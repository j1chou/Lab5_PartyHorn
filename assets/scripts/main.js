var volumeLevel = document.getElementById('volume-number');
var slider = document.getElementById('volume-slider');
var volumeImage = document.getElementById('volume-image');
var airHorn = document.getElementById('radio-air-horn');
var carHorn = document.getElementById('radio-car-horn');
var partyHorn = document.getElementById('radio-party-horn');
var horn = document.getElementById("horn-sound");
var button = document.getElementById("honk-btn");

button.addEventListener("click", function(event) {
    event.preventDefault();
    var deciVol = volumeLevel.value/100;
    horn.volume = (deciVol);
    horn.play();
});

airHorn.addEventListener("click", function(){
    //change image
    document.getElementById("sound-image").src="./assets/media/images/air-horn.svg";
    //change sound
    document.getElementById("horn-sound").src="./assets/media/audio/air-horn.mp3";
    console.log(horn.src);
});

carHorn.addEventListener("click", function(){
    //change image
    document.getElementById("sound-image").src="./assets/media/images/car.svg";
    //change sound
    document.getElementById("horn-sound").src="./assets/media/audio/car-horn.mp3";
    console.log(horn.src);
});

partyHorn.addEventListener("click", function(){
    //change image
    document.getElementById("sound-image").src="./assets/media/images/party-horn.svg";
    //change sound
    document.getElementById("horn-sound").src="./assets/media/audio/party-horn.mp3";
    console.log(horn.src);
});

slider.addEventListener("change", function() { 
    volumeLevel.value = slider.value;  
    button.disabled = false; //enable button
    //set volume image
    if(volumeLevel.value > 66){
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }else if(volumeLevel.value > 33){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }else if(volumeLevel.value > 0){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }else{
        button.disabled = true;
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }
});

volumeLevel.addEventListener("change", function() { 
    slider.value = volumeLevel.value;
    button.disabled = false; //enable button
    //set volume image
    if(volumeLevel.value > 66){
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }else if(volumeLevel.value > 33){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }else if(volumeLevel.value > 0){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }else{
        button.disabled = true;
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }
});