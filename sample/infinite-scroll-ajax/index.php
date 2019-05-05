<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Inifinite Scroll Ajax</title>
    <style>
*, html, body {
  margin: 0;
  padding:  0;
}
body {
  height: 100vh;
  color: #000;
  background: hsl(211, 20%, 97%);
}
#items {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.item {
  display: flex;
  flex-direction: column;
  max-width: 460px;
  width: calc(100% - 40px);
  margin: 20px auto;
  background: #fff;
  font-size: 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  overflow: hidden;
}
.item img { width: 100% }
.item p {
  display: inline-block;
  vertical-align: top;
  padding: 40px;
  font: 16px/1.6 -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
    </style>
  </head>
  <body>
    
    <div id='items'></div>

    <script>
          
      const items = document.querySelector('#items')
      
      const loadMore = async function() {
        const response = await fetch('ajax.php').then(r => r.text())
        items.innerHTML += response
      }

      items.addEventListener('scroll', function() {
        if (items.scrollTop + items.clientHeight >= items.scrollHeight) {
          loadMore()
        }
      })

      loadMore()

    </script>
  </body>
</html>