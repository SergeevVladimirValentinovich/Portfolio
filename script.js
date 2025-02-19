document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let value = bar.getAttribute("data-value");
        bar.style.width = value + "%";
    });
});
