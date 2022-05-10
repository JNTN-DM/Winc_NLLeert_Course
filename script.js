let toggleNavBarStatus = false;

const toggleNavBar = function() {
    const getNavBarUL = document.querySelector(".navBarLinks ul")
    const getNavBarToggle = document.querySelector(".navBarToggle")
    const getNavBarLinks = document.querySelectorAll(".navBarLinks a")

    if (toggleNavBarStatus === false) {
        getNavBarUL.style.visibility = "visible";
        getNavBarToggle.style.opacity = "0.5";

        let arrayLength = getNavBarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavBarLinks[i].style.visibility = "1";
        }

        toggleNavBarStatus = true;
    }

    else if (toggleNavBarStatus === true) {
        getNavBarUL.style.visibility = "hidden";
        getNavBarToggle.style.opacity = "1";

        let arrayLength = getNavBarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavBarLinks[i].style.visibility = "0";
        }

        toggleNavBarStatus = false;
    };
};


//The AlertButton

const attachEventAlterBtn = function () {
    const alertBtn = document.getElementById('myButton');
    alertBtn.addEventListener("click", function(){
        alert("The button clicked");
    });

};

attachEventAlterBtn();


//This is the color change code
let toggleColorStatus = false;

const changeHomeBackgroundColor = document.getElementsByClassName("colorBtn")[0];
    changeHomeBackgroundColor.addEventListener("click", function(){
        document.body.classList.toggle("homeBackground");
    });

const changePurpleBackgroundColor = document.getElementsByClassName("colorBtn")[1];
    changePurpleBackgroundColor.addEventListener("click", function(){
        document.body.classList.toggle("purpleBackground");
        document.style.background("purpleBackground"); 
    });

const changeRedBackgroundColor = document.getElementsByClassName("colorBtn")[2];
    changeRedBackgroundColor.addEventListener("click", function(){
        document.body.classList.toggle("redBackground");
    });

const changeGreenBackgroundColor = document.getElementsByClassName("colorBtn")[3];
    changeGreenBackgroundColor.addEventListener("click", function(){
        document.body.classList.toggle("greenBackground");
    });

const changeYellowBackgroundColor = document.getElementsByClassName("colorBtn")[4];
    changeYellowBackgroundColor.addEventListener("click", function(){
        document.body.classList.toggle("yellowBackground");
    });

