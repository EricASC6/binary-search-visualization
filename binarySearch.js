"use strict";

const binarySearch = (arr, key, low = 0, high = arr.length - 1) => {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  let midNum = arr[mid];

  if (midNum === key) return mid;

  if (midNum > key) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }

  return binarySearch(arr, key, low, high);
};

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {});
