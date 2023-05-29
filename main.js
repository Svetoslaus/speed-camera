function main(){
    let inputSpeed = document.getElementById("speed");
    let inputDir = document.getElementById("dir");

    let speed = parseInt(inputSpeed.value);
    let isDetected = parseInt(inputDir.checked);
 
    let maxSpeed = document.getElementById("maxspeed");
    let max = maxSpeed.value;

    let maxTollerance = max + ((max/100)*10);
    console.log(maxTollerance);

    if (speed > maxTollerance && isDetected == true){
        alert("You're busted");
    }
}
