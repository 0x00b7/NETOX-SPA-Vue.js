<template>
<form name="ask-question" netlify netlify-honeypot="bot-field">
	<textarea :value="form.askPerson" name="question"></textarea>
	<button @click="handleSubmit()" type="submit"></button>
</form>
</template>

  <script>
  import axios from "axios";
  
  export default {
	data () {
	  return {
		form: {
		  askPerson: ""
		},
	  }
	},
	methods: {
	  encode (data) {
		return Object.keys(data)
		  .map(
			key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
		  )
		  .join("&");
	  },
	  handleSubmit () {
		const axiosConfig = {
		  header: { "Content-Type": "application/x-www-form-urlencoded" }
		};
		axios.post(
		  "/",
		  this.encode({
			"form-name": "ask-question",
			...this.form
		  }),
		  axiosConfig
		);
	  }
	}
  }
  </script>