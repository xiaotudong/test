function lcdDigit(Digit) {
    var DigitsArray = loadAllDigits();
    var DigitArray = splitDigitArray(Digit);
    var DigitString = buildDigitString(DigitArray);
    console.log(DigitString);
}

function loadAllDigits() {
    return DigitsArray = [
        ['.', '_', '.', '|', '.', '|', '|', '_', '|'],
        ['.', '.', '.', '.', '.', '|', '.', '.', '|'],
        ['.', '_', '.', '.', '_', '|', '.', '_', '.'],
        ['.', '_', '.', '.', '_', '|', '.', '_', '|'],
        ['.', '.', '.', '|', '_', '|', '.', '.', '|'],
        ['.', '_', '.', '|', '_', '.', '.', '_', '|'],
        ['.', '_', '.', '|', '_', '.', '.', '_', '|'],
        ['.', '_', '.', '.', '.', '|', '.', '.', '|'],
        ['.', '_', '.', '|', '_', '|', '|', '_', '|'],
        ['.', '_', '.', '|', '_', '|', '.', '.', '|']
    ];
}

function splitDigitArray(Digit) {
    var DigitArray = [];
    /*   var chagedigit = Digit;
     for(var i = Digit.toString().length-1 ; i >= 0; i--){
          var num = 0;
          num = chagedigit % 10;
          chagedigit =Math.floor(chagedigit / 10);
          DigitArray[i] = num;
     } */
    DigitArray = Digit.toString().split("");
    for (var i = 0; i < DigitArray.length; i++) {
        DigitArray[i] = Number(DigitArray[i]);
    }
    return DigitArray;
}

function buildDigitString(DigitArray) {
    var DigitString = '';
    var DigitsArray = loadAllDigits();
    var sum = 0;

    for (var i = 0; i < DigitArray.length; i++) {
        for (var j = sum; j < sum + 3; j++) {
            var Digit = DigitArray[i];
            DigitString += DigitsArray[Digit][j];
        }
        if(i != 2){
            DigitString += " ";
        }
        if((i == 2 && j == 3) || (i == 2 && j == 6)) {
            DigitString += "\n";
            i = -1;
            sum += 3;
        }
    }
    return DigitString;
}

