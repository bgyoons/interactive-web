(function () {
  const houseEle = document.querySelector('.house')
  let maxScrollValue;
  
  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener('scroll', function() {
    const zMove = this.scrollY / maxScrollValue * 980;
    houseEle.style.transform = `translateZ(${zMove - 490}vw)`
  })

  window.addEventListener('resize', resizeHandler)
  resizeHandler()
})();