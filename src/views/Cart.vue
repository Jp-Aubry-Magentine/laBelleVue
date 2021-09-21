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
	
    },
	data() {
		
	},
	computed: {
		
	},
	methods: {
		check() {
			console.log(this.$store.state.simpleMenu)
		},
	}
}
</script>