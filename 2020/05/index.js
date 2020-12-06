const input = require('./input.json')
const lower = 'F';
const upper = 'B';

const columnLower = 'L'
const columnUpper = 'R'
let rowRanges = [0, 127]
let columnRanges = [0,7]

const newInput = input.map(code => {
    rowRanges = [0, 127];
    columnRanges = [0,7]
    for (let i = 0; i < code.length - 3; i++) {
        switch (code[i]) {
            case lower:
                rowRanges = [rowRanges[0], Math.floor(rowRanges[1] - ((rowRanges[1] - rowRanges[0]) / 2))]
                break;
            case upper:
                rowRanges = [Math.ceil(rowRanges[0] + (rowRanges[1] - rowRanges[0] ) / 2), rowRanges[1]]
                break;
        }
    }
    for(let i = code.length - 3; i < code.length; i++) {
        switch (code[i]) {
            case columnLower:
                columnRanges = [columnRanges[0], Math.floor(columnRanges[1] - ((columnRanges[1] - columnRanges[0]) / 2))]
                break;
            case columnUpper:
                columnRanges = [Math.ceil(columnRanges[0] + (columnRanges[1] - columnRanges[0] ) / 2), columnRanges[1]]
                break;
        }
    }
return (rowRanges[0] * 8) + columnRanges[0] 
})

const sorted = newInput.sort((a,b) => a-b);
sorted.every((element, index) => {
    if(element + 2 === sorted[index + 1]) {
        thisOne = element + 1;
        return false;
    }
    return true
});