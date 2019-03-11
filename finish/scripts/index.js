
var logo = document.getElementById('logo');
var slide = document.getElementById('slide_container');


logo.addEventListener('click', function(){
    replyAnimation.play();
});

var slide_controller = new Hammer(slide);


slide_controller.on('swipeleft', function(e){
    
    if( slide.getAttribute('swipe') === 'true' ){
        swipeLeft.play();
        slide.setAttribute('swipe', 'false');
        return ;
    };
    console.log("u can't touch this!");
});

slide_controller.on('swiperight', function(e){
    if( slide.getAttribute('swipe') === 'false' ){

        swipeRight.play();
        slide.setAttribute('swipe', 'true');
        return ;
    }
    console.log("u can't touch this!");
});

(function(){
    introAnimation.play();
})()

