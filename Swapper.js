/*
This script is used to switch the select options.
Everytime you change the selected option,
this script will check to see if it equals the other select of its counterpart.
If they are the same, it will change the other one to it a randomly selected option.
*/

//This is the start of the function for the measurement swapper.
function swapDistance(num) {
    var opOne = document.getElementById("DistanceOptionOne");
    opOne = opOne.options[opOne.selectedIndex].value;
    var opTwo = document.getElementById("DistanceOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].value;

    if(opOne === opTwo){
        if(num === 1){
            if(document.getElementById("DistanceOptionTwo").selectedIndex === 0){
                document.getElementById("DistanceOptionTwo").selectedIndex++;
            } else {
                document.getElementById("DistanceOptionTwo").selectedIndex--;
            }
        } else {
            if(document.getElementById("DistanceOptionOne").selectedIndex === 0){
                document.getElementById("DistanceOptionOne").selectedIndex++;
            } else {
                document.getElementById("DistanceOptionOne").selectedIndex--;
            }
        }
    }
    Distance();
}
//End of function

//This is the start of the function for the Weight swapper.
function swapWeight(num) {
    var opOne = document.getElementById("WeightOptionOne");
    opOne = opOne.options[opOne.selectedIndex].value;
    var opTwo = document.getElementById("WeightOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].value;

    if(opOne === opTwo){
        if(num === 1){
            if(document.getElementById("WeightOptionTwo").selectedIndex === 0){
                document.getElementById("WeightOptionTwo").selectedIndex++;
            } else {
                document.getElementById("WeightOptionTwo").selectedIndex--;
            }
        } else {
            if(document.getElementById("WeightOptionOne").selectedIndex === 0){
                document.getElementById("WeightOptionOne").selectedIndex++;
            } else {
                document.getElementById("WeightOptionOne").selectedIndex--;
            }
        }
    }
    Weight();
}
//End of function

//This is the start of the function for the Temperature swapper.
function swapTemperature(num) {
    var opOne = document.getElementById("TempOptionOne");
    opOne = opOne.options[opOne.selectedIndex].value;
    var opTwo = document.getElementById("TempOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].value;

    if(opOne === opTwo){
        if(num === 1){
            if(document.getElementById("TempOptionTwo").selectedIndex === 0){
                document.getElementById("TempOptionTwo").selectedIndex++;
            } else {
                document.getElementById("TempOptionTwo").selectedIndex--;
            }
        } else {
            if(document.getElementById("TempOptionOne").selectedIndex === 0){
                document.getElementById("TempOptionOne").selectedIndex++;
            } else {
                document.getElementById("TempOptionOne").selectedIndex--;
            }
        }
    }
    Temperature();
}
//End of function

//This is the start of the function for the Time swapper.
function swapTime(num) {
    var opOne = document.getElementById("TimeOptionOne");
    opOne = opOne.options[opOne.selectedIndex].value;
    var opTwo = document.getElementById("TimeOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].value;

    if(opOne === opTwo){
        if(num === 1){
            if(document.getElementById("TimeOptionTwo").selectedIndex === 0){
                document.getElementById("TimeOptionTwo").selectedIndex++;
            } else {
                document.getElementById("TimeOptionTwo").selectedIndex--;
            }
        } else {
            if(document.getElementById("TimeOptionOne").selectedIndex === 0){
                document.getElementById("TimeOptionOne").selectedIndex++;
            } else {
                document.getElementById("TimeOptionOne").selectedIndex--;
            }
        }
    }
    Time();
}
//End of function

//This is the start of the function for the Speed swapper.
function swapSpeed(num) {
    var opOne = document.getElementById("SpeedOptionOne");
    opOne = opOne.options[opOne.selectedIndex].value;
    var opTwo = document.getElementById("SpeedOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].value;

    if(opOne === opTwo){
        if(num === 1){
            if(document.getElementById("SpeedOptionTwo").selectedIndex === 0){
                document.getElementById("SpeedOptionTwo").selectedIndex++;
            } else {
                document.getElementById("SpeedOptionTwo").selectedIndex--;
            }
        } else {
            if(document.getElementById("SpeedOptionOne").selectedIndex === 0){
                document.getElementById("SpeedOptionOne").selectedIndex++;
            } else {
                document.getElementById("SpeedOptionOne").selectedIndex--;
            }
        }
    }
    Speed();
}
//End of function

//This is the start of the function for the Frequency swapper.
function swapFrequency(num) {
    var opOne = document.getElementById("FreOptionOne");
    opOne = opOne.options[opOne.selectedIndex].value;
    var opTwo = document.getElementById("FreOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].value;

    if(opOne === opTwo){
        if(num === 1){
            if(document.getElementById("FreOptionTwo").selectedIndex === 0){
                document.getElementById("FreOptionTwo").selectedIndex++;
            } else {
                document.getElementById("FreOptionTwo").selectedIndex--;
            }
        } else {
            if(document.getElementById("FreOptionOne").selectedIndex === 0){
                document.getElementById("FreOptionOne").selectedIndex++;
            } else {
                document.getElementById("FreOptionOne").selectedIndex--;
            }
        }
    }
    Frequency();
}
//End of function

//This is the start of the function for the Fuel swapper.
function swapFuel(num) {
    var opOne = document.getElementById("FuelOptionOne");
    opOne = opOne.options[opOne.selectedIndex].value;
    var opTwo = document.getElementById("FuelOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].value;

    if(opOne === opTwo){
        if(num === 1){
            if(document.getElementById("FuelOptionTwo").selectedIndex === 0){
                document.getElementById("FuelOptionTwo").selectedIndex++;
            } else {
                document.getElementById("FuelOptionTwo").selectedIndex--;
            }
        } else {
            if(document.getElementById("FuelOptionOne").selectedIndex === 0){
                document.getElementById("FuelOptionOne").selectedIndex++;
            } else {
                document.getElementById("FuelOptionOne").selectedIndex--;
            }
        }
    }
    Fuel();
}
//End of function