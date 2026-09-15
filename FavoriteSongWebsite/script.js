function animateTitle() {
    const title = document.getElementById("title");

    title.style.transition = "transform 1s, color 1s";
    title.style.transform = "scale(1.3)";
    title.style.color = "blue";

    setTimeout(function () {
        title.style.transform = "scale(1)";
        title.style.color = "#333333";
    }, 1000);
}