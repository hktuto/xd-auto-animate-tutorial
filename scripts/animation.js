const 
    l1 = document.getElementById('bg_l1'),
    l2 = document.getElementById('bg_l2'),
    l3 = document.getElementById('bg_l3'),
    l4 = document.getElementById('bg_l4'),
    logo_container = document.getElementById('logo_container'),
    slide = document.getElementById('slide_container');


const introAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800,
    autoplay:false,
    delay:500,
    begin: function() {
        l1.classList.remove('hidden')
    },
    complete: function() {
        l1.classList.add('hidden')
    }
})

const replayIntroAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800,
    direction: 'alternate',
    autoplay:false,
    begin: function() {
        l1.classList.remove('hidden')
    },
    complete: function() {
        l1.classList.add('hidden')
    }
});

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



replayIntroAnimation
.add({
    targets:slide,
    bottom:[0,'-500px'],
},0)
.add({
    targets:l1,
    scale: [5,2],
    opacity:[0,1],
},0)
.add({
    targets:l2,
    translateY:[-20,0],
    scale:[1.2, 1.3],
},0)
.add({
    targets:l3,
    scale:[1, 1.2],
    translateY:[-10,0],
    opacity:[0.8,1],
},0)
.add({
    targets:l4,
    opacity:[0,1],
},0)
.add({
    targets:logo_container,
    scale:[0.8,0.6],
    translateY:[-30,0],
},0)

