(function () {
  const houseEle = document.querySelector('.house');
  const stageEle = document.querySelector('.stage');
  const barEle = document.querySelector('.progress-bar');
  const mousePosition = {x: 0, y: 0};
  let maxScrollValue;
  
  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener('scroll', function() {
    const scrollPercent = this.scrollY / maxScrollValue;
    const zMove = scrollPercent * 980;
    houseEle.style.transform = `translateZ(${zMove - 490}vw)`
    barEle.style.width = `${scrollPercent * 100}%`
  })

  window.addEventListener('mousemove', function(e) {
    mousePosition.x = -1 + e.clientX / window.innerWidth * 2;
    mousePosition.y = 1 - e.clientY / window.innerHeight * 2;
    stageEle.style.transform = `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
  })

  window.addEventListener('resize', resizeHandler)
  resizeHandler()
})();