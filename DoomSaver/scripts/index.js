document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("mainButton");
  button.addEventListener("click", () => {
    ButtonPressed();
  });
});

function ButtonPressed() {
    console.log("Test Log");
}