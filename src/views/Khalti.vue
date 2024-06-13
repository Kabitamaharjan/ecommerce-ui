 <!-- //eslint-disable-next-line

<template>
	<div>
		<slot>
			<button @click="onClick" type="button">Pay with Khalti</button>
		</slot>
	</div>
</template>

<script>
import KhaltiCheckout from "khalti-web"

	export default {
		name: 'KhalTi',
		props: {
			publicKey: {
				type: String, 
				default: "test_public_key_459968fff3554b6b8e72013a5e0a9b78"
			},
			productIdentity: { 
				type: null, 
				default: "1234567890"
			},
			productName: { 
				type: String, 
				default: "Item" 
			},
			productUrl: { 
				type: String, 
				default: "http://localhost:8081/"
			},
			amount: {
				type: Number,
				default: 0
			},
			eventHandler: {
				type: Object,
				default: function () {
					return {
						onSuccess: function (payload) {
							console.log(payload)
						},
						onError: function (error) {
							console.log(error)
						},
						onClose: function () {
							console.log('widget is closing')
						}
					}
				}
			},
			merchant_name: { 
				type: String
			},
			merchant_extra: {
				type: null
			},
		},
		components: { KhaltiCheckout },
		methods: {
			onClick: function () {
				let config = {
				    publicKey: this.publicKey,
				    productIdentity: this.productIdentity,
				    productName: this.productName,
				    productUrl: this.productUrl,
				    eventHandler: this.eventHandler
				}
				let checkout = new KhaltiCheckout(config);
			    checkout.show({ amount: this.amount });
			}
		}
	}
</script>  -->