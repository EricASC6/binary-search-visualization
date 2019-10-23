"use strict";

const createMiddleArrow = (array, index) => {
  const middleArrow = document.createElement("i");
  middleArrow.className = "fas fa-arrow-up";
  middleArrow.id = "middle";

  array[index].appendChild(middleArrow);
};

const moveArrow = (arrow, index, targetIndex) => {
  const dimensions = document.querySelector(".element");
  console.log(dimensions);
  let margin = window.getComputedStyle(dimensions).marginRight;
  let width = window.getComputedStyle(dimensions).width;

  margin = parseInt(margin.slice(0, margin.length - 2));
  width = parseInt(width.slice(0, width.length - 2));
  console.log(margin, width);

  let distance = targetIndex - index;
  console.log(`Distance: ${distance}`);
  let pixels = distance * (2 * margin + width);
  console.log(`Pixels: ${pixels}`);
  arrow.style.transform = `translateX(${pixels}px)`;
};

const search = () => {
  let target = document.querySelector("#target").value;
  target = parseInt(target);
  const array = document.querySelector(".array").children;

  let mid = Math.floor((array.length - 1) / 2);
  createMiddleArrow(array, mid);

  let low = 0;
  let high = array.length - 1;

  const binarySearch = (arr, key) => {
    const larrow = document.getElementById("low");
    const harrow = document.getElementById("high");
    const marrow = document.getElementById("middle");

    if (low > high) return -1;
    mid = Math.floor((low + high) / 2);
    console.log("Middle Index: " + mid);
    let midNum = parseInt(arr[mid].innerText);
    console.log("Middle Num: " + midNum);

    if (midNum === key) console.log(mid);

    if (midNum > key) {
      moveArrow(harrow, high, mid - 1);
      high = mid - 1;
      console.log("Greater");
    } else {
      moveArrow(larrow, low, mid + 1);
      low = mid + 1;
      console.log("Lesser");
    }

    // moveArrow(marrow, mid, Math.floor((low + high) / 2));
    // console.log(mid, Math.floor((low + high) / 2));

    binarySearch(arr, key);
  };

  binarySearch(array, target);
};

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  search();
});
