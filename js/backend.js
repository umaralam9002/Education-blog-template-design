burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})

let produce = ()=>{
   console.log("Umar is a great boy");


}


produce();

show = document.getElementById("about")
about.addEventListener('click',()=>{
    alert("This is dangerous");
})