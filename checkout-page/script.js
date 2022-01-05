const increase = document.querySelector(".number");

increase.addEventListener("click", (event) => {
  if (event.target.className === "material-icons--add") {
    console.log("click");
  }
});
