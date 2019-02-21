window.addEventListener('load', function() {

  console.log('%c' + 'DOM fully loaded', 'color:red;')

  const slideshow = document.querySelectorAll('.slideshow')
  const navigation = document.querySelector('.slideshow-navigation')
  const background = document.querySelectorAll('.slide__background')
  const nSlides = document.querySelectorAll('.slide').length-1

  let diff = 0,
    current = 0,
    animating = false,
    duration = 600,
    delay = 3000,
    startX = 0,
    windowWidth = 0,
    auto

  for(var c of document.querySelectorAll('.slideshow-control')) {
    c.addEventListener('click', function() {
      if (this.classList.contains('left')) {
        navigateLeft()
      } else {
        navigateRight()
      }
    })
  }

  navigation.addEventListener('click', function(e) {
    if(e.target != e.currentTarget) {
      current = e.target.dataset.page
      changeSlides()
    }
  })

  slideshow[0].addEventListener('mousedown', function(e) {
    if (animating) return
    window.clearTimeout(auto)
    startX = e.pageX || e.originalEvent.touches[0].pageX,
    windowWidth = window.innerWidth
    diff = 0
    slideshow[0].addEventListener('mousemove', onMousemove)
  })

  slideshow[0].addEventListener('mouseup', function() {
    slideshow[0].removeEventListener('mousemove', onMousemove)
    if (animating) return
    if (!diff) {
      changeSlides(true)
      return
    }
    if (diff > -5 && diff < 5) {
      changeSlides()
      return
    }
    if (diff <= -5) {
      navigateLeft()
    }
    if (diff >= 5) {
      navigateRight()
    }
  })

  function onMousemove(e) {
    let x = e.pageX || e.originalEvent.touches[0].pageX
    diff = (startX - x) / windowWidth * 70
    if ((!current && diff < 0) || (current === nSlides && diff > 0)) diff /= 2
    slideshow[0].style.transform = 'translate3d(' + (-current * 100 - diff) + '%,0,0)'
    for(let s of background) {
      s.style.transform = 'translate3d(' + (current * 50 + diff/2) + '%,0,0)'
    }
  }

  function manageControls() {
    document.querySelectorAll('.slideshow-control')[0].classList.remove('inactive')
    document.querySelectorAll('.slideshow-control')[1].classList.remove('inactive')
    if (!current) document.querySelector('.slideshow-control.left').classList.add('inactive')
    if (current === nSlides) document.querySelector('.slideshow-control.right').classList.add('inactive')
  }
      
  function navigateLeft() {
    if (animating) return
    if (current > 0) current--
    changeSlides()
  }

  function navigateRight() {
    if (animating) return
    if (current < nSlides) current++
    changeSlides()
  }

  function changeSlides(instant) {
    if (!instant) {
      animating = true
      manageControls()
      slideshow[0].classList.add('animating')
      for(let s of document.querySelectorAll('.slide')) {
        s.classList.remove('active')
      }
      document.querySelector('.slide-'+current).classList.add('active')
      setTimeout(function() {
        slideshow[0].classList.remove('animating')
        animating = false
      }, duration)
    }
    window.clearTimeout(auto)
    for(let s of document.querySelectorAll('.slideshow-navigation__item')) {
      s.classList.remove('active')
    }
    document.querySelector('.slideshow-navigation__item-'+current).classList.add('active')
    slideshow[0].style.transform = 'translate3d(' + -current * 100 + '%,0,0)'
    for(let s of background) {
      s.style.transform = 'translate3d(' + current * 50 + '%,0,0)'
    }
    diff = 0
    autoSlide()
  }

  function createBullets() {
    for (var i = 0; i < nSlides + 1; i++) {
    let li = document.createElement('li')
    li.className += 'slideshow-navigation__item slideshow-navigation__item-' + i
    li.setAttribute('data-page', i)
    if(!i) li.classList.add('active')
    navigation.appendChild(li)
    }
  }

  function autoSlide() {
    auto = setTimeout(function() {
      current++
      if (current > nSlides) current = 0
      changeSlides()
    }, delay)
  }

  createBullets()
  autoSlide()

})