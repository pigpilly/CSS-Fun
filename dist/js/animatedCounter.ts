const counters = document.querySelectorAll<HTMLElement>(`.counter`);
const speed: number = 250;

counters.forEach((counter) => {
  const updateContent = () => {
    const target: number = parseFloat(counter.getAttribute(`data-target`)!);
    const count: number = +counter.innerText;
    const inc: number = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc).toString();
      setTimeout(updateContent, 1);
    } else {
      counter.innerText = target.toString();
    }
  };

  updateContent();
});
