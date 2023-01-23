let prev_button, next_button;
let contentWrap;
let disk_inner;
let pageNum = 0;
let totalNum;
let start, end;
let album;
let pointBtnAll;
let bgArray = new Array();
bgArray[0] = ["#0272a4","#f6a564"];
bgArray[1] = ["#b6bfc8","#36595b"];
bgArray[2] = ["#e58e82","#6f569f"];

function paging(page) {
  contentWrap.style.background = `linear-gradient(120deg, ${bgArray[page][0]}, ${bgArray[page][1]})`;
  disk_inner[page].style.background = bgArray[page][0];
  
  for (let i = 0; i < totalNum; i++) {
    if (i !== page) {
      album[i].classList.remove('active')
      pointBtnAll[i].classList.remove('active')
    } else {
      album[i].classList.add('active')
      pointBtnAll[i].classList.add('active')
    }
  }
}

function mobileChk() {
  var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
  for (var info in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
      return true;
    }
  }
  return false;
}

function touchFunc(e) {
  if (e.type === 'touchstart') start = e.changedTouches[0].clientX
  if (e.type === 'touchend') end = e.changedTouches[0].clientX

  if (Math.abs(start - end) > 100) {
    if (start - end < 0) {
      if (pageNum > 0) {
        pageNum--;
        paging(pageNum)
      }
    } else {
      if (pageNum < totalNum - 1) {
        pageNum++;
        paging(pageNum)
      }
    }
  } 

  // 초기화
  if (start && end) {
    start = undefined
    end = undefined
  }
}

window.onload = function() {
  album = document.querySelectorAll('.album') // active
  pointBtnAll = document.getElementsByTagName('li') // active
  totalNum = album.length
  
  prev_button = document.getElementsByTagName('button')[0] // click event
  next_button = document.getElementsByTagName('button')[1] // click event
  
  contentWrap = document.querySelector('.contentWrap') // background
  disk_inner = document.querySelectorAll('.disk_inner') // background

  for (let i = 0; i < totalNum; i++) {
    (function(i) {
      pointBtnAll[i].onclick = function() {
        paging(i)
      }
    })(i)
  }

  prev_button.addEventListener('click', function() {
    if (pageNum > 0) {
      pageNum--;
      paging(pageNum)
    }
  })
  
  next_button.addEventListener('click', function() {
    if (pageNum < totalNum - 1) {
      pageNum++;
      paging(pageNum)
    }
  })

  if (mobileChk()) {
    contentWrap.addEventListener('touchstart', touchFunc, false)
    contentWrap.addEventListener('touchend', touchFunc, false)
  }
}