import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		restaurantName: "La belle vue",
		shoppingCart: 0,
		simpleMenu: [
			{
				id:1,
				name: "Nos Croissants",
				category: "viennoiserie",
				image: {
					source: "/images/crossiant.jpg",
					alt: "Un croissant"
				},
				inStock: true,
				quantity: 1,
				price: 2.99
			},
			{
				id:2,
				name: "Nos Baguettes Tradition",
				category: "pain",
				image: {
					source: "/images/french-baguette.jpeg",
					alt: "Quatre baguettes de pain"
				},
				inStock: true,
				quantity: 1,
				price: 3.99
			},
			{
				id:3,
				name: "Nos Éclairs",
				category: "patisserie",
				image: {
					source: "/images/eclair.jpg",
					alt: "Éclair au chocolat"
				},
				inStock: false,
				quantity: 1,
				price: 4.99
			},
			{
				id:4,
				name: "Nos Tartes du jour",
				category: "patisserie",
				image: {
					source: "/images/tarte.jpg",
					alt: "Tarte aux abricots"
				},
				inStock: false,
				quantity: 1,
				price: 3.50
			},
			{
				id:5,
				name: "Nos Pains spéciaux",
				category:"pain",
				image: {
					source: "/images/pain-aux-cereales.jpg",
					alt: "Pain aux céréales"
				},
				inStock: true,
				quantity: 1,
				price: 2.30
			},
			{
				id:6,
				name: "Nos Chocolatines",
				category: "viennoiserie",
				image: {
					source: "/images/chocolatine.jpeg",
					alt: "Pain au chocolat"
				},
				inStock: true,
				quantity: 1,
				price: 2.99
			},
			{
				id:7,
				name: "L'Expresso",
				category: "boisson",
				image: {
					source: "/images/expresso.jpeg",
					alt: "Expresso"
				},
				inStock: true,
				quantity: 1,
				price: 1.40
			},
			{
				id:8,
				name: "Capuccino della casa",
				category: "boisson",
				image: {
					source: "/images/capuccino.jpg",
					alt: "Capuccino"
				},
				inStock: true,
				quantity: 1,
				price: 2.50
			},
			{
				id:1,
				name: "Nos Cookies",
				category: "patisserie",
				image: {
					source: "/images/cookie.jpg",
					alt: "Cookie"
				},
				inStock: true,
				quantity: 1,
				price: 2.20
			},
		]
	},
	getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.restaurantName} ${currentYear}`
		},
	},
	mutations: {},
	actions: {},
	modules: {}
})