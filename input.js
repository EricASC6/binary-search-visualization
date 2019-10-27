const input = document.querySelector("#target");

input.addEventListener("input", e => {
  let valid = /^[\d]{1,2}$/;
  let value = e.target.value;

  let validInput = valid.test(value);
  if (!validInput) {
    value = value.slice(0, value.length - 1);
    input.value = value;
  }
});
