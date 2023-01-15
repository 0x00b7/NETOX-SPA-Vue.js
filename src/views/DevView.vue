<template>
	<form name="order-now" @submit.prevent="handleSubmit">
		<textarea v-model="form.message" name="message"></textarea>
		<button @click="handleSubmit()">Send</button>
	</form>
	</template>
	 
	<script>
	import axios from "axios";
	
	export default {
		data() {
			return {
				form: {
					message: ''
				}
			}
		},
	
		methods: {
			encode(data) {
				return Object.keys(data)
					.map(
						key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
					)
					.join("&");
			},
	
			handleSubmit() {
				const axiosConfig = {
					header: {
						"Content-Type": "application/x-www-form-urlencoded"
					}
				};
				axios.post(
					"/",
					this.encode({
						"form-name": "order-now",
						...this.form
					}),
					axiosConfig
				)
				.then(() => {
					this.$router.push('thanks')
				})
				.catch(() => {
					this.$router.push('404')
				});
			}
			
		}
	}
	</script>
