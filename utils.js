export const labalClicked = (item) => {
  item.addEventListener("keydown", (event) => {
    event.key === "Enter" && item.click();
  });
};
