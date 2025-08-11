let btn1 = document.querySelector("#viewProjectBtn1");
let btn2 = document.querySelector("#viewProjectBtn2");
let btn3 = document.querySelector("#viewProjectBtn3");
let contactBtn = document.querySelector(".contactbtn");
const contactSection = document.getElementById('contact');

btn1.addEventListener("click", function() {
    console.log("wor");
  window.location.href = "https://github.com/KDhruv16/fashion-model-homepage/blob/main/index.html"; 
});
btn2.addEventListener("click", function() {
    console.log("wor");
  window.location.href = "https://github.com/KDhruv16/tailwind-ToDesktop-Site"; 
});
btn3.addEventListener("click", function() {
    console.log("wor");
  window.location.href = "https://github.com/KDhruv16/Call-Form-App"; 
});
contactBtn.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
});