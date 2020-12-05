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
const hexRegex = '(#[0-9a-fA-F]{6})';
const hgtRegex = /^(5[9](in))|^(6[0-9](in))|^(7[0-6](in))|^(15[0-9](cm))|^(16[0-9](cm))|^(17[0-9](cm))|^(18[0-9](cm))|^(19[0-3](cm))/g

function passportFilter(passport) {
    const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;
    if (byr < 1920 || byr > 2002) {
        return false;
    }
    if (iyr < 2010 || iyr > 2020) {
        return false;
    }
    if (eyr < 2020 || eyr > 2030) {
        return false;
    }
    if (!validEcl.includes(ecl)) {
        return false;
    }
    if (!new RegExp(pidRegex).test(pid)) {
        return false;
    }
    if (!new RegExp(hexRegex).test(hcl)) {
        return false;
    }
    if(!hgt.match(hgtRegex)) {
        return false;
    }
    return true;
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

const part2 = partOne().filter(passport => passportFilter(passport)).length;
console.log(partOne().length);
console.log(part2)