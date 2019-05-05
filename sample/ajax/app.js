let items = Array.from(document.querySelectorAll('.item'))

items.forEach((item) => {
  item.addEventListener('click', function(e) {
    console.log(e.currentTarget)
    let flip = new Flip()
    flip.read(items)
    flip.remove([item])
    items = items.filter(i => i !== item)
    flip.play(items)
  })
})

document.getElementsByTagName('button')[0].addEventListener('click', async function() {
  const response = await fetch('ajax.php').then(r => r.text())
  const newItems = Array.from(document.createRange().createContextualFragment(response).querySelectorAll('.item'))
  let flip = new Flip()
  flip.replace(items, newItems)
  this.remove();
})

class Flip {

  constructor () {
    this.duration = 500
    this.positions = {}
  }

  read (items) {
    items.forEach(item => {
      const id = item.getAttribute('id')
      this.positions[id] = item.getBoundingClientRect()
    })
  }

  play (items) {
    items.forEach(item => {
      const id = item.getAttribute('id')
      const newP = item.getBoundingClientRect()
      const oldP = this.positions[id]
      if (oldP === undefined)  {
        item.animate([{
          transform: `translate3d(0px, -20px, 0px)`,
          opacity: 0
        },{
          transform: 'none',
          opacity: 1
        }],{
          duration: this.duration,
          easing: 'ease-in-out',
          fill: 'both'
        })
        return
      }
      const x = oldP.x - newP.x
      const y = oldP.y - newP.y
      const w = oldP.width / newP.width
      const h = oldP.height / newP.height
      item.animate([{
        transform: `translate3d(${x}px, ${y}px, 0px)`
      },{
        transform: 'none'
      }],{
        duration: this.duration,
        easing: 'ease-in-out',
        fill: 'both'
      })
    })
  }

  remove (items) {
    items.forEach(item => item.parentNode.appendChild(item))
    items.forEach(item => {
      const id = item.getAttribute('id')
      const newP = item.getBoundingClientRect()
      const oldP = this.positions[id]
      const x = oldP.x - newP.x
      const y = oldP.y - newP.y
      item.animate([{
        transform: `translate3d(${x}px, ${y}px, 0px)`,
        opacity: 1
      },{
        transform: `translate3d(${x}px, ${y - 20}px, 0px)`,
        opacity: 0
      }],{
        duration: this.duration,
        easing: 'ease-in-out',
        fill: 'both'
      })
      window.setTimeout(function () {
        item.parentNode.removeChild(item)
      }, this.duration)
    })
  }

  replace (oldItems, newItems) {
    const parent = oldItems[0].parentNode
    let removedItems = []
    this.read(oldItems)
    const newIds = newItems.map(item => {
      parent.appendChild(item)
      return item.getAttribute('id')
    })
    oldItems.forEach(item => {
      const id = item.getAttribute('id')
      if (newIds.includes(id))  {
        parent.removeChild(item)
      } else {
        removedItems.push(item)
      }
    })
    this.remove(removedItems)
    this.play(newItems)
  }
}
