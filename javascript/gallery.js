let scrollContainer = document.querySelector(".card-gallery");
let back = document.getElementById("backward");
let forward = document.getElementById("forward");

back.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    const cardElement = document.querySelector('.card-gallery');
    const cardWidth = cardElement.offsetWidth;
    scrollContainer.scrollLeft -= 642;
})

forward.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    const cardElement = document.querySelector('.card-gallery');
    const cardWidth = cardElement.offsetWidth;
    scrollContainer.scrollLeft += 642;
})
