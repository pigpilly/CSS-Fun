"use strict";
const counters = document.querySelectorAll(`.counter`);
const speed = 250;
counters.forEach((counter) => {
    const updateContent = () => {
        const target = parseFloat(counter.getAttribute(`data-target`));
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc).toString();
            setTimeout(updateContent, 1);
        }
        else {
            counter.innerText = target.toString();
        }
    };
    updateContent();
});
