describe('unit test',function () {
    describe('splitDigitArray',function () {
        var Digit = 910;

        it('show DigitArray',function () {
            var DigitArray = splitDigitArray(Digit);
            var expectText = [9,1,0];
            expect(DigitArray).toEqual(expectText);
        });
    });

    describe('buildDigitsString',function () {
        var DigitArray = [9,1,0];
        var DigitsArray = {
            0: ['.', '_', '.', '|', '.', '|', '|', '_', '|'],
            1: ['.', '.', '.', '.', '.', '|', '.', '.', '|'],
            2: ['.', '_', '.', '.', '_', '|', '.', '_', '.'],
            3: ['.', '_', '.', '.', '_', '|', '.', '_', '|'],
            4: ['.', '.', '.', '|', '_', '|', '.', '.', '|'],
            5: ['.', '_', '.', '|', '_', '.', '.', '_', '|'],
            6: ['.', '_', '.', '|', '_', '.', '.', '_', '|'],
            7: ['.', '_', '.', '.', '.', '|', '.', '.', '|'],
            8: ['.', '_', '.', '|', '_', '|', '|', '_', '|'],
            9: ['.', '_', '.', '|', '_', '|', '.', '.', '|']
        }

        it('show DigitsString',function () {
            var DigitsString = buildDigitString(DigitArray);
            var expectText = '._. ... ._.\n' +
                             '|_| ..| |.|\n' +
                             '..| ..| |_|';
            expect(DigitsString).toEqual(expectText);
        });
    });
});

describe('Integration test',function () {
    describe('lcdDigit',function () {
        var Digit = 910;

        it('show DigitString',function () {
            spyOn(console, 'log');
            var DigitString = lcdDigit(Digit);
            var expectText = '._. ... ._.\n' +
                             '|_| ..| |.|\n' +
                             '..| ..| |_|';
            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});

