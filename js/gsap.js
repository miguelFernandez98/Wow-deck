const faqLinks = document.querySelectorAll("#faq");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-button");
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("accept-cookies");
const rejectCookies = document.getElementById("reject-cookies");
const sectionGoogle = document.querySelector(".section-google");

faqLinks.forEach((faq) => {
  faq.addEventListener("click", () => {
    gsap.to(overlay, { duration: 0.5, display: "flex", opacity: 1 });
    gsap.to(closeButton, { duration: 0.5, display: "block" });
    gsap.to(document.body, { overflow: "hidden" });
  });
});
closeButton.addEventListener("click", () => {
  gsap.to(overlay, { duration: 0.5, display: "none", opacity: 0 });
  gsap.to(document.body, { overflow: "auto" });
});

sectionGoogle.addEventListener("click", function () {
  window.open(
    "https://www.google.com/search?sca_esv=eba07bfb50991dad&q=Wow-Deck&stick=H4sIAAAAAAAAAONgU1I1qDBLNLAwMEozNbUwtjBNTLO0MqiwsExKTTVJTUsxSUwxSDNNWsTKEZ5fruuSmpwNACxn3Y00AAAA&mat=CfyWlTClQ8NH&ved=2ahUKEwi_0KyRkIuLAxULQkEAHavjNf4QrMcEegQIKBAC",
    "_blank"
  );
});

let question = document.querySelectorAll(".question");

question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
      active.nextElementSibling.classList.remove("expanded");
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.classList.add("expanded");
    } else {
      answer.style.maxHeight = 0;
      answer.classList.remove("expanded");
    }
  });
});

// Verifica si el usuario ya aceptó las cookies
if (!localStorage.getItem("cookiesAccepted")) {
  // Muestra el aviso de cookies
  gsap.to(cookieBanner, { duration: 0.5, bottom: 0 });
}

// Cuando el usuario acepta las cookies
acceptCookies.addEventListener("click", () => {
  // Guarda la decisión del usuario en el almacenamiento local
  localStorage.setItem("cookiesAccepted", "true");

  // Oculta el aviso de cookies
  gsap.to(cookieBanner, { duration: 0.5, bottom: "-2000px" });
});

// Cuando el usuario rechaza las cookies
rejectCookies.addEventListener("click", () => {
  // Oculta el aviso de cookies
  gsap.to(cookieBanner, { duration: 0.5, bottom: "-2000px" });
});
