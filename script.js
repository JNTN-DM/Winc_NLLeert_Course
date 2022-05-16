function toggleNavBar() {
    let getNavBar = document.querySelector(".navBarLinks");

    if (getNavBar.style.visibility === "visible") {
        getNavBar.style.visibility = "hidden";
    } else {
        getNavBar.style.visibility = "visible";
    }
}


//The AlertButton

const attachEventAlterBtn = function () {
    const alertBtn = document.getElementById('myButton');
    alertBtn.addEventListener("click", function(){
        alert("The button clicked");
    });

};

attachEventAlterBtn();


//This is the color change code
document.getElementsByClassName("colorBtn")[0].addEventListener("click", function(){
    document.body.style.backgroundColor = "hsl(1, 99%, 99%)";
    console.log("The background has changed to the main");
    toggleNavBar();
});

document.getElementsByClassName("colorBtn")[1].addEventListener("click", function(){
    document.body.style.backgroundColor = "purple";
    console.log("The background has changed to Purple");
    toggleNavBar();
});

document.getElementsByClassName("colorBtn")[2].addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
    console.log("The background has changed to Red")
    toggleNavBar();
});

document.getElementsByClassName("colorBtn")[3].addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
    console.log("The background has changed to Green")
    toggleNavBar();
});

document.getElementsByClassName("colorBtn")[4].addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
    console.log("The background has changed to Yellow")
    toggleNavBar();
});

//Hover color change
document.getElementsByClassName("colorBtn")[0].addEventListener("mouseover", function(){
    document.getElementsByClassName("colorBtn")[0].style.backgroundColor = "hsl(1, 99%, 99%)";
});
document.getElementsByClassName("colorBtn")[0].addEventListener("mouseout", function(){
    document.getElementsByClassName("colorBtn")[0].style.backgroundColor = "#999";
});

document.getElementsByClassName("colorBtn")[1].addEventListener("mouseover", function(){
    document.getElementsByClassName("colorBtn")[1].style.backgroundColor = "purple";
});
document.getElementsByClassName("colorBtn")[1].addEventListener("mouseout", function(){
    document.getElementsByClassName("colorBtn")[1].style.backgroundColor = "#999";
});

document.getElementsByClassName("colorBtn")[2].addEventListener("mouseover", function(){
    document.getElementsByClassName("colorBtn")[2].style.backgroundColor = "red";
});
document.getElementsByClassName("colorBtn")[2].addEventListener("mouseout", function(){
    document.getElementsByClassName("colorBtn")[2].style.backgroundColor = "#999";
});

document.getElementsByClassName("colorBtn")[3].addEventListener("mouseover", function(){
    document.getElementsByClassName("colorBtn")[3].style.backgroundColor = "green";
});
document.getElementsByClassName("colorBtn")[3].addEventListener("mouseout", function(){
    document.getElementsByClassName("colorBtn")[3].style.backgroundColor = "#999";
});

document.getElementsByClassName("colorBtn")[4].addEventListener("mouseover", function(){
    document.getElementsByClassName("colorBtn")[4].style.backgroundColor = "yellow";
});
document.getElementsByClassName("colorBtn")[4].addEventListener("mouseout", function(){
    document.getElementsByClassName("colorBtn")[4].style.backgroundColor = "#999";
});
