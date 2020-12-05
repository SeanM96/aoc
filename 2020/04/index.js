const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString();

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const formattedInput = input.split('\n\n').map(e => (e.split('\n'))).map(nested => nested.join());
const inputObjects = formattedInput.map((string) => {  // for each string in array
    const pairs = string.split(/[\ ,]/);  // split by space or comma
    const object = {};                    // create an object
    for (pair of pairs) {                 // for each pair in string
        const parts = pair.split(":");      // split by colon
        if (parts.length == 2) {            // if you get 2 parts after splitting
            object[parts[0]] = parts[1];      // use the first part as a key and the second as a value
        }
    }
    return object;
});

const validEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
const pidRegex = "^\\d{9}$";
const hexRegex = '(#[0-9a-f]{6})';
const numRegex = '/\d+/g';
const wordRegex = '/[a-z]+/g';


function passportFilter(passport) {
    let valid = true;
    const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;
    console.log(passport)
    if (byr < 1920 || byr > 2002) {
        console.log('INVALID BIRTH YEAR: ' + byr)
        valid = false;
    }
    if (iyr < 2010 || iyr > 2020) {
        console.log('INVALID ISSUE YEAR: ' + iyr)
        valid = false;
    }
    if (eyr < 2020 || eyr > 2030) {
        console.log('INVALID EXPIRATION YEAR: ' + eyr)
        valid = false;
    }
    if (!validEcl.includes(ecl)) {
        console.log('INVALID EYE COLOR: ' + ecl)
        valid = false;
    }
    if (!new RegExp(pidRegex).test(pid)) {
        console.log('INVALID PID: ' + pid)
        valid = false;
    }
    if (!new RegExp(hexRegex).test(hcl)) {
        console.log('INVALID HAIR COLOR: ' + hcl)
        valid = false;
    }
    const height = hgt.match(numRegex) && hgt.match(numRegex)[0];
    const measurement = hgt.match(wordRegex) && hgt.match(wordRegex)[0];
    if (measurement === 'cm' && height < 150 || measurement === 'cm' && hgt > 193) {
        valid = false;
    }

    if (measurement === 'in' && height < 59 || measurement === 'in' && hgt > 76) {
        valid = false;
    }
    return valid;
}
function partOne() {
    return inputObjects.filter(passport => {
        return requiredFields.every(field => {
            const containsField = Object.keys(passport).includes(field);
            if (containsField) {
                return true;
            } else { return false };
        });
    });
};

const filtered = partOne().filter(passport => passportFilter(passport)).length;
console.log(new RegExp(hexRegex).test('4a1444'));