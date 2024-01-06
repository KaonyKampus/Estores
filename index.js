document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");
  
    navToggle.addEventListener("click", function () {
      console.log("Click event");
      links.classList.toggle("show-links");
    });
  });