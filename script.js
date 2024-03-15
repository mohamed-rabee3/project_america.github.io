document.querySelector(".bars-menu").addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});
let up = document.querySelector(".up");
window.onscroll = function(){
  this.scrollY >=500 ? up.classList.add("show") : up.classList.remove("show");
}

up.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}