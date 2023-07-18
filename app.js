const navbar  = document.querySelector("#navbar");

const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;

    if(scrollPosition > 10){
        if(
            !navbar.classList.contains("nav-scrolled-down")
        ){
            navbar.classList.add("nav-scrolled-down");
        }
    } else {
        if(
            navbar.classList.contains("nav-scrolled-down")
        )   {
        navbar.classList.remove("nav-scrolled-down");
    }
    }
}

document.addEventListener("scroll", onScroll);


let nav = document.querySelector(".nav");
let menu = document.querySelector("#menu-icon");
let btn = document.querySelector(".btn");

// link
let githubLink = document.querySelector(".githubLink") ;
let linkedLink = document.querySelector(".linkedinLink") ;
let emailLink = document.querySelector(".emailLink") ;

btn.onclick = () => {
    window.location.href = "https://wa.me/917302189697";
}


githubLink.onclick = () => {
    window.open("https://github.com/RiyanshuNegi", "_blank"); ;
}
linkedLink.onclick = () => {
    window.open("https://in.linkedin.com/in/riyanshu-negi-730a", "_blank"); ;
}
emailLink.onclick = () => {
    window.open("mailto:riyanshunegi66@gmail.com", "_blank");
}

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

const generativeLink = document.querySelector(".generativeai");
generativeLink.onclick=()=>{
    window.open("https://generativeai.netlify.app/", "_blank");
}