document.addEventListener("DOMContentLoaded", () => {

    const faqBoxes = document.querySelectorAll(".faqbox");

    faqBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const answer = box.nextElementSibling;
            answer.classList.toggle("active");
        });
    });

});