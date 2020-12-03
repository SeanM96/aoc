const input = require('./input.json');
let treeCount = 0;

function solution(row, position, slopeRight, slopeDown) {
    if (row < input.length) {
        if (position >= input[row].length) {
            position -= input[row].length
        }
        const newPos = input[row][position];
        if (newPos === '#') {
            treeCount++;
        }
        solution(row + slopeDown, position + slopeRight, slopeRight, slopeDown)
    }
    return treeCount;
}
const a = solution(0, 0, 1, 1)
treeCount = 0
const b = solution(0, 0, 3, 1)
treeCount = 0
const c = solution(0, 0, 5, 1)
treeCount = 0
const d = solution(0, 0, 7, 1)
treeCount = 0
const e = solution(0, 0, 1, 2)

console.log(a * b * c * d * e)



