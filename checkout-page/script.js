// const decrease = document.querySelectorAll(".material-icons--remove");
// const increase = document.querySelectorAll(".material-icons--add");
// const shippingCost = document.querySelector(".costs__price");
// let quantity = document.querySelector(".item__piece");

// let count = 3;
// increase.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//     console.log(typeof shippingCost.innerHTML.slice(1));
//     quantity.value = count++;
//   });
// });

// decrease.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("remove");
//     shippingCost.innerHTML = "42069";
//     quantity.value = count--;
//   });
// });
let items = document.querySelectorAll(".email__input");
function validate() {
  let isEmpty;
  const validInputs = Array.from(items).filter(
    (input) => input.value.trim() !== ""
  );
  return validInputs.length;
}

function handleClick() {
  if (validate() === 7) {
    alert("success");
    items.value = "";
  }
}
