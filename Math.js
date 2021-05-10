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
function Distance() {
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
                case "Feet": a = input + " Inches = " + parseFloat(input * 12).toFixed(4) + " Feet"; break;
                case "Yard": a = input + " Inches = " + parseFloat(input/36).toFixed(4) + " Yards"; break;
                case "Mile": a = input + " Inches = " + parseFloat(input/63360).toFixed(4) + " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Kilometers"; break;
            }
        break;

        case "Feet":
            switch(opTwo){
                case "Inch": a = input + " Feet = " + parseFloat(input * 12).toFixed(4) + " Inches"; break;
                case "Feet": a = input + " Feet = " + input + " Feet"; break;
                case "Yard": a = input + " Feet = " + parseFloat(input / 3).toFixed(4) + " Yards"; break;
                case "Mile": a = input + " Feet = " + parseFloat(input / 5280).toFixed(4) + " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Millimeters"; break;
                case "Centimeter": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Kilometers"; break;
            }
        break;

        case "Yard":
            switch(opTwo){
                case "Inch": a = input + " Yards = " + parseFloat(input * 36).toFixed(4) + " Inches"; break;
                case "Feet": a = input + " Yards = " + parseFloat(input * 3).toFixed(4) + " Feet"; break;
                case "Yard": a = input + " Yards = " + input + " Yards"; break;
                case "Mile": a = input + " Yards = " + parseFloat(input / 1760).toFixed(4) + " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Millimeters"; break;
                case "Centimeters": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Kilometers"; break;
            }
        break;

        case "Mile":
            switch(opTwo){
                case "Inch": a = input + " Miles = " + parseFloat(input * 63360).toFixed(4) + " Inches"; break;
                case "Feet": a = input + " Miles = " + parseFloat(input * 5280).toFixed(4) + " Feet"; break;
                case "Yard": a = input + " Miles = " + parseFloat(input * 1760).toFixed(4) + " Yards"; break;
                case "Mile": a = input + " Miles = " + input + " Miles"; break;
                case "Millimeter": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Millimeters"; break;
                case "Centimeters": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Centimeters"; break;
                case "Meter": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Meters"; break;
                case "Kilometer": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Kilometers"; break;
            }
        break;

        case "Millimeter":
                switch(opTwo){
                    case "Inch": a = input + " Millimeters = " + parseFloat(input / 25.4).toFixed(4) + " Inches"; break;
                    case "Feet": a = input + " Millimeters = " + parseFloat(input / 305).toFixed(4) + " Feet"; break;
                    case "Yard": a = input + " Millimeters = " + parseFloat(input / 914).toFixed(4) + " Yards"; break;
                    case "Mile": a = input + " Millimeters = " + parseFloat(input / 1.609e+6).toFixed(4) + " Miles"; break;
                    case "Millimeter": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Millimeters"; break;
                    case "Centimeters": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Centimeters"; break;
                    case "Meter": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Meters"; break;
                    case "Kilometer": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Kilometers"; break;
                }
        break;

            case "Centimeter":
                switch(opTwo){
                    case "Inch": a = input + " Centimeters = " + parseFloat(input / 2.54).toFixed(4) + " Inches"; break;
                    case "Feet": a = input + " Centimeters = " + parseFloat(input / 30.48).toFixed(4) + " Feet"; break;
                    case "Yard": a = input + " Centimeters = " + parseFloat(input / 91.44).toFixed(4) + " Yards"; break;
                    case "Mile": a = input + " Centimeters = " + parseFloat(input / 160934).toFixed(4) + " Miles"; break;
                    case "Millimeter": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Millimeters"; break;
                    case "Centimeters": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Centimeters"; break;
                    case "Meter": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Meters"; break;
                    case "Kilometer": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Kilometers"; break;
                }
            break;

            case "Meter":
                switch(opTwo){
                    case "Inch": a = input + " Meters = " + parseFloat(input / 39.37).toFixed(4) + " Inches"; break;
                    case "Feet": a = input + " Meters = " + parseFloat(input * 3.281).toFixed(4) + " Feet"; break;
                    case "Yard": a = input + " Meters = " + parseFloat(input * 1.094).toFixed(4) + " Yards"; break;
                    case "Mile": a = input + " Meters = " + parseFloat(input / 1609).toFixed(4) + " Miles"; break;
                    case "Millimeter": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Millimeters"; break;
                    case "Centimeters": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Centimeters"; break;
                    case "Meter": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Meters"; break;
                    case "Kilometer": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Kilometers"; break;
                }
            break;

            case "Kilometer":
                switch(opTwo){
                    case "Inch": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Inches"; break;
                    case "Feet": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Feet"; break;
                    case "Yard": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Yards"; break;
                    case "Mile": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Miles"; break;
                    case "Millimeter": a = input + " Kilometers = " + parseFloat(input * 39370).toFixed(4) + " Millimeters"; break;
                    case "Centimeters": a = input + " Kilometers = " + parseFloat(input * 3281).toFixed(4) + " Centimeters"; break;
                    case "Meter": a = input + " Kilometers = " + parseFloat(input * 1094).toFixed(4) + " Meters"; break;
                    case "Kilometer": a = input + " Kilometers = " + parseFloat(input / 1.609).toFixed(4) + " Kilometers"; break;
                }
            break;
    }

    document.getElementById("OutputD").innerHTML = a;
}
//End of function.

//This function converts the different weights to one another.
function Weight() {
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
                case "Ounce": a = input + " Pounds = " + parseFloat(input * 16).toFixed(4) + " Ounces"; break;
                case "Gram": a = input + " Pounds = " + parseFloat(input * 454).toFixed(4) + " Grams"; break;
                case "Kilogram": a = input + " Pounds = " + parseFloat(input / 2.205).toFixed(4) + " Kilograms"; break;
                case "US Ton": a = input + " Pounds = " + parseFloat(input / 2000).toFixed(4) + " US Tons"; break;
                case "UK Ton": a = input + " Pounds = " + parseFloat(input / 2205).toFixed(4) + " UK Tons"; break;
            }
        break;

        case "Ounce":
            switch(opTwo){
                case "Pound": a = input + " Ounces = " + parseFloat(input / 16).toFixed(4) + " Pounds"; break;
                case "Ounce": a = input + " Ounces = " + input + " Ounces"; break;
                case "Gram": a = input + " Ounces = " + parseFloat(input * 28.35).toFixed(4) + " Grams"; break;
                case "Kilogram": a = input + " Ounces = " + parseFloat(input / 35.274).toFixed(4) + " Kilograms"; break;
                case "US Ton": a = input + " Ounces = " + parseFloat(input / 32000).toFixed(4) + " US Tons"; break;
                case "UK Ton": a = input + " Ounces = " + parseFloat(input / 35274).toFixed(4) + " UK Tons"; break;
            }
        break;

        case "Gram":
            switch(opTwo){
                case "Pound": a = input + " Grams = " + parseFloat(input / 454).toFixed(4) + " Pounds"; break;
                case "Ounce": a = input + " Grams = " + parseFloat(input / 28.35).toFixed(4) + " Ounces"; break;
                case "Gram": a = input + " Grams = " + input + " Grams"; break;
                case "Kilogram": a = input + " Grams = " + parseFloat(input / 1000).toFixed(4) + " Kilograms"; break;
                case "US Ton": a = input + " Gram = " + parseFloat(input / 907185).toFixed(4) + " US Tons"; break;
                case "UK Ton": a = input + " Gram = " + parseFloat(input / 1e+6).toFixed(4) + " UK Tons"; break;
            }
        break;

        case "Kilogram":
            switch(opTwo){
                case "Pound": a = input + " Kilograms = " + parseFloat(input * 2.205).toFixed(4) + " Pounds"; break;
                case "Ounce": a = input + " Kilograms = " + parseFloat(input * 35.274).toFixed(4) + " Ounces"; break;
                case "Gram": a = input + " Kilograms = " + parseFloat(input * 1000).toFixed(4) + " Grams"; break;
                case "Kilogram": a = input + " Kilograms = " + input + " Kilograms"; break;
                case "US Ton": a = input + " Kilograms = " + parseFloat(input / 907).toFixed(4) + " US Tons"; break;
                case "UK Ton": a = input + " Kilograms = " + parseFloat(input / 1000).toFixed(4) + " UK Tons"; break;
            }
        break;

        case "US Ton":
            switch(opTwo){
                case "Pound": a = input + " US Ton = " + parseFloat(input * 2000).toFixed(4) + " Pounds"; break;
                case "Ounce": a = input + " US Ton = " + parseFloat(input * 32000).toFixed(4) + " Ounces"; break;
                case "Gram": a = input + " US Ton = " + parseFloat(input * 907185).toFixed(4) + " Grams"; break;
                case "Kilogram": a = input + " US Ton = " + parseFloat(input * 907).toFixed(4) + " Kilograms"; break;
                case "US Ton": a = input + " US Ton = " + input + " US Tons"; break;
                case "UK Ton": a = input + " US Ton = " + parseFloat(input / 1.102).toFixed(4) + " UK Tons"; break;
            }
        break;

        case "UK Ton":
            switch(opTwo){
                case "Pound": a = input + " UK Ton = " + parseFloat(input * 2205).toFixed(4) + " Pounds"; break;
                case "Ounce": a = input + " UK Ton = " + parseFloat(input * 35274).toFixed(4) + " Ounces"; break;
                case "Gram": a = input + " UK Ton = " + parseFloat(input * 1e+6).toFixed(4) + " Grams"; break;
                case "Kilogram": a = input + " UK Ton = " + parseFloat(input * 1000).toFixed(4) + " Kilograms"; break;
                case "US Ton": a = input + " UK Ton = " + parseFloat(input * 1.102).toFixed(4) + " US Tons"; break;
                case "UK Ton": a = input + " UK Ton = " + input + " UK Tons"; break;
            }
        break;
    }

    document.getElementById("OutputW").innerHTML = a;
}
//End of function

//This function converts the different weights to one another.
function Temperature() {
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
                case "Celsius": a = input + " Fahrenheit = " + parseFloat((input - 32) * 5/9).toFixed(4) + " Celsius"; break;
                case "Kelvin": a = input + " Fahrenheit = " + parseFloat((input -32) * 5/9 + 273.15).toFixed(4) + " Kelvin"; break;
            }
        break;

        case "Celsius":
            switch(opTwo){
                case "Fahrenheit": a = input + " Celsius = " + parseFloat((input * 5/9) +32).toFixed(4) + " Fahrenheit"; break;
                case "Celsius": a = input + " Celsius = " + input + " Celsius"; break;
                case "Kelvin": a = input + " Celsius = " + parseFloat(input + 273.15).toFixed(4) + " Kelvin"; break;
            }
        break;

        case "Kelvin":
            switch(opTwo){
                case "Fahrenheit": a = input + " Kelvin = " + parseFloat((input - 273.15) * 9/5 + 32).toFixed(4) + " Fahrenheit"; break;
                case "Celsius": a = input + " Kelvin = " + parseFloat(input - 273.15).toFixed(4) + " Celsius"; break;
                case "Kelvin": a = input + " Kelvin = " + input + " Kelvin"; break;
            }
        break;
    }

    document.getElementById("OutputTe").innerHTML = a;
}
//End of function

//This function converts the different times to one another.
function Time() {
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
                case "Minutes": a = input + " Seconds = " + parseFloat(input / 60).toFixed(4) + " Minutes"; break;
                case "Hours": a = input + " Seconds = " + parseFloat(input / 3600).toFixed(4) + " Hours"; break;
                case "Days": a = input + " Seconds = " + parseFloat(input / 86400).toFixed(4) + " Days"; break;
                case "Months": a = input + " Seconds = " + parseFloat(input / 2.628e+6).toFixed(4) + " Months"; break;
                case "Years": a = input + " Seconds = " + parseFloat(input / 3.154e+7).toFixed(4) + " Years"; break;
            }
        break;

        case "Minutes":
            switch(opTwo){
                case "Seconds": a = input + " Minutes = " + parseFloat(input * 60).toFixed(4) + " Seconds"; break;
                case "Minutes": a = input + " Minutes = " + input + " Minutes"; break;
                case "Hours": a = input + " Minutes = " + parseFloat(input / 60).toFixed(4) + " Hours"; break;
                case "Days": a = input + " Minutes = " + parseFloat(input / 1440).toFixed(4) + " Days"; break;
                case "Months": a = input + " Minutes = " + parseFloat(input / 43800).toFixed(4) + " Months"; break;
                case "Years": a = input + " Minutes = " + parseFloat(input / 525600).toFixed(4) + " Years"; break;
            }
        break;

        case "Hours":
            switch(opTwo){
                case "Seconds": a = input + " Hours = " + parseFloat(input * 3600).toFixed(4) + " Seconds"; break;
                case "Minutes": a = input + " Hours = " + parseFloat(input * 60).toFixed(4) + " Minutes"; break;
                case "Hours": a = input + " Hours = " + input + " Hours"; break;
                case "Days": a = input + " Hours = " + parseFloat(input / 24).toFixed(4) + " Days"; break;
                case "Months": a = input + " Hours = " + parseFloat(input / 730).toFixed(4) + " Months"; break;
                case "Years": a = input + " Hours = " + parseFloat(input / 8760).toFixed(4) + " Years"; break;
            }
        break;

        case "Days":
            switch(opTwo){
                case "Seconds": a = input + " Days = " + parseFloat(input * 86400).toFixed(4) + " Seconds"; break;
                case "Minutes": a = input + " Days = " + parseFloat(input * 1440).toFixed(4) + " Minutes"; break;
                case "Hours": a = input + " Days = " + parseFloat(input * 24).toFixed(4) + " Hours"; break;
                case "Days": a = input + " Days = " + input + " Days"; break;
                case "Months": a = input + " Days = " + parseFloat(input / 30.417).toFixed(4) + " Months"; break;
                case "Years": a = input + " Days = " + parseFloat(input / 365).toFixed(4) + " Years"; break;
            }
        break;

        case "Months":
            switch(opTwo){
                case "Seconds": a = input + " Months = " + parseFloat(input * 2.628e+6).toFixed(4) + " Seconds"; break;
                case "Minutes": a = input + " Months = " + parseFloat(input * 43800).toFixed(4) + " Minutes"; break;
                case "Hours": a = input + " Months = " + parseFloat(input * 730).toFixed(4) + " Hours"; break;
                case "Days": a = input + " Months = " + parseFloat(input * 30.417).toFixed(4) + " Days"; break;
                case "Months": a = input + " Months = " + input + " Months"; break;
                case "Years": a = input + " Months = " + parseFloat(input / 12).toFixed(4) + " Years"; break;
            }
        break;

        case "Years":
            switch(opTwo){
                case "Seconds": a = input + " Years = " + parseFloat(input * 3.154e+7).toFixed(4) + " Seconds"; break;
                case "Minutes": a = input + " Years = " + parseFloat(input * 525600).toFixed(4) + " Minutes"; break;
                case "Hours": a = input + " Years = " + parseFloat(input * 8760).toFixed(4) + " Hours"; break;
                case "Days": a = input + " Years = " + parseFloat(input * 365).toFixed(4) + " Days"; break;
                case "Monts": a = input + " Years = " + parseFloat(input * 12).toFixed(4) + " Months"; break;
                case "Years": a = input + " Years = " + input + " Years"; break;
            }
        break;
    }

    document.getElementById("OutputTi").innerHTML = a;
}
//End of function

//This function converts the different speeds to one another.
function Speed() {
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
                case "Feet Per Second": a = input + " Miles Per Hour = " + parseFloat(input * 1.467).toFixed(4) + " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Miles Per Hour = " + parseFloat(input / 2.237).toFixed(4) + " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Miles Per Hour = " + parseFloat(input * 1.609).toFixed(4) + " Kilometer Per Hour"; break;
                case "Knot": a = input + " Miles Per Hour = " + parseFloat(input / 1.151).toFixed(4) + " Knot"; break;
            }
        break;

        case "Feet Per Second":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Feet Per Second = " + parseFloat(input / 1.467).toFixed(4) + " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Feet Per Second = " + input + " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Feet Per Second = " + parseFloat(input / 3.281).toFixed(4) + " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Feet Per Second = " + parseFloat(input * 1.097).toFixed(4) + " Kilometer Per Hour"; break;
                case "Knot": a = input + " Feet Per Second = " + parseFloat(input / 1.688).toFixed(4) + " Knot"; break;
            }
        break;

        case "Meters Per Second":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Meters Per Second = " + parseFloat(input * 2.237).toFixed(4) + " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Meters Per Second = " + parseFloat(input * 3.281).toFixed(4) + " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Meters Per Second = " + input + " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Meters Per Second = " + parseFloat(input * 3.6).toFixed(4) + " Kilometer Per Hour"; break;
                case "Knot": a = input + " Meters Per Second = " + parseFloat(input * 1.944).toFixed(4) + " Knot"; break;
            }
        break;

        case "Kilometer Per Hour":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Kilometer Per Hour = " + parseFloat(input / 1.609).toFixed(4) + " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Kilometer Per Hour = " + parseFloat(input / 1.097).toFixed(4) + " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Kilometer Per Hour = " + parseFloat(input / 3.6).toFixed(4) + " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Kilometer Per Hour = " + input + " Kilometer Per Hour"; break;
                case "Knot": a = input + " Kilometer Per Hour = " + parseFloat(input / 1.852).toFixed(4) + " Knot"; break;
            }
        break;

        case "Knot":
            switch(opTwo){
                case "Miles Per Hour": a = input + " Knot = " + parseFloat(input * 1.151).toFixed(4) + " Miles Per Hour"; break;
                case "Feet Per Second": a = input + " Knot = " + parseFloat(input * 1.688).toFixed(4) + " Feet Per Second"; break;
                case "Meters Per Second": a = input + " Knot = " + parseFloat(input / 1.944).toFixed(4) + " Meters Per Second"; break;
                case "Kilometer Per Hour": a = input + " Knot = " + parseFloat(input * 1.852).toFixed(4) + " Kilometer Per Hour"; break;
                case "Knot": a = input + " Knot = " + input + " Knot"; break;
            }
        break;
    }

    document.getElementById("OutputS").innerHTML = a;
}
//End of function

//This function converts the different frequencies to one another.
function Frequency() {
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
                case "Kilohertz": a = input + " Hertz = " + parseFloat(input / 1000).toFixed(4) + " Kilohertz"; break;
                case "Megahertz": a = input + " Hertz = " + parseFloat(input / 1e+6).toFixed(4) + " Megahertz"; break;
                case "Gigahertz": a = input + " Hertz = " + parseFloat(input / 1e+9).toFixed(4) + " Gigahertz"; break;
            }
        break;

        case "Kilohertz":
            switch(opTwo){
                case "Hertz": a = input + " Kilohertz = " + parseFloat(input * 1000).toFixed(4) + " Hertz"; break;
                case "Kilohertz": a = input + " Kilohertz = " + input + " Kilohertz"; break;
                case "Megahertz": a = input + " Kilohertz = " + parseFloat(input / 1000).toFixed(4) + " Megahertz"; break;
                case "Gigahertz": a = input + " Kilohertz = " + parseFloat(input / 1e+6).toFixed(4) + " Gigahertz"; break;
            }
        break;

        case "Megahertz":
            switch(opTwo){
                case "Hertz": a = input + " Megahertz = " + parseFloat(input * 1e+6).toFixed(4) + " Hertz"; break;
                case "Kilohertz": a = input + " Megahertz = " + parseFloat(input * 1000).toFixed(4) + " Kilohertz"; break;
                case "Megahertz": a = input + " Megahertz = " + input + " Megahertz"; break;
                case "Gigahertz": a = input + " Megahertz = " + parseFloat(input / 1000).toFixed(4) + " Gigahertz"; break;
            }
        break;

        case "Gigahertz":
            switch(opTwo){
                case "Hertz": a = input + " Gigahertz = " + parseFloat(input / 1e+9).toFixed(4) + " Hertz"; break;
                case "Kilohertz": a = input + " Gigahertz = " + parseFloat(input / 1e+6).toFixed(4) + " Kilohertz"; break;
                case "Megahertz": a = input + " Gigahertz = " + parseFloat(input / 1000).toFixed(4) + " Megahertz"; break;
                case "Gigahertz": a = input + " Gigahertz = " + input + " Gigahertz"; break;
            }
        break;
    }

    document.getElementById("OutputF").innerHTML = a;
}
//End of function

//This function converts the different Fuels to one another.
function Fuel() {
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
                case "Miles per Gallon": a = input + " Kilometer per Liter = " + parseFloat(input * 2.352).toFixed(4) + " Miles per Gallon"; break;
            }
        break;

        case "Miles per Gallon":
            switch(opTwo){
                case "Kilometer per Liter": a = input + " Miles per Gallon = " + parseFloat(input / 2.352).toFixed(4) + " Kilometer per Liter"; break;
                case "Miles per Gallon": a = input + " Miles per Gallon = " + input + " Miles per Gallon"; break;
            }
        break;
    }

    document.getElementById("OutputFu").innerHTML = a;
}
//End of function