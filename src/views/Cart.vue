<template>
    <div style="background:red">
        <h1>Votre panier</h1>
        <b-btn @click="check">ok</b-btn>
        <b-row>
            <b-col>
                
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
	props: {
		shoppingCart: {
			type: Object,
			required: true
		},
    },
	data() {
		
	},
	computed: {
		
	},
	methods: {
		check() {
			console.log(this.shoppingCart)
		},
	}
}
</script>