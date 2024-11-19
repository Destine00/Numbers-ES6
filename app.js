const items = [...document.querySelectorAll(".number")];

const updateCount = (elememt) => {
  const value = parseInt(elememt.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      elememt.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    elememt.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
