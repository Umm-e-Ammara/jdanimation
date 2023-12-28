let circle = document.querySelector('#circle');
const btn = document.querySelector("#btn");
const svgelem = document.querySelector("svg");




window.addEventListener('mousemove',function(dets){
    let xvalue = dets.clientX;
    let yvalue = dets.clientY;

    setTimeout(function(){
        circle.style.top = `${yvalue}px`;
        circle.style.left = `${xvalue}px`;

    }, 100)

})

btn.addEventListener("click", function(){
    tl.reverse();
    setTimeout(() => {
        svgelem.classList.add('animate');
    }, 3000);
})



let tl = gsap.timeline();
tl.from('#wrapper', {
    duration: 2,
    scale: .7,
    ease:"Expo.easeInOut",
    opacity: 0

})
.from('#whitestrip', {
    duration: 1.7,
    width: 0,
    ease:"Expo.easeInOut",

}, '-=1.5')
.from('#blackcard', {
    duration: 1.5,
    x:50,
    ease:"Expo.easeInOut",
    opacity: 0

}, '-=0.5')
.from('#linelem', {
    duration: 1.7,
    x:50,
    ease:"Expo.easeInOut",
    opacity: 0

}, '-=1')
.from('#linelem .line', {
    duration: 1.7,
    width:0,
    ease:"Expo.easeInOut",
    opacity: 0

}, '-=1.2')
.from('#blackcard p', {
    duration: 1.7,
    y:30,
    ease:"Expo.easeInOut",
    opacity: 0

}, '-=1.8')
.from('#side', {
    duration: 2,
    x:30,
    ease:"Expo.easeInOut",
    opacity: 0

}, '-=1.8')