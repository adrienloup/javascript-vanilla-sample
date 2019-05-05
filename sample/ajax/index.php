<!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
		<title>Ajax</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <button>Load others with Ajax</button>
    <div id="items">
      <?php for ($i = 3; $i <= 10; $i++) { ?>
      <div id="item-<?= $i ?>" class="item">
        <div>
          <img src="//picsum.photos/id/<?= $i + 30 ?>/536/364" alt="">
          <div>
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum dolor sit amet consectetur animi iusto adipisicing elit. Sapiente, incidunt ratione at. Debitis, nemo nobis. Et, quidem animi accusamus, nemo officiis incidunt corrupti iste ipsa nemo sed aliquam animi iusto enim ut. Voluptatem, excepturi iusto!</p>
          </div>
        </div>
      </div>
      <?php } ?>
    </div>
    <script src="app.js" async defer></script>
  </body>
</html>