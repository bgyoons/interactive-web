window.onload = function() {
  let bottom = document.querySelector('.bottom')
  let top = document.querySelector('.top')
  let topBtn = document.querySelector('.topBtn')
  let starBg = document.querySelector('.starBg')
  let title = document.querySelector('.title')
  
  setTimeout(() => {
    bottom.scrollIntoView({ behavior: 'smooth' })
  }, 2000)
  
  window.addEventListener('scroll', function() {
    let scroll = this.scrollY;
    starBg.style.transform = `translateY(${-scroll/3}px)`
    title.style.transform = `translateY(${scroll/2}px)`
  })

  topBtn.addEventListener('click', function() {
    top.scrollIntoView({ behavior: 'smooth' })
  })
}