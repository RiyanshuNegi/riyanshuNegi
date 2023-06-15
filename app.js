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
    window.location.href = "https://github.com/RiyanshuNegi";
}
linkedLink.onclick = () => {
    window.location.href = "https://in.linkedin.com/in/riyanshu-negi-730a";
}
emailLink.onclick = () => {
    window.location.href = "mailto:riyanshunegi66@gmail.com";
}

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}
