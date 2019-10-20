"use strict";

const generateRandomArray = () => {
  let length = 10;
  let array = [];
  let random = 100;

  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * random);
    if (!array.includes(num)) {
      array.push(num);
    } else {
      array.push(num + 1);
    }
  }

  return array.sort((a, b) => a - b);
};

const insertArray = arr => {
  const array = document.querySelector(".array");
  array.innerHTML = "";

  arr.forEach(num => {
    const element = document.createElement("div");
    const data = document.createElement("p");
    element.className = "element";
    data.innerHTML = num;
    element.appendChild(data);

    array.appendChild(element);
  });

  return;
};

window.addEventListener("load", () => {
  let randomArr = generateRandomArray();
  insertArray(randomArr);
});

const generate = document.getElementById("generate");

generate.addEventListener("click", () => {
  let randomArr = generateRandomArray();
  insertArray(randomArr);
});
