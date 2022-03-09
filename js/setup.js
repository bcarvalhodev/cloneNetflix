
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('header .container').addClass("sticky");
        }else{
            $('header .container').removeClass("sticky");
        }
    
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-carousel').owlCarousel({
    items:4,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
        480:{
            items:2
        },
        600:{
            items:4
        }
    }
})
