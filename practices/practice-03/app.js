// Element select karein
const paragraph = document.getElementById("demo");
const button = document.getElementById("changeText");

// Event listener add karein
button.addEventListener("click", () => {
  paragraph.textContent = "Text changed!";
});