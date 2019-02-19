(function() {

	const $body = document.body
	const tab = document.querySelectorAll('[data-tab]')
	const $products = document.getElementById('products')
	const $details = document.getElementById('details')
	const $empty = document.getElementById('empty')
	const $list = document.getElementById('list')
	const $count =document.getElementById('count')

	$products.addEventListener('click', onClickProduct, false)
	$details.addEventListener('click', onClickDetails, false)

	function Product(options) {
		options = Object.assign({}, {
			id: 0,
			name: 'untitled',
			title: null,
			color: null,
			img: null,
			price: 0,
			gender: null,
			clothing: null,
			brand: null,
			size: null,
			collection: null,
			categories: [],
			bag: false,
			discount: false
		}, options)
		this.id = options.id,
		this.name = options.name,
		this.title = options.title,
		this.color = options.color,
		this.img = options.img,
		this.price = options.price,
		this.clothing = options.clothing,
		this.gender = options.gender,
		this.brand = options.brand,
		this.size = options.size,
		this.collection = options.collection
		this.categories = options.categories
		this.bag = options.bag
		this.discount = options.discount
	}

	Product.prototype.sales = function(discount) {
		if (discount) {
			this.discount = this.price - (this.price * discount / 100)
			this.categories.push('Soldes')
			return console.log(this.title + ' est soldé -' + discount + '%')
		}
	}

	var products = []
	var product = ''
	for (let i = 0, length = productsList.length; i < length; i++) {
		products.push(new Product(productsList[i]))
	}
	products[14].sales(50)
	products[15].sales(50)
	products[16].sales(50)
	products[17].sales(30)
	products[18].sales(50)
	products[19].sales(50)

	var randomProducts = random(products.slice())
	for (let i = 0, length = randomProducts.length; i < length; i++) {
		product += '<div id="' + randomProducts[i].id + '" class="product' + (randomProducts[i].discount ? ' soldes' : '') + '"><div class="img"><img src="img/' + randomProducts[i].img + '.jpg" alt="' + randomProducts[i].title + '"><svg class="bag" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20"></circle><path d="M28,26.987 L28,16 L12,16 L12,27 L28,26.987 Z M14.077,14 C14.5638733,11.1096772 17.0689616,8.99496487 20,9 C22.973,9 25.562,11.162 26.038,14 L30,14 L30,28.986 L10,29 L10,14 L14.077,14 Z M23.979,13.995 C23.531,12.275 21.86,11 20,11 C18.153,11 16.604,12.294 16.144,13.995 C17.064,13.995 23.798,14.025 23.979,13.995 Z" stroke-width="1"></path></svg></div><div class="caption"><span class="brand">' + randomProducts[i].brand + ' - </span><span class="title">' + randomProducts[i].title + ' - </span><span class="color">' + randomProducts[i].color[0] + '</span><span class="price">' + randomProducts[i].price + ' €' + (randomProducts[i].discount ? '<span>' + randomProducts[i].discount.toFixed(2) + ' €</span>' : '') + '</span></div></div>'
		document.getElementById('products').innerHTML = product
	}
	console.log('Tous → Tous →',products.length)

	var temporary_gender = 'Tous'
	for (let i = 0, length = tab.length; i < length; i++) {
		tab[i].addEventListener('click', onClickTab, false)
	}

	function random(array) {
		let current_index = array.length
		let random_index
		let temporary_index
		while (0 !== current_index) {
			random_index = Math.floor(Math.random() * current_index)
			current_index -= 1
			temporary_index = array[current_index]
			array[current_index] = array[random_index]
			array[random_index] = temporary_index
		}
		return array
	}

	function onClickTab(e) {
		e.preventDefault()
		let gender = this.getAttribute('data-gender')
		let value = this.getAttribute('data-value')
		if (gender) {
			for (let i = 0, length = tab.length; i < length; i++) {
				if (tab[i].classList.contains('active')) {
					tab[i].classList.remove('active')
				}
			}
			this.classList.add('active')
		}
		gender === null ? gender = temporary_gender : temporary_gender = gender
		showProduct(gender, value)
		window.scrollTo(0, 0)
	}

	function showProduct(gender, value) {
		let _product = ''
		let _products = []
		let _randomProducts
		let count = 0
		for (let i = 0; i < products.length; i++) {
			let categories = products[i].categories
			for (let j = 0, length = categories.length; j < length; j++) {
				if (categories[j] == value) {
					for (let k = 0, length = categories[j].length; k < length; k++) {
						if (categories[k] == gender) {
							_products.push(products[i])
							_randomProducts = random(_products.slice())
							count++
							break
						}
					}
				}
			}
		}
		if (_randomProducts === undefined) {
			_product = '<div class="empty">No product there :(</div>'
		} else {
			for (let l = 0, length = _randomProducts.length; l < length; l++) {
				_product += '<div id="' + _randomProducts[l].id + '" class="product' + (_randomProducts[l].bag ? ' in-bag' : '') + (_randomProducts[l].discount ? ' soldes' : '') + '"><div class="img"><img src="img/' + _randomProducts[l].img + '.jpg" alt="' + _randomProducts[l].title + '"><svg class="bag" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20"></circle><path d="M28,26.987 L28,16 L12,16 L12,27 L28,26.987 Z M14.077,14 C14.5638733,11.1096772 17.0689616,8.99496487 20,9 C22.973,9 25.562,11.162 26.038,14 L30,14 L30,28.986 L10,29 L10,14 L14.077,14 Z M23.979,13.995 C23.531,12.275 21.86,11 20,11 C18.153,11 16.604,12.294 16.144,13.995 C17.064,13.995 23.798,14.025 23.979,13.995 Z" stroke-width="1"></path></svg></div><div class="caption"><span class="brand">' + _randomProducts[l].brand + ' - </span><span class="title">' + _randomProducts[l].title + ' - </span><span class="color">' + _randomProducts[l].color[0] + '</span><span class="price">' + _randomProducts[l].price + ' €' + (_randomProducts[l].discount ? '<span>' + _randomProducts[l].discount.toFixed(2) + ' €</span>' : '') + '</span></div></div>'
			}
		}
		document.getElementById('products').innerHTML = _product
		console.log(gender,'→',value,'→',count)
	}

	function onClickProduct(e) {
		if (e.target !== e.currentTarget) {
			if (e.target.classList.contains('bag')) {
				let product = e.target.parentNode.parentNode
				gotoBag(product)
			} else {
				let product = e.target.parentNode
				gotoDetails(product)
			}
		}	
		e.stopPropagation()
	}

	var bag_counter = 0
	function gotoBag(product) {
		for (let i = 0; i < products.length; i++) {
			if( products[i].id == product.id) {
				let $product = $products.querySelector('#'+product.id)
				if (!products[i].bag) {
					products[i].bag = true
					let html = '<div id="' + products[i].id + '" class="product' + (products[i].discount ? ' soldes' : '') + '"><div class="img"><img src="img/' + products[i].img + '.jpg" alt="' + products[i].title + '"></div><div class="caption"><span class="title">' + products[i].title + '</span><span class="price">' + (products[i].discount ? products[i].discount.toFixed(2) : products[i].price) + ' €</span></div></div>'
					$list.insertAdjacentHTML('beforeend', html)
					product.classList.add('in-bag')
					if (!$product.classList.contains('in-bag')) {
						$product.classList.add('in-bag')
					}
					if ($empty.style.display == 'block') {
						$empty.style.display = 'none'
					}
					bag_counter++
					console.log('Add →',product.id)
					break
				} else {
					products[i].bag = false
					$list.querySelector('#'+product.id).remove();
					product.classList.remove('in-bag')
					if ($product.classList.contains('in-bag')) {
						$product.classList.remove('in-bag')
					}
					if ($list.childElementCount < 2) {
						$empty.style.display = 'block'
					}
					bag_counter--
					console.log('Remove →',product.id)
					break
				}
			}
		}
		$count.innerHTML = bag_counter
	}

	function gotoDetails(product) {
		for (let i = 0; i < products.length; i++) {
			if (products[i].id == product.id) {
				let _product = '<div id="' + products[i].id + '" class="product' + (products[i].discount ? ' soldes' : '') + '"><div class="img"><img src="img/' + products[i].img + '.jpg" alt="' + products[i].title + '"></div><div class="caption"><span class="brand">' + products[i].brand + '</span> - <span class="title">' + products[i].title + '</span><span class="collection">Collection ' + products[i].collection + '</span><span class="color">Colors: ' + products[i].color.join(', ') + '</span><span class="size">Sizes: ' + products[i].size.join(', ') + '</span><span class="price">' + products[i].price + ' €' + (products[i].discount ? '<span>' + products[i].discount.toFixed(2) + ' €</span>' : '') + '</span><span class="bag' + (products[i].bag ? ' disable' : '') + '">' + (products[i].bag ? 'Remove to bag' : 'Add to bag') + '</span></div>'
				$details.innerHTML = _product
				$body.classList.add('details')
				break
			}
		}
		$body.classList.add('details')
	}

	function onClickDetails(e) {
		if (e.target.classList.contains('bag')) {
			let product = e.target.parentNode.parentNode
			gotoBag(product)
		}
		$details.innerHTML = ''
		$body.classList.remove('details')
		e.stopPropagation()
	}

})()