var productsList = [
	{
		id: 'product1',
		name: 'jean_skinny_taille_haute_delavage',
		title: 'Jean skinny taille haute à délavage',
		color: ['Foncé délavé', 'Foncé extrême', 'Bleu', 'Bleu délavé'],
		img: 'pants-3',
		price: '31.99',
		clothing: 'Jean',
		gender: 'Femme',
		size: ['XXS', 'XS', 'S', 'M'],
		collection: 'Spring',
		brand: 'Brand3',
		categories: ['Tous', 'Femme', 'Jean', 'Spring', 'Brand3', 'Bleu']
	},
	{
		id: 'product2',
		name: 'chemise_moulante_en_popeline',
		title: 'Chemise moulante en popeline',
		color: ['Noir', 'Gris'],
		img: 'shirt-5',
		price: '19.99',
		clothing: 'Chemise',
		gender: 'Homme',
		size: ['S', 'M', 'L', 'XL', 'XXL'],
		collection: 'Autumn',
		brand: 'Brand2',
		categories: ['Tous', 'Homme', 'Chemise', 'Autumn', 'Brand2', 'Noir']
	},
	{
		id: 'product3',
		name: 'robe_mulet_mi_longue_a_carreaux',
		title: 'Robe mulet mi-longue à carreaux',
		color: ['Bleu'],
		img: 'dress-5',
		price: '165.49',
		clothing: 'Robe',
		gender: 'Femme',
		size: ['XS', 'S', 'M', 'L'],
		collection: 'Autumn',
		brand: 'Brand2',
		categories: ['Tous', 'Femme', 'Robe', 'Autumn', 'Brand2', 'Bleu']
	},
	{
		id: 'product4',
		name: 'jean_slim_taille_haute_avec_dechirures',
		title: 'Jean slim taille haute avec déchirures',
		color: ['Noir délavé', 'Noir'],
		img: 'pants-4',
		price: '29.99',
		clothing: 'Jean',
		gender: 'Femme',
		size: ['XS', 'S', 'M', 'L'],
		collection: 'Autumn',
		brand: 'Brand3',
		categories: ['Tous', 'Femme', 'Jean', 'Autumn', 'Brand3', 'Noir']
	},
	{
		id: 'product5',
		name: 'manteau_en_crepe_avec_poches',
		title: 'Manteau en crêpe avec poches',
		color: ['Fauve', 'Blanc'],
		img: 'coat-1',
		price: '82.99',
		clothing: 'Manteau',
		gender: 'Femme',
		size: ['XS', 'S', 'M'],
		collection: 'Autumn',
		brand: 'Brand1',
		categories: ['Tous', 'Femme', 'Manteau', 'Autumn', 'Brand1', 'Blanc']
	},
	{
		id: 'product6',
		name: 'robe_chemise_courte_en_coton',
		title: 'Robe chemise courte en coton',
		color: ['Noir'],
		img: 'dress-2',
		price: '28.99',
		clothing: 'Robe',
		gender: 'Femme',
		size: ['XS', 'S', 'M', 'L', 'XL'],
		collection: 'Spring',
		brand: 'Brand2',
		categories: ['Tous', 'Femme', 'Robe', 'Chemise', 'Spring', 'Brand2', 'Noir']
	},
	{
		id: 'product7',
		name: 'selected_jean_slim',
		title: 'Selected jean slim',
		color: ['Noir', 'Gris'],
		img: 'pants-6',
		price: '69.99',
		clothing: 'Jean',
		gender: 'Homme',
		size: ['S', 'M', 'L', 'XL'],
		collection: 'Spring',
		brand: 'Brand2',
		categories: ['Tous', 'Homme', 'Jean', 'Spring', 'Brand2', 'Noir']
	},
	{
		id: 'product8',
		name: 'selected_jean_droit',
		title: 'Selected jean droit',
		color: ['Bleu clair', 'Bleu foncé', 'Bleu'],
		img: 'pants-5',
		price: '60.99',
		clothing: 'Jean',
		gender: 'Homme',
		size: ['S', 'M', 'L', 'XL', 'XXL'],
		collection: 'Autumn',
		brand: 'Brand2',
		categories: ['Tous', 'Homme', 'Jean', 'Autumn', 'Brand2', 'Bleu']
	},
	{
		id: 'product9',
		name: 'selected_pull_en_maille_en_cotons',
		title: 'Selected pull en maille en coton et cachemire mélangés',
		color: ['Bleu'],
		img: 'pull-2',
		price: '87.99',
		clothing: 'Pull',
		gender: 'Homme',
		size: ['S', 'M', 'L'],
		collection: 'Spring',
		brand: 'Brand2',
		categories: ['Tous', 'Homme', 'Pull', 'Spring', 'Brand2', 'Bleu']
	},
	{
		id: 'product10',
		name: 'manteau_style_militaire',
		title: 'Manteau style militaire',
		color: ['Noir'],
		img: 'coat-3',
		price: '159.99',
		clothing: 'Manteau',
		gender: 'Homme',
		size: ['S', 'M', 'L'],
		collection: 'Autumn',
		brand: 'Brand1',
		categories: ['Tous', 'Homme', 'Manteau', 'Autumn', 'Brand1', 'Noir']
	},
	{
		id: 'product11',
		name: 'chemise_a_manches_longues_et_motif',
		title: 'Chemise à manches longues et motif',
		color: ['Vert'],
		img: 'shirt-3',
		price: '29.99',
		clothing: 'Chemise',
		gender: 'Femme',
		size: ['XS', 'S', 'M', 'L', 'XL'],
		collection: 'Spring',
		brand: 'Brand2',
		categories: ['Tous', 'Femme', 'Chemise', 'Spring', 'Brand2', 'Vert']
	},
	{
		id: 'product12',
		name: 'Robe_babydoll_courte_reversible',
		title: 'Robe babydoll courte réversible en coton flammé',
		color: ['Kaki', 'Vert'],
		img: 'dress-3',
		price: '29.99',
		clothing: 'Robe',
		gender: 'Femme',
		size: ['XXS', 'XS', 'S', 'M', 'L'],
		collection: 'Spring',
		brand: 'Brand2',
		categories: ['Tous', 'Femme', 'Robe', 'Chemise', 'Spring', 'Brand2', 'Vert']
	},
	{
		id: 'product13',
		name: 'robe_missguided_moulante',
		title: 'Robe missguided moulante à col montant',
		color: ['Noir'],
		img: 'dress-1',
		price: '42.99',
		clothing: 'Robe',
		gender: 'Femme',
		size: ['XXS', 'XS', 'S', 'M'],
		collection: 'Autumn',
		brand: 'Brand1',
		categories: ['Tous', 'Femme', 'Robe', 'Autumn', 'Brand1', 'Noir']
	},
	{
		id: 'product14',
		name: 'jean_pretty_little_thing',
		title: 'Jean pretty little thing',
		color: ['Bleu délavé', 'Bleu délavé moyen', 'Bleu', 'Navy'],
		img: 'pants-2',
		price: '30.99',
		clothing: 'Jean',
		gender: 'Femme',
		size: ['XXS', 'XS', 'S', 'M'],
		collection: 'Autumn',
		brand: 'Brand3',
		categories: ['Tous', 'Femme', 'Jean', 'Autumn', 'Brand3', 'Bleu']
	},
	{
		id: 'product15',
		name: 'robe_chemise_cache_coeur',
		title: 'Robe chemise cache-cœur noué à la taille',
		color: ['Multi', 'Blanc'],
		img: 'dress-4',
		price: '38.99',
		clothing: 'Robe',
		gender: 'Femme',
		size: ['XXS', 'XS', 'S', 'M', 'L'],
		collection: 'Spring',
		brand: 'Brand2',
		categories: ['Tous', 'Femme', 'Robe', 'Spring', 'Brand2', 'Blanc']
	},
	{
		id: 'product16',
		name: 'manteau_fausse_fourrure',
		title: 'Manteau fausse fourrure à motif léopard',
		color: ['Noir'],
		img: 'coat-2',
		price: '385.99',
		clothing: 'Manteau',
		gender: 'Femme',
		size: ['XS', 'S', 'M', 'L'],
		collection: 'Autumn',
		brand: 'Brand2',
		categories: ['Tous', 'Femme', 'Manteau', 'Autumn', 'Brand2', 'Noir']
	},
	{
		id: 'product17',
		name: 'jean_mom_slim_taille_haute',
		title: 'Jean mom slim taille haute avec fermeture à boutons apparents',
		color: ['Dark london Noir', 'Noir délavé', 'Noir délavé moyen', 'Noir'],
		img: 'pants-1',
		price: '36.99',
		clothing: 'Jean',
		gender: 'Femme',
		size: ['XXS', 'XS', 'S', 'M'],
		collection: 'Autumn',
		brand: 'Brand3',
		categories: ['Tous', 'Femme', 'Jean', 'Autumn', 'Brand3', 'Noir']
	},
	{
		id: 'product18',
		name: 'pull_court_en_maille_cotelee',
		title: 'Pull  pretty little thin court en maille côtelée',
		color: ['Orange', 'Jaune'],
		img: 'pull-1',
		price: '27.99',
		clothing: 'Pull',
		gender: 'Femme',
		size: ['XS', 'S', 'M'],
		collection: 'Autumn',
		brand: 'Brand1',
		categories: ['Tous', 'Femme', 'Pull', 'Autumn', 'Brand1', 'Orange']
	},
	{
		id: 'product19',
		name: 'blouse_pretty_little_thing_rayee',
		title: 'Blouse rayée à décolleté plongeant et ourlet à basque avec volants superposés',
		color: ['Noir'],
		img: 'shirt-2',
		price: '32.99',
		clothing: 'Chemise',
		gender: 'Femme',
		size: ['XXS','XS', 'S', 'M'],
		collection: 'Spring',
		brand: 'Brand1',
		categories: ['Tous', 'Femme', 'Chemise', 'Spring', 'Brand1', 'Noir']
	},
	{
		id: 'product20',
		name: 'robe_pretty_little_thing_patineuse',
		title: 'Robe patineuse courte avec empiècements en dentelle',
		color: ['Bordeaux'],
		img: 'dress-6',
		price: '41.99',
		clothing: 'Robe',
		gender: 'Femme',
		size: ['XXS','XS', 'S', 'M'],
		collection: 'Spring',
		brand: 'Brand1',
		categories: ['Tous', 'Femme', 'Robe', 'Spring', 'Brand1', 'Bordeaux']

	}
]