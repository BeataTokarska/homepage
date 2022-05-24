{
    const welcome = () => {
        console.log("Siema, jest to mój pierwszy projekt i zupełne początki z JS :)")

    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeNameDark = document.querySelector(".themeNameDark");

        body.classList.toggle("dark");
        themeNameDark.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"

    };

    const onChangeSize = () => {
        const mainText__aboutMe = document.querySelector(".mainText__aboutMe");
        const themeNameBiggerLetters = document.querySelector(".themeNameBiggerLetters");

        mainText__aboutMe.classList.toggle("biggerLetters");
        themeNameBiggerLetters.innerText = body.classList.contains("biggerLetters") ? "zmniejsz" : "powieksz"

    };
    const onRemovePhoto = () => {
        const photoButton = document.querySelector(".photo__button");

        const photo = document.querySelector(".photo");
        photoButton.addEventListener("click", () => {
            photo.remove();
        });
    }
    const init = () => {
        const buttonDark = document.querySelector(".mainText__buttonDark");
        buttonDark.addEventListener("click", onChangeBackgroundClick);

        const buttonBiggerLetters = document.querySelector(".mainText__buttonBiggerLetters");

        buttonBiggerLetters.addEventListener("click", onChangeSize);

        welcome();
        onRemovePhoto();
    };

    


    
    init();
}





