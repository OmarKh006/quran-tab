const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.addEventListener("keydown", (event) => {
    event.key === "Enter" && label.click();
  });
});
