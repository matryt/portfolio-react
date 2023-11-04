let projects = document.querySelector(".projects");
console.log("Coucou");

window.addEventListener("resize", () => {
    let wd = Math.floor(window.innerWidth / 360) * 360;
    projects.style.width = wd + "px";
});