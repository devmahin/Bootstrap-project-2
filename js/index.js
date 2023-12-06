const navication = document.querySelector(".navication-wrap")
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        navication.classList.add("scroll-on")
    }else{
        navication.classList.remove("scroll-on")

    }
}

// navhide
let nav_link = document.querySelectorAll(".nav-link")
let btn = document.querySelector(".collapse.navbar-collapse")
nav_link.forEach((val,index) => {
    val.addEventListener("click", ()=> {
        btn.classList.remove("show")
    })

})