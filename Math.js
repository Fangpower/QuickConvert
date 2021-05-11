/*
This script contains all the math used for the many different conversions.
Each function is for a different set of conversions, ie. measurements or weight.
At the top of the function it calls the two selects to find what the user wants to convert to and from and it gets the input.
Within each function there is one large switch, which finds what you want to convert from.
Once it finds what you want to convert from, it runs another switch to find what you want to convert to.
Then the function creates a string that displays what you started with, and what that is after being converted.
Then at the bottom of the function it sets the "Answer" text in the html file to the correct answer.
*/

//This function converts the different measurements to one another.
function Distance(){
    var opOne = document.getElementById("DistanceOptionOne");
    opOne = opOne.options[opOne.selectedIndex].text;
    var opTwo = document.getElementById("DistanceOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].text;

    var input = document.getElementById("DistanceInput").value;

    var a = 0;

    //This switch is used to find which option is selected, which it again for the second selected option.
    //I choose to do this because it is cleaner than a bunch of if else statements.
    switch(opOne){
        case "Inch":
            switch(opTwo){
                case "Inch": a = input + " Inches = " + input + " Inches"; break;
                case "Feet": a = input + " Inches = " + Math.round((input * 12) * 100) / 100 + " Feet"; break;
                case "Yard": a = input + " Inches = " + Math.round((input/36) * 100) / 100 + " Yards"; break;
                case "Mile": a = input + " Inches = " + Math.round((input/63360) * 100) / 100 + " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + Math.round((input * 25.4) * 100) / 100 + " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + Math.round((input * 2.54) * 100) / 100 + " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + Math.round((input / 39.37) * 100) / 100 + " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + Math.round((input / 39370) * 100) / 100 + " Kilometers"; break;
            }
        break;

        case "Feet":
            switch(opTwo){
                case "Inch": a = input + " Feet = " + Math.round((input * 12) * 100) / 100+ " Inches"; break;
                case "Feet": a = input + " Feet = " + input + " Feet"; break;
                case "Yard": a = input + " Feet = " + Math.round((input / 3) * 100) / 100+ " Yards"; break;
                case "Mile": a = input + " Feet = " + Math.round((input / 5280) * 100) / 100+ " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + Math.round((input * 305) * 100) / 100+ " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + Math.round((input * 30.48) * 100) / 100+ " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + Math.round((input / 3.281) * 100) / 100+ " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + Math.round((input / 3281) * 100) / 100+ " Kilometers"; break;
            }
        break;

        case "Yard":
            switch(opTwo){
                case "Inch": a = input + " Yards = " + Math.round((input * 36) * 100) / 100+ " Inches"; break;
                case "Feet": a = input + " Yards = " + Math.round((input * 3) * 100) / 100+ " Feet"; break;
                case "Yard": a = input + " Yards = " + input + " Yards"; break;
                case "Mile": a = input + " Yards = " + Math.round((input / 1760) * 100) / 100+ " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + Math.round((input * 914) * 100) / 100+ " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + Math.round((input * 91.44) * 100) / 100+ " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + Math.round((input / 1.094) * 100) / 100+ " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + Math.round((input / 1094) * 100) / 100+ " Kilometers"; break;
            }
        break;

        case "Mile":
            switch(opTwo){
                case "Inch": a = input + " Miles = " + Math.round((input * 63360) * 100) / 100+ " Inches"; break;
                case "Feet": a = input + " Miles = " + Math.round((input * 5280) * 100) / 100+ " Feet"; break;
                case "Yard": a = input + " Miles = " + Math.round((input * 1760) * 100) / 100+ " Yards"; break;
                case "Mile": a = input + " Miles = " + input + " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + Math.round((input * 1.609e+6) * 100) / 100+ " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + Math.round((input * 160934) * 100) / 100+ " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + Math.round((input * 1609) * 100) / 100+ " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + Math.round((input / 1.609) * 100) / 100+ " Kilometers"; break;
            }
        break;

        case "Millimeter":
            switch(opTwo){
                case "Inch": a = input + " Millimeters = " + Math.round((input / 25.4) * 100) / 100+ " Inches"; break;
                case "Feet": a = input + " Millimeters = " + Math.round((input / 305) * 100) / 100+ " Feet"; break;
                case "Yard": a = input + " Millimeters = " + Math.round((input / 914) * 100) / 100+ " Yards"; break;
                case "Mile": a = input + " Millimeters = " + Math.round((input / 1.609e+6) * 100) / 100+ " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + input + " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + Math.round((input / 10) * 100) / 100+ " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + Math.round((input * 1000) * 100) / 100+ " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + Math.round((input / 1e+6) * 100) / 100+ " Kilometers"; break;
            }
        break;

        case "Centimeter":
            switch(opTwo){
                case "Inch": a = input + " Centimeters = " + Math.round((input / 2.54) * 100) / 100+ " Inches"; break;
                case "Feet": a = input + " Centimeters = " + Math.round((input / 30.48) * 100) / 100+ " Feet"; break;
                case "Yard": a = input + " Centimeters = " + Math.round((input / 91.44) * 100) / 100+ " Yards"; break;
                case "Mile": a = input + " Centimeters = " + Math.round((input / 160934) * 100) / 100+ " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + Math.round((input * 10) * 100) / 100+ " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + input + " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + Math.round((input * 100) * 100) / 100+ " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + Math.round((input / 100000) * 100) / 100+ " Kilometers"; break;
            }
        break;

        case "Meter":
            switch(opTwo){
                case "Inch": a = input + " Meters = " + Math.round((input / 39.37) * 100) / 100+ " Inches"; break;
                case "Feet": a = input + " Meters = " + Math.round((input * 3.281) * 100) / 100+ " Feet"; break;
                case "Yard": a = input + " Meters = " + Math.round((input * 1.094) * 100) / 100+ " Yards"; break;
                case "Mile": a = input + " Meters = " + Math.round((input / 1609) * 100) / 100+ " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + Math.round((input * 1000) * 100) / 100+ " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + Math.round((input * 100) * 100) / 100+ " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + input + " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + Math.round((input / 1000) * 100) / 100+ " Kilometers"; break;
            }
        break;

        case "Kilometer":
            switch(opTwo){
                case "Inch": a = input + " Kilometers = " + Math.round((input * 39370) * 100) / 100+ " Inches"; break;
                case "Feet": a = input + " Kilometers = " + Math.round((input * 3281) * 100) / 100+ " Feet"; break;
                case "Yard": a = input + " Kilometers = " + Math.round((input * 1094) * 100) / 100+ " Yards"; break;
                case "Mile": a = input + " Kilometers = " + Math.round((input / 1.609) * 100) / 100+ " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + Math.round((input * 1e+6) * 100) / 100+ " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + Math.round((input * 100000) * 100) / 100+ " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + Math.round((input * 1000) * 100) / 100+ " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + input + " Kilometers"; break;
            }
        break;
    }

    document.getElementById("OutputD").innerHTML = a;
}
//End of function.

//This function converts the different weights to one another.
function Weight(){
    var opOne = document.getElementById("WeightOptionOne");
    opOne = opOne.options[opOne.selectedIndex].text;
    var opTwo = document.getElementById("WeightOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].text;

    var input = document.getElementById("WeightInput").value;

    var a = 0;

    switch(opOne){
        case "Pound":
            switch(opTwo){
                case "Pound": a = input + " Pounds = " + input + " Pounds"; break;
                case "Ounce": a = input + " Pounds = " + Math.round((input * 16) * 100) / 100+ " Ounces"; break;
                case "Gram": a = input + " Pounds = " + Math.round((input * 454) * 100) / 100+ " Grams"; break;
                case "Kilogram": a = input + " Pounds = " + Math.round((input / 2.205) * 100) / 100+ " Kilograms"; break;
                case "US Ton": a = input + " Pounds = " + Math.round((input / 2000) * 100) / 100+ " US Tons"; break;
                case "UK Ton": a = input + " Pounds = " + Math.round((input / 2205) * 100) / 100+ " UK Tons"; break;
            }
        break;

        case "Ounce":
            switch(opTwo){
                case "Pound": a = input + " Ounces = " + Math.round((input / 16) * 100) / 100+ " Pounds"; break;
                case "Ounce": a = input + " Ounces = " + input + " Ounces"; break;
                case "Gram": a = input + " Ounces = " + Math.round((input * 28.35) * 100) / 100+ " Grams"; break;
                case "Kilogram": a = input + " Ounces = " + Math.round((input / 35.274) * 100) / 100+ " Kilograms"; break;
                case "US Ton": a = input + " Ounces = " + Math.round((input / 32000) * 100) / 100+ " US Tons"; break;
                case "UK Ton": a = input + " Ounces = " + Math.round((input / 35274) * 100) / 100+ " UK Tons"; break;
            }
        break;

        case "Gram":
            switch(opTwo){
                case "Pound": a = input + " Grams = " + Math.round((input / 454) * 100) / 100+ " Pounds"; break;
                case "Ounce": a = input + " Grams = " + Math.round((input / 28.35) * 100) / 100+ " Ounces"; break;
                case "Gram": a = input + " Grams = " + input + " Grams"; break;
                case "Kilogram": a = input + " Grams = " + Math.round((input / 1000) * 100) / 100+ " Kilograms"; break;
                case "US Ton": a = input + " Gram = " + Math.round((input / 907185) * 100) / 100+ " US Tons"; break;
                case "UK Ton": a = input + " Gram = " + Math.round((input / 1e+6) * 100) / 100+ " UK Tons"; break;
            }
        break;

        case "Kilogram":
            switch(opTwo){
                case "Pound": a = input + " Kilograms = " + Math.round((input * 2.205) * 100) / 100+ " Pounds"; break;
                case "Ounce": a = input + " Kilograms = " + Math.round((input * 35.274) * 100) / 100+ " Ounces"; break;
                case "Gram": a = input + " Kilograms = " + Math.round((input * 1000) * 100) / 100+ " Grams"; break;
                case "Kilogram": a = input + " Kilograms = " + input + " Kilograms"; break;
                case "US Ton": a = input + " Kilograms = " + Math.round((input / 907) * 100) / 100+ " US Tons"; break;
                case "UK Ton": a = input + " Kilograms = " + Math.round((input / 1000) * 100) / 100+ " UK Tons"; break;
            }
        break;

        case "US Ton":
            switch(opTwo){
                case "Pound": a = input + " US Ton = " + Math.round((input * 2000) * 100) / 100+ " Pounds"; break;
                case "Ounce": a = input + " US Ton = " + Math.round((input * 32000) * 100) / 100+ " Ounces"; break;
                case "Gram": a = input + " US Ton = " + Math.round((input * 907185) * 100) / 100+ " Grams"; break;
                case "Kilogram": a = input + " US Ton = " + Math.round((input * 907) * 100) / 100+ " Kilograms"; break;
                case "US Ton": a = input + " US Ton = " + input + " US Tons"; break;
                case "UK Ton": a = input + " US Ton = " + Math.round((input / 1.102) * 100) / 100+ " UK Tons"; break;
            }
        break;

        case "UK Ton":
            switch(opTwo){
                case "Pound": a = input + " UK Ton = " + Math.round((input * 2205) * 100) / 100+ " Pounds"; break;
                case "Ounce": a = input + " UK Ton = " + Math.round((input * 35274) * 100) / 100+ " Ounces"; break;
                case "Gram": a = input + " UK Ton = " + Math.round((input * 1e+6) * 100) / 100+ " Grams"; break;
                case "Kilogram": a = input + " UK Ton = " + Math.round((input * 1000) * 100) / 100+ " Kilograms"; break;
                case "US Ton": a = input + " UK Ton = " + Math.round((input * 1.102) * 100) / 100+ " US Tons"; break;
                case "UK Ton": a = input + " UK Ton = " + input + " UK Tons"; break;
            }
        break;
    }

    document.getElementById("OutputW").innerHTML = a;
}
//End of function

//This function converts the different weights to one another.
function Temperature(){
    var opOne = document.getElementById("TempOptionOne");
    opOne = opOne.options[opOne.selectedIndex].text;
    var opTwo = document.getElementById("TempOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].text;

    var input = document.getElementById("TempInput").value;

    var a = 0;

    switch(opOne){
        case "Fahrenheit":
            switch(opTwo){
                case "Fahrenheit": a = input + " Fahrenheit = " + input + " Fahrenheit"; break;
                case "Celsius": a = input + " Fahrenheit = " + Math.round((((input - 32) * 100) / 100* 5/9) * 100) / 100+ " Celsius"; break;
                case "Kelvin": a = input + " Fahrenheit = " + Math.round((((input -32) * 100) / 100* 5/9 + 273.15) * 100) / 100+ " Kelvin"; break;
            }
        break;

        case "Celsius":
            switch(opTwo){
                case "Fahrenheit": a = input + " Celsius = " + Math.round((((input * 5/9) * 100) / 100+32) * 100) / 100+ " Fahrenheit"; break;
                case "Celsius": a = input + " Celsius = " + input + " Celsius"; break;
                case "Kelvin": a = input + " Celsius = " + Math.round((input + 273.15) * 100) / 100 + " Kelvin"; break;
            }
        break;

        case "Kelvin":
            switch(opTwo){
                case "Fahrenheit": a = input + " Kelvin = " + Math.round((((input - 273.15) * 100) / 100* 9/5 + 32) * 100) / 100+ " Fahrenheit"; break;
                case "Celsius": a = input + " Kelvin = " + Math.round((input - 273.15) * 100) / 100+ " Celsius"; break;
                case "Kelvin": a = input + " Kelvin = " + input + " Kelvin"; break;
            }
        break;
    }

    document.getElementById("OutputTe").innerHTML = a;
}
//End of function

//This function converts the different times to one another.
function Time(){
    var opOne = document.getElementById("TimeOptionOne");
    opOne = opOne.options[opOne.selectedIndex].text;
    var opTwo = document.getElementById("TimeOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].text;

    var input = document.getElementById("TimeInput").value;

    var a = 0;

    switch(opOne){
        case "Seconds":
            switch(opTwo){
                case "Seconds": a = input + " Seconds = " + input + " Seconds"; break;
                case "Minutes": a = input + " Seconds = " + Math.round((input / 60) * 100) / 100+ " Minutes"; break;
                case "Hours": a = input + " Seconds = " + Math.round((input / 3600) * 100) / 100+ " Hours"; break;
                case "Days": a = input + " Seconds = " + Math.round((input / 86400) * 100) / 100+ " Days"; break;
                case "Months": a = input + " Seconds = " + Math.round((input / 2.628e+6) * 100) / 100+ " Months"; break;
                case "Years": a = input + " Seconds = " + Math.round((input / 3.154e+7) * 100) / 100+ " Years"; break;
            }
        break;

        case "Minutes":
            switch(opTwo){
                case "Seconds": a = input + " Minutes = " + Math.round((input * 60) * 100) / 100+ " Seconds"; break;
                case "Minutes": a = input + " Minutes = " + input + " Minutes"; break;
                case "Hours": a = input + " Minutes = " + Math.round((input / 60) * 100) / 100+ " Hours"; break;
                case "Days": a = input + " Minutes = " + Math.round((input / 1440) * 100) / 100+ " Days"; break;
                case "Months": a = input + " Minutes = " + Math.round((input / 43800) * 100) / 100+ " Months"; break;
                case "Years": a = input + " Minutes = " + Math.round((input / 525600) * 100) / 100+ " Years"; break;
            }
        break;

        case "Hours":
            switch(opTwo){
                case "Seconds": a = input + " Hours = " + Math.round((input * 3600) * 100) / 100+ " Seconds"; break;
                case "Minutes": a = input + " Hours = " + Math.round((input * 60) * 100) / 100+ " Minutes"; break;
                case "Hours": a = input + " Hours = " + input + " Hours"; break;
                case "Days": a = input + " Hours = " + Math.round((input / 24) * 100) / 100+ " Days"; break;
                case "Months": a = input + " Hours = " + Math.round((input / 730) * 100) / 100+ " Months"; break;
                case "Years": a = input + " Hours = " + Math.round((input / 8760) * 100) / 100+ " Years"; break;
            }
        break;

        case "Days":
            switch(opTwo){
                case "Seconds": a = input + " Days = " + Math.round((input * 86400) * 100) / 100+ " Seconds"; break;
                case "Minutes": a = input + " Days = " + Math.round((input * 1440) * 100) / 100+ " Minutes"; break;
                case "Hours": a = input + " Days = " + Math.round((input * 24) * 100) / 100+ " Hours"; break;
                case "Days": a = input + " Days = " + input + " Days"; break;
                case "Months": a = input + " Days = " + Math.round((input / 30.417) * 100) / 100+ " Months"; break;
                case "Years": a = input + " Days = " + Math.round((input / 365) * 100) / 100+ " Years"; break;
            }
        break;

        case "Months":
            switch(opTwo){
                case "Seconds": a = input + " Months = " + Math.round((input * 2.628e+6) * 100) / 100+ " Seconds"; break;
                case "Minutes": a = input + " Months = " + Math.round((input * 43800) * 100) / 100+ " Minutes"; break;
                case "Hours": a = input + " Months = " + Math.round((input * 730) * 100) / 100+ " Hours"; break;
                case "Days": a = input + " Months = " + Math.round((input * 30.417) * 100) / 100+ " Days"; break;
                case "Months": a = input + " Months = " + input + " Months"; break;
                case "Years": a = input + " Months = " + Math.round((input / 12) * 100) / 100+ " Years"; break;
            }
        break;

        case "Years":
            switch(opTwo){
                case "Seconds": a = input + " Years = " + Math.round((input * 3.154e+7) * 100) / 100+ " Seconds"; break;
                case "Minutes": a = input + " Years = " + Math.round((input * 525600) * 100) / 100+ " Minutes"; break;
                case "Hours": a = input + " Years = " + Math.round((input * 8760) * 100) / 100+ " Hours"; break;
                case "Days": a = input + " Years = " + Math.round((input * 365) * 100) / 100+ " Days"; break;
                case "Months": a = input + " Years = " + Math.round((input * 12) * 100) / 100+ " Months"; break;
                case "Years": a = input + " Years = " + input + " Years"; break;
            }
        break;
    }

    document.getElementById("OutputTi").innerHTML = a;
}
//End of function

//This function converts the different speeds to one another.
function Speed(){
    var opOne = document.getElementById("SpeedOptionOne");
    opOne = opOne.options[opOne.selectedIndex].text;
    var opTwo = document.getElementById("SpeedOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].text;

    var input = document.getElementById("SpeedInput").value;

    var a = 0;

    switch(opOne){
        case "Miles Per Hour":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Miles Per Hour = " + input + " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Miles Per Hour = " + Math.round((input * 1.467) * 100) / 100+ " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Miles Per Hour = " + Math.round((input / 2.237) * 100) / 100+ " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Miles Per Hour = " + Math.round((input * 1.609) * 100) / 100+ " Kilometer Per Hour"; break;
                case "Knot": a = input + " Miles Per Hour = " + Math.round((input / 1.151) * 100) / 100+ " Knot"; break;
            }
        break;

        case "Feet Per Second":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Feet Per Second = " + Math.round((input / 1.467) * 100) / 100+ " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Feet Per Second = " + input + " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Feet Per Second = " + Math.round((input / 3.281) * 100) / 100+ " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Feet Per Second = " + Math.round((input * 1.097) * 100) / 100+ " Kilometer Per Hour"; break;
                case "Knot": a = input + " Feet Per Second = " + Math.round((input / 1.688) * 100) / 100+ " Knot"; break;
            }
        break;

        case "Meters Per Second":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Meters Per Second = " + Math.round((input * 2.237) * 100) / 100+ " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Meters Per Second = " + Math.round((input * 3.281) * 100) / 100+ " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Meters Per Second = " + input + " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Meters Per Second = " + Math.round((input * 3.6) * 100) / 100+ " Kilometer Per Hour"; break;
                case "Knot": a = input + " Meters Per Second = " + Math.round((input * 1.944) * 100) / 100+ " Knot"; break;
            }
        break;

        case "Kilometer Per Hour":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Kilometer Per Hour = " + Math.round((input / 1.609) * 100) / 100+ " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Kilometer Per Hour = " + Math.round((input / 1.097) * 100) / 100+ " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Kilometer Per Hour = " + Math.round((input / 3.6) * 100) / 100+ " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Kilometer Per Hour = " + input + " Kilometer Per Hour"; break;
                case "Knot": a = input + " Kilometer Per Hour = " + Math.round((input / 1.852) * 100) / 100+ " Knot"; break;
            }
        break;

        case "Knot":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Knot = " + Math.round((input * 1.151) * 100) / 100+ " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Knot = " + Math.round((input * 1.688) * 100) / 100+ " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Knot = " + Math.round((input / 1.944) * 100) / 100+ " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Knot = " + Math.round((input * 1.852) * 100) / 100+ " Kilometer Per Hour"; break;
                case "Knot": a = input + " Knot = " + input + " Knot"; break;
            }
        break;
    }

    document.getElementById("OutputS").innerHTML = a;
}
//End of function

//This function converts the different frequencies to one another.
function Frequency(){
    var opOne = document.getElementById("FreOptionOne");
    opOne = opOne.options[opOne.selectedIndex].text;
    var opTwo = document.getElementById("FreOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].text;

    var input = document.getElementById("FreInput").value;

    var a = 0;

    switch(opOne){
        case "Hertz":
            switch(opTwo){
                case "Hertz": a = input + " Hertz = " + input + " Hertz"; break;
                case "Kilohertz": a = input + " Hertz = " + Math.round((input / 1000) * 100) / 100+ " Kilohertz"; break;
                case "Megahertz": a = input + " Hertz = " + Math.round((input / 1e+6) * 100) / 100+ " Megahertz"; break;
                case "Gigahertz": a = input + " Hertz = " + Math.round((input / 1e+9) * 100) / 100+ " Gigahertz"; break;
            }
        break;

        case "Kilohertz":
            switch(opTwo){
                case "Hertz": a = input + " Kilohertz = " + Math.round((input * 1000) * 100) / 100+ " Hertz"; break;
                case "Kilohertz": a = input + " Kilohertz = " + input + " Kilohertz"; break;
                case "Megahertz": a = input + " Kilohertz = " + Math.round((input / 1000) * 100) / 100+ " Megahertz"; break;
                case "Gigahertz": a = input + " Kilohertz = " + Math.round((input / 1e+6) * 100) / 100+ " Gigahertz"; break;
            }
        break;

        case "Megahertz":
            switch(opTwo){
                case "Hertz": a = input + " Megahertz = " + Math.round((input * 1e+6) * 100) / 100+ " Hertz"; break;
                case "Kilohertz": a = input + " Megahertz = " + Math.round((input * 1000) * 100) / 100+ " Kilohertz"; break;
                case "Megahertz": a = input + " Megahertz = " + input + " Megahertz"; break;
                case "Gigahertz": a = input + " Megahertz = " + Math.round((input / 1000) * 100) / 100+ " Gigahertz"; break;
            }
        break;

        case "Gigahertz":
            switch(opTwo){
                case "Hertz": a = input + " Gigahertz = " + Math.round((input / 1e+9) * 100) / 100+ " Hertz"; break;
                case "Kilohertz": a = input + " Gigahertz = " + Math.round((input / 1e+6) * 100) / 100+ " Kilohertz"; break;
                case "Megahertz": a = input + " Gigahertz = " + Math.round((input / 1000) * 100) / 100+ " Megahertz"; break;
                case "Gigahertz": a = input + " Gigahertz = " + input + " Gigahertz"; break;
            }
        break;
    }

    document.getElementById("OutputF").innerHTML = a;
}
//End of function

//This function converts the different Fuels to one another.
function Fuel(){
    var opOne = document.getElementById("FuelOptionOne");
    opOne = opOne.options[opOne.selectedIndex].text;
    var opTwo = document.getElementById("FuelOptionTwo");
    opTwo = opTwo.options[opTwo.selectedIndex].text;

    var input = document.getElementById("FuelInput").value;

    var a = 0;

    switch(opOne){
        case "Kilometer per Liter":
            switch(opTwo){
                case "Kilometer per Liter": a = input + " Kilometer per Liter = " + input + " Kilometer per Liter"; break;
                case "Miles per Gallon": a = input + " Kilometer per Liter = " + Math.round((input * 2.352) * 100) / 100+ " Miles per Gallon"; break;
            }
        break;

        case "Miles per Gallon":
            switch(opTwo){
                case "Kilometer per Liter": a = input + " Miles per Gallon = " + Math.round((input / 2.352) * 100) / 100+ " Kilometer per Liter"; break;
                case "Miles per Gallon": a = input + " Miles per Gallon = " + input + " Miles per Gallon"; break;
            }
        break;
    }

    document.getElementById("OutputFu").innerHTML = a;
}
//End of function