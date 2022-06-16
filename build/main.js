"use strict";
let array = [50, 23, 35, 1, 100, 360, 240, -10, 21, 1, 50, 100, -100, 250, 360];
for (let iterationIndex = 1; iterationIndex < array.length; iterationIndex++) {
    for (let shiftIndex = iterationIndex - 1; shiftIndex >= 0 && array[shiftIndex] > array[shiftIndex + 1]; shiftIndex--) {
        console.log(`
    Đổi số ${array[shiftIndex]} \t tại vị trí ${shiftIndex} 
    với số ${array[shiftIndex + 1]} \t tại vị trí ${shiftIndex + 1}
    `);
        let current = array[shiftIndex + 1];
        array[shiftIndex + 1] = array[shiftIndex];
        array[shiftIndex] = current;
    }
}
console.log(`
Mảng sau khi sắp xếp
[${array}]`);
