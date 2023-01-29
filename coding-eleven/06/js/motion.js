let x = 0, y = 0, mx = 0, my = 0;
let wrap;

window.onload = function() {
  wrap = document.querySelector('.contentWrap')

  window.addEventListener('mousemove', function(e) {
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
  })
  loop()
}

function loop() {
  mx += (x - mx) * 0.1
  my += (y - my) * 0.1

  wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${my/10}deg) rotateY(${-mx/10}deg)`

  window.requestAnimationFrame(loop)
}