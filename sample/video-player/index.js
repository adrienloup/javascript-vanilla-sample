class Player {

  constructor(player = null, video = null, play = null, small = null, normal = null, big = null) {
		this.playPause = this.playPause.bind(this)
		this.makeSmall = this.makeSmall.bind(this)
		this.makeNormal = this.makeNormal.bind(this)
		this.makeBig = this.makeBig.bind(this)
    this.player = document.querySelector(player)
    this.video = this.player.querySelector(video)
    this.play = this.player.querySelector(play)
    this.small = this.player.querySelector(small)
    this.normal = this.player.querySelector(normal)
    this.big = this.player.querySelector(big)
    this.playback = false
  }

  init() {
		this.play.addEventListener('click', this.playPause)
		this.small.addEventListener('click', this.makeSmall)
		this.normal.addEventListener('click', this.makeNormal)
		this.big.addEventListener('click', this.makeBig)
  }
  
  playPause() {
    (this.video.paused) ? this.video.play() : this.video.pause()
  }

  makeSmall() {
    this.player.style.width = '320px'
    this.player.style.height = 'initial'
    this.player.style.position = 'fixed'
    this.player.style.right = '20px'
    this.player.style.bottom = '20px'
    this.player.style.zIndex = 2
    this.video.style.height = 'initial'
    this.video.style.objectFit = 'initial'
  }

  makeNormal() {
    this.player.style.width = '520px'
    this.player.style.height = 'initial'
    this.player.style.position = 'relative'
    this.player.style.right = '0px'
    this.player.style.bottom = '0px'
    this.player.style.zIndex = 2
    this.video.style.height = 'initial'
    this.video.style.objectFit = 'initial'
  }

  makeBig() {
    this.player.style.width = '100vw'
    this.player.style.height = '100vh'
    this.player.style.position = 'fixed'
    this.player.style.right = '0px'
    this.player.style.bottom = '0px'
    this.player.style.zIndex = 1
    this.video.style.height = '100%'
    this.video.style.objectFit = 'cover'
  }

}

const p1 = new Player('[data-player1]', '[data-video]', '[data-play]', '[data-small]', '[data-normal]', '[data-big]')
const p2 = new Player('[data-player2]', '[data-video]', '[data-play]', '[data-small]', '[data-normal]', '[data-big]')
p1.init()
p2.init()
