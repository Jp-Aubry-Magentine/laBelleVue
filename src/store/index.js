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
				image: {
					source: "/images/eclair.jpg",
					alt: "Éclair au chocolat"
				},
				inStock: false,
				quantity: 1,
				price: 4.99
			}
		]
	},
	getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.restaurantName} ${currentYear}`
		}
	},
	mutations: {},
	actions: {},
	modules: {}
})