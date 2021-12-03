// banner slider
$('document').ready(()=>{
    // nav scroll
var nav=document.querySelector('.nav');
var logo=document.querySelector('.logo');
window.addEventListener('scroll',()=>{
    nav.classList.toggle('navscroll',scrollY>0);
    logo.classList.toggle('logoscroll',scrollY>0)
})
    // banner slider
$('.banner-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
    animateOut: 'fadeOut'

}) ;

// portfolio
var mixer = mixitup('.portfolio-mix');


// go top

var goTop=document.querySelector('.go-top');
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 400){
        goTop.classList.add('gotopjs');
    }
    else{
        goTop.classList.remove('gotopjs')
    }
});

$('#go-top').click(function(){
    $('html').animate({scrollTop:0},500)
})
})
