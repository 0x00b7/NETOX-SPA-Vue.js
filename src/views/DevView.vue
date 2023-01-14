<template>
	<form
	  @submit.prevent="handleSubmit">
	  <label v-for="(panelist, index) in panelists" :key="index">
		<input
		  type="radio"
		  name="panelist"
		  @input="ev => form.askPerson = ev.target.value"
		  :value="panelist"
		  :checked="form.askPerson === panelist"
		/>
		<span>{{ panelist }}</span>
	  </label>
	  <button @click="handleSubmit()">X</button>
	</form>
  </template>
  <script>
  import axios from "axios";
  
  export default {
	name: "QAForm",
	data () {
	  return {
		form: {
		  askPerson: ""
		},
		panelists: ['Evan You', 'Chris Fritz'],
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