

function myFunction() {
    //this gets all elements which share the class list of display names.
    var names = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"); 
    var index = 0;
    
    try {
        // for each display name found in the HTMLCollection randomise a number and then choose a name from the switch case
        for (index = 0; index < names.length; index++) {

            var number = 0;
            var baseballName;

            number = Math.floor(Math.random()* 22 ) + 1;

            switch (number) {
                case 1:
                    baseballName = "SLEVE MCDICHAEL";
                    break;
                case 2:
                    baseballName = "ONSON SWEEMEY";
                    break;
                case 3:
                    baseballName = "DARRYL ARCHIDELD";
                    break;
                case 4:
                    baseballName = "ANATOLI SMORIN";
                    break;
                case 5:
                    baseballName = "REY MCSRIFF";
                    break;
                case 6:
                    baseballName = "GLENALLEN MIXON";
                    break;
                case 7:
                    baseballName = "MARIO MCRLAWIN";
                    break;
                case 8:
                    baseballName = "RAUL CHAMGERLAIN";
                    break;
                case 9:
                    baseballName = "KEVIN NOGILNY";
                    break;
                case 10:
                    baseballName = "TONY SMEHRIK";
                    break;
                case 11:
                    baseballName = "BOBSON DUGNUTT";
                    break;
                case 12:
                    baseballName = "WILLIE DUSTICE";
                    break;
                case 13:
                    baseballName = "JEROMY GRIDE";
                    break;
                case 14:
                    baseballName = "SCOTT DOURQUE";
                    break;
                case 15:
                    baseballName = "SHOWN FURCOTTE";
                    break;
                case 16:
                    baseballName = "DEAN WESREY";
                    break;
                case 17:
                    baseballName = "MIKE TRUK";
                    break;
                case 18:
                    baseballName = "DWIGT RORTUGAL";
                    break;
                case 19:
                    baseballName = "TIM SANDAELE";
                    break;
                case 20:
                    baseballName = "KARL DANDELTON";
                    break;
                case 21:
                    baseballName = "MIKE SERNANDEZ";
                    break;
                case 22:
                    baseballName = "TODD BONZALEZ";
                    break;

                default:
                    baseballName = "SLEVE MCDICHAEL";
                    break;
            }


            //writes new name to the innerHTML of the display name a href
            names[index].innerHTML = baseballName;

            if (names.item(index).classList.contains("new-name")) {
                //does not add .new-name if it already exists
            }
            else {
                //adds .new-name to the element for styling
                names.item(index).className = " new-name";
            }
        }
    } catch (error) {
        //errors are simply logged
        console.log(error);
    }
}

//name swap runs every second to make sure when twitter refreshes the names are changed.
window.setInterval(function () {
    myFunction();
}, 1000);
