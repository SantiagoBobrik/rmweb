document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  });
});
// select links
const allLinks = document.querySelectorAll("header ul li");
const home = document.querySelector("#home");
const contacto = document.querySelector("#contacto");
const nosotros = document.querySelector("#nosotros");
const servicios = document.querySelector("#servicios");

// select sections

const sectionTop = document.querySelector("#home");

const sectionNosotros = document.querySelector("#empresa");
const sectionContact = document.querySelector("#contact");
const sectionService = document.querySelector("#services");

function changeLinkState() {
  console.log(window.scrollY);
  // home
  if (window.scrollY >= sectionTop.offsetTop) {
    //console.log("BANNER");

    allLinks.forEach(link => {
      link.classList.remove("active");
    });
    home.classList.add("active");
  }

  if (window.scrollY + 200 >= sectionContact.offsetTop) {
    //console.log("CONTACTO");

    allLinks.forEach(link => {
      link.classList.remove("active");
    });
    contacto.classList.add("active");
  }

  if (window.scrollY + 200 >= sectionService.offsetTop) {
    allLinks.forEach(link => {
      link.classList.remove("active");
    });
    servicios.classList.add("active");
  }
  if (window.scrollY + 200 >= sectionNosotros.offsetTop) {
    console.log("EMPRESA");

    allLinks.forEach(link => {
      link.classList.remove("active");
    });
    nosotros.classList.add("active");
  }
}

window.addEventListener("scroll", changeLinkState);
