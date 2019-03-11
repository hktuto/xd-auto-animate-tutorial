var 
    l1 = document.getElementById('bg_l1'),
    l2 = document.getElementById('bg_l2'),
    l3 = document.getElementById('bg_l3'),
    l4 = document.getElementById('bg_l4'),
    logo_container = document.getElementById('logo_container'),
    slide = document.getElementById('slide_container'),
    row1 = document.getElementById('row1'),
    row2 = document.getElementById('row2');


var introAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800,
    autoplay:false,
    delay:500,
    begin:function(){
        l1.classList.remove('hidden');
    },
    complete:function(){
        l1.classList.add('hidden');
    }
});

var replyAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800,
    autoplay:false,
    delay:500,
    direction: 'alternate',
    begin:function(){
        l1.classList.remove('hidden');
    },
    complete:function(){
        l1.classList.add('hidden');
    }
});

var swipeLeft = anime.timeline({
    easing: 'easeOutExpo',
    duration:800,
    autoplay:false,
});
swipeLeft.add({
    targets:row1,
    marginLeft : [0, "-100%"],
    opacity:[1,0.5]
})
.add({
    targets:row2,
    opacity:1
},300)


var swipeRight = anime.timeline({
    easing: 'easeOutExpo',
    autoplay:false,
    duration:800,
})

swipeRight.add({
    targets:row1,
    marginLeft : ["-100%",0],
})
.add({
    targerts:row2,
    opacity:[1,0.5]
},0)
.add({
    targets:row1,
    opacity:[0.5,1]
},300)

replyAnimation
.add({
    targets:logo_container,
    translateY:[-30,0]
})
.add({
    targets:slide,
    bottom:[0,'-500px'],
    opacity:[1,0],
},0)
.add({
    targets:l3,
    translateY:[-10,0],
    scale:[1,1.2],
    opacity:[0.8,1]
},0)
.add({
    targets:l2,
    translateY:[-20,0],
    scale:[1.2,1.3]
},0)
.add({
    targets:logo_container,
    scale:[0.8,0.6],
},0)
.add({
    targets:l4,
    opacity:[0,1],
},0)
.add({
    targets:l1,
    scale: [5,1],
    opacity:[0,1],
},0)


introAnimation
.add({
    targets:l1,
    scale: [2,5],
    opacity:0,
},0)
.add({
    targets:l2,
    scale:[1.3, 1.2],
},0)
.add({
    targets:l3,
    scale:[1.2, 1],
    opacity:[1,0.8],
},0)
.add({
    targets:l4,
    opacity:0,
},0)
.add({
    targets:logo_container,
    scale:[0.6,0.8],
},0)
.add({
    targets:l2,
    translateY:[0,-20],
    duration:600
},700)
.add({
    targets:l3,
    translateY:[0,-10],
    duration:600
},700)
.add({
    targets:slide,
    bottom:['-500px',0],
    opacity:[0,1],
    duration:600
},700)
.add({
    targets:logo_container,
    translateY:[0,-30],
},700);

