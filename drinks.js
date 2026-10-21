document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".ingredients-list input[type='checkbox']");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                e.target.closest("li").classList.add("prepared");
            } else {
                e.target.closest("li").classList.remove("prepared");
            }
        });
    });
});