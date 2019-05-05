<!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
		<title>Layout 3</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      *, html, body {
        margin: 0;
        padding: 0;
      }
      body {
        font: 14px/1.4 -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol; color: black;
        background: #eee;
      }
      #items {
        width: calc(100% - 20px);
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
      }
      .item {
        width: calc((100% - 120px) / 6);
        padding: 10px;
        -webkit-transition: width .2s ease-in-out;
        transition: width .2s ease-in-out;
        will-change: width;
        cursor: pointer;
      }
      .item > div {
        background: #fff;
      }
      .item div div {
        padding: 10px;
        position: relative;
        z-index: 1;
      }
      .item img {
        display: block;
        width: 100%;
        position: relative;
        z-index: 1;
      }
      .item strong {
        display: block;
        margin-bottom: 5px;
      }
      .item.zoom {
        width: calc((100% - 40px) / 2);
      }
      @media only screen and (max-width: 1280px) {
        .item {
          width: calc((100% - 80px) / 4);
        }
      }
      @media only screen and (max-width: 1024px) {
        .item {
          width: calc((100% - 60px) / 3);
        }
        .item.zoom {
          width: calc((100% - 20px));
        }
      }
      @media only screen and (max-width: 769px) {
        .item {
          width: calc(50% - 20px);
        }
      }
    </style>
  </head>
  <body>
    <div id="items">
      <?php for ($i = 1; $i <= 12; $i++) { ?>
      <div id="item-<?= $i ?>" class="item">
        <div>
          <img src="//picsum.photos/id/<?= $i + 45 ?>/536/364" alt="">
          <div>
            <strong>Lorem ipsum <?= $i ?></strong>
            <p>Lorem ipsum dolor sit amet consectetur animi iusto adipisicing elit. Sapiente, incidunt aliquam ratione at. Debitis, nemo nobis. Et, quidem corrupti animi accusamus, nemo officiis incidunt corrupti iste ipsa nemo sed aliquam animi iusto enim ut. Voluptatem, excepturi iusto!</p>
          </div>
        </div>
      </div>
      <?php } ?>
    </div>
    <script async defer>
      let items = Array.from(document.querySelectorAll('.item'))
      items.forEach((item) => {
        item.addEventListener('click', function() {
          let flip = new Flip()
          flip.read(items)
          item.classList.toggle('zoom')
          flip.play(items)
        })
        // item.querySelector('[data-delete]').addEventListener('click', function() {
        //   let flip = new Flip()
        //   flip.read(items)
        //   flip.remove([item])
        //   items = items.filter(i => i !== item)
        //   flip.play(items)
        // })
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
            const x = oldP.x - newP.x
            const y = oldP.y - newP.y
            const w = oldP.width / newP.width
            const h = oldP.height / newP.height
            item.animate([{
              transform: `translate3d(${x}px, ${y}px, 0px) scale(${w}, ${h})`
            },{
              transform: 'none'
            }],{
              duration: this.duration,
              easing: 'ease-in-out',
              fill: 'both'
            })
            item.style.transform = `translate3d(${x}px, ${y}px, 0px) scale(${w}, ${h})`
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
              transform: `translate3d(${x}px, ${y - 30}px, 0px)`,
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
      }
    </script>
  </body>
</html>