<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref({
    firstname: "First Name",
    lastname: "Last Name" 
});

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

async function handleSubmit(data) {
    console.log(data);
    fetch("/dev", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode ({
        "form-name": "main-form",
        "firstname": data.firstname,
        "lastname": data.lastname
    }),
    })
    .then(() => router.replace({ path: '/success' })) // forward to another page
    .catch((error) => alert(error));
} 
</script>

<template>
<form type="form" name="main-form" :value="formData">
    <input
      type="text"
      name="firstname"
      label="First Name"
    />
    <input
    type="text"
    name="lastname"
    label="Last Name"
    />
    <button @click="handleSubmit()">easy</button>
</form>    
</template>