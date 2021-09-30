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
								<b-button size="sm" @click="updateQuantity(id,quantity)" class="updateQuantity">-</b-button>
								<b-input v-model.number="quantity" id="add-item-quantity" type="number" :min="0" style="margin-top:10px" />
							</b-col>
							<b-col>
								<BaseButton @click="updateShoppingCart(id, quantity)" class="test">
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
		id: {
			type: Number,
			required: true
		},
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
	},
	data() {
		return {
			onSale: false,
			quantity: 1,
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
		updateShoppingCart(id, quantity) {
			this.$emit("add-items-to-cart", id, quantity)
		},
		updateQuantity(id, quantity) {
			this.$emit("substractQuantity", id, quantity)
		},
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
.updateQuantity{
	margin-left:10px;
	border-radius: 20px;
	height: 30%;
}

</style>