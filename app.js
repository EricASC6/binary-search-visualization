"use strict";

const generateRandomArray = () => {
  let length = 10;
  let array = [];
  let random = 100;

  let i = 0;

  while (i < length) {
    let num = Math.floor(Math.random() * random);
    if (!array.includes(num)) {
      array.push(num);
    }

    i++;
  }

  return array.sort((a, b) => a - b);
};
