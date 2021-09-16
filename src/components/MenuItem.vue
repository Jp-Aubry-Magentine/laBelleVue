<template>
	<div class="menu-item">
		<b-row>
			<b-col>
				<b-img class="menu-item__image" :src="image.source" :alt="image.alt" />
			</b-col>
			<b-col>
				<div style="margin-left:20px">
					<h3 style="margin-bottom:20px">{{ name }}</h3>
					<p>
						Prix : {{ calculatedPrice }} €
						<span v-if="onSale">( Jour de chance = 10% de réduction !)</span>
					</p>
					<p v-if="inStock">En stock</p>
					<p v-else class="noStock">En rupture de stock. C'était si bon !! </p>
					<div>
						<b-row v-show="inStock">
							<b-col>					
								<label for="add-item-quantity">Quantité : {{ quantity }}</label>
								<b-input v-model.number="quantity" id="add-item-quantity" type="number" style="margin-top:10px" />
							</b-col>
							<b-col>
								<BaseButton @click="updateShoppingCart(quantity)" class="test">
								</BaseButton>
							</b-col>
						</b-row>
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import BaseButton from "./BaseButton.vue"

export default {
	name: "MenuItem",
  components: {
		BaseButton
	},
	props: {
		image: {
			type: Object,
			required: true
		},
		inStock: {
			type: Boolean,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		quantity: {
			type: Number,
			defaut: 1
		}
	},
	data() {
		return {
			onSale: false
		}
	},
	computed: {
		calculatedPrice() {
			if (this.onSale) {
				return (this.price * 0.9).toFixed(2)
			} else {
				return this.price
			}
		},

	},
	methods: {
		updateShoppingCart(quantity) {
			this.$emit("add-items-to-cart", quantity)
		},
		updateTotal(quantity, price) {
			this.$emit("calculateTotal", quantity, price)
		}
  },
  beforeMount() {
		const today = new Date().getDate()
		if (today % 2 === 0) {
			this.onSale = true
      console.log("Dispo")
		}
	}
}
</script>

<style>
.menu-item {
	display: flex;
	width: 700px;
	justify-content: space-between;
	margin-bottom: 30px;
}	
.menu-item__image {
	max-width: 300px;
	border-radius: 20px;
	margin: 15px;
}
.test {
	border-radius: 20px;
	margin-top:35px;
}
.test:active {
	background:	#DCDCDC;
}
.noStock {
	color:red;
	font-size: 1.2em;
}

</style>