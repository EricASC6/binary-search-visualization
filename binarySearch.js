"use strict";

// Inserts middle pointer on the DOM
const createMiddleArrow = (array, index) => {
  const middleArrow = document.createElement("i");
  middleArrow.className = "fas fa-arrow-up";
  middleArrow.id = "middle";

  array[index].appendChild(middleArrow);
};

// Function to move the arrows, params -> arrow, the current
// index the arrow is pointing to and the index it needs
// to go to
const moveArrow = (arrow, index, targetIndex) => {
  const dimensions = document.querySelector(".element");

  let margin = window.getComputedStyle(dimensions).marginRight;
  let width = window.getComputedStyle(dimensions).width;

  margin = parseInt(margin.slice(0, margin.length - 2));
  width = parseInt(width.slice(0, width.length - 2));

  let currentX = arrow.style.transform ? arrow.style.transform : "0";
  currentX = currentX.replace(/[^\d.-]/g, "");
  // console.log(`currentX of ${arrow.id} = ${currentX}`);

  let distance = targetIndex - index;
  let pixels = distance * (2 * margin + width);
  arrow.style.transform = `translateX(${pixels + parseInt(currentX)}px)`;
  // console.log(
  //   `${arrow.id} from ${index} to ${targetIndex} travelling ${pixels}px`
  // );

  // console.log(`currentX of ${arrow.id}: ` + (pixels + parseInt(currentX)));
};

// Search algorithm
const search = target => {
  const array = document.querySelector(".array").children;

  let mid = Math.floor((array.length - 1) / 2);
  createMiddleArrow(array, mid);

  const binarySearch = (arr, key, low = 0, high = arr.length - 1) => {
    setTimeout(() => {
      const larrow = document.getElementById("low");
      const harrow = document.getElementById("high");
      const marrow = document.getElementById("middle");

      if (low > high) return;
      moveArrow(marrow, mid, Math.floor((low + high) / 2));

      mid = Math.floor((low + high) / 2);
      // console.log(`Low: ${low},  High: ${high},   Mid: ${mid}`);

      let midNum = parseInt(arr[mid].innerText);
      // console.log("Middle Num: " + midNum);

      if (midNum === key) {
        // console.log(`Found ${key} at index ${mid}`);
        return;
      }

      setTimeout(() => {
        if (midNum > key) {
          moveArrow(harrow, high, mid - 1);
          high = mid - 1;
        } else {
          moveArrow(larrow, low, mid + 1);
          low = mid + 1;
        }

        binarySearch(arr, key, low, high);
      }, 1000);
    }, 1000);
  };

  binarySearch(array, target);
};

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  let target = document.querySelector("#target").value;
  target = parseInt(target);
  search(target);
});
