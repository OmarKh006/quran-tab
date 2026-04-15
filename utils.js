export const labalClicked = (item) => {
  item.addEventListener("keydown", (event) => {
    event.key === "Enter" && item.click();
  });
};

export const observeElements = (sectionElements) => {
  const options = { threshold: 1 };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sectionElements.forEach((element) => {
    observer.observe(element);
  });
};
