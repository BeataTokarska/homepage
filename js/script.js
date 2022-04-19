console.log("Siema");

let photoButton = document.querySelector(".photo__button");
let header = document.querySelector(".header");
let photo = document.querySelector(".photo");
photoButton.addEventListener("click", () => {
    photo.remove();
});



let buttonBiggerLetters = document.querySelector(".mainText__buttonBiggerLetters");
let mainText__aboutMe = document.querySelector(".mainText__aboutMe");
let themeNameBiggerLetters = document.querySelector(".themeNameBiggerLetters");

buttonBiggerLetters.addEventListener("click", () => {
    mainText__aboutMe.classList.toggle("biggerLetters");
    if (mainText__aboutMe.classList.contains("biggerLetters")) {
        themeNameBiggerLetters.innerText = "zmniejsz";
    } else {
        themeNameBiggerLetters.innerText = "powiększ";
    }
});

let buttonDark = document.querySelector(".mainText__buttonDark");
let body = document.querySelector(".body");
let themeNameDark = document.querySelector(".themeNameDark");

buttonDark.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeNameDark.innerText = "jasny";
    } else {
        themeNameDark.innerText = "ciemny";
    }
});



