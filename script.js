

// gsaps
var tl = gsap.timeline()

tl.from("h2,.main .nav h3", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
})

tl.from(".main .content h1", {
    y: 200,
    opacity: 0,
    stagger: 0.2
})

tl.from(".main .content h1 span img", {
    scale: 0,
    opacity: 0,
    stagger: 0.3
})
tl.from(".main .btm", {
    y: 100,
    opacity: 0,
    delay: 0.3,
    duration: 0.5,
    stagger: 0.3
})