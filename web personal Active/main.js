// start siting box 
let setingBox = document.querySelector(".siting-box");
let btnSitingBox = document.querySelector(".set");
btnSitingBox.onclick = function (){
    setingBox.classList.toggle("open")
    this.classList.toggle("fa-spin")
}
let listColorLi =document.querySelectorAll(".list-color li");
let locleList = localStorage.getItem("option-color");
if(locleList !== null){
    document.documentElement.style.setProperty('--main-color',locleList);
    document.querySelectorAll(".list-color li").forEach(li =>{
        li.classList.remove('active');
        if(li.dataset.color === locleList){
            li.classList.add("active")
        }
    });
}
listColorLi.forEach(li =>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
       localStorage.setItem("option-color",e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active")
        });
        e.target.classList.add("active");
        
    })
})
// End siting box 
//start box-siting
let btnBox = document.querySelector(".Box-links");
let listLink = document.querySelector(".links");
btnBox.onclick = function(e){
    e.stopPropagation()
    this.classList.toggle("Box-active");
    listLink.classList.toggle("on");
}
document.addEventListener("click" , (e)=>{
   if(e.target !== btnBox && e.target !== listLink){
        if(btnBox.classList.contains("Box-active") && listLink.classList.contains("on")){
            btnBox.classList.toggle("Box-active");
            listLink.classList.toggle("on");
        }
    }
});

listLink.onclick = function(e){
    e.stopPropagation()
}
//  start abot 
let aboutAge = document.querySelector(".about-content .age");
let spanDate = document.createElement("span");
let dateNow = new Date();
let brthDay = new Date("April 26, 2007");
let btr = dateNow - brthDay ;
span = btr/1000/60/60/24/365;
spanDate = (Math.floor(span))+" Year";
aboutAge.append(spanDate);
//  End abo
// start landig page links style and skill
let AllLink = document.querySelector(".links");
let containerSkill = document.querySelector(".skills-box");
window.onscroll= function(){
    if(window.scrollY >= 50){
        AllLink.classList.add("center")
    }else{
        AllLink.classList.remove("center")
    }
    // start skill 
    if(window.scrollY >= containerSkill.offsetTop - 350){
        let boxSpan = document.querySelectorAll(".skills-box .box-span span");
        boxSpan.forEach(span => {
         span.style.width = span.dataset.wdth ;
        });
     }else{
         let boxSpan = document.querySelectorAll(".skills-box .box-span span");
         boxSpan.forEach(span => {
          span.style.width = 0 ;
         });
     }
    // End skill 
}
// End landig page links style and skill
// start nav bar class active 
let linksLi = document.querySelectorAll(".links li");
let aboutUs = document.querySelector(".about-Us")
linksLi.forEach(li =>{
    li.addEventListener("click",(e)=>{
        
      document.querySelectorAll(".links .active").forEach(lin =>{
        lin.classList.remove("active")
      });
      if(e.target){
        li.classList.add("active")
      }
    });
})
// end nav bar class active 
// start click nav and section 
let allLinks = document.querySelectorAll(".links li a");
function scroll (elements){
    elements.forEach(ele =>{
       ele.addEventListener('click',(e)=>{
          e.preventDefault();
          document.querySelector(e.target.dataset.section).scrollIntoView({behavior: 'smooth'})
       })
    });
 };
scroll(allLinks)
// End click nav and section 
// start clear locale storge 
let btnReset = document.querySelector(".btn-box");
btnReset.onclick = function(){
    localStorage.clear()
    window.location.reload()
}
// End clear locale storge 
