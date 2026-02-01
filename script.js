// const toggle = document.getElementById("theme-toggle");
// toggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   toggle.textContent = document.body.classList.contains("dark-mode")
//     ? "☀️"
//     : "🌙";
// });

// const text = "Frontend Web Developer";
// let i = 0;
// const typing = document.getElementById("typing-text");

// function type() {
//   if (i < text.length) {
//     typing.innerHTML += text.charAt(i);
//     i++;
//     setTimeout(type, 100);
//   }
// }
// type();

// window.addEventListener("scroll", () => {
//   document.querySelectorAll(".reveal").forEach((el) => {
//     const top = el.getBoundingClientRect().top;
//     if (top < window.innerHeight - 100) {
//       el.classList.add("active");
//     }
//   });
// });


// =======================
// DARK MODE TOGGLE
// =======================

// button ko HTML se pakad rahe hain
var themeButton = document.getElementById("theme-toggle");

// button par click event laga rahe hain
themeButton.addEventListener("click", function () {

  // body par dark-mode class add/remove kar rahe hain
  document.body.classList.toggle("dark-mode");

  // agar dark mode on hai to sun dikhao warna moon
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "☀️";
  } else {
    themeButton.textContent = "🌙";
  }
});


// =======================
// TYPING TEXT ANIMATION
// =======================

// jo text type hoga
var typingTextValue = "Frontend Web Developer";

// starting index
var index = 0;

// HTML element jisme text aayega
var typingElement = document.getElementById("typing-text");

// function jo ek ek letter type karega
function typeText() {

  // jab tak pura text complete na ho
  if (index < typingTextValue.length) {

    // ek letter add kar rahe hain
    typingElement.innerHTML =
      typingElement.innerHTML + typingTextValue.charAt(index);

    // index badha rahe hain
    index = index + 1;

    // thoda delay ke baad function fir se call hoga
    setTimeout(typeText, 100);
  }
}

// function ko call kar rahe hain
typeText();


// =======================
// SCROLL REVEAL ANIMATION
// =======================

// jab user scroll kare
window.addEventListener("scroll", function () {

  // jitne bhi reveal class wale elements hain unko pakad rahe hain
  var revealElements = document.querySelectorAll(".reveal");

  // har element ke liye loop
  revealElements.forEach(function (element) {

    // element ka top position le rahe hain
    var elementTop = element.getBoundingClientRect().top;

    // agar element screen ke andar aa gaya
    if (elementTop < window.innerHeight - 100) {

      element.classList.add("active");
    }
  });
});