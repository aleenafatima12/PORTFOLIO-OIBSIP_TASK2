var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link"); 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
document.getElementById("year").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
var typed=new Typed(".skills",{
    strings: ["Passionate Engineer","Front-end developer","Programmer","GDSC hackathon winner"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 100,
    backDelay : 1000,
    loop : true
});
});
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
window.onbeforeunload =() => {
    for(const form of document.getElementsByTagName('form')){
        form.reset();
    }
}
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollArrow = document.querySelector('.scroll-top');
    if (scrollPosition > 100) { 
        scrollArrow.style.display = 'block';
    } else {
        scrollArrow.style.display = 'none';
    }
});

document.querySelector('.scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});