<script>
import axios from 'axios';
import anime from 'animejs';


export default {
    data() {
        return {
            items: [],
            key: ""
        }
    },
    methods: {
        async fetch() {
            const headers = {
                "Authorization": this.key,
            };
            const options = {
                headers
            };
            const response = await axios.get('https://armbush.lehle-gernot2441.workers.dev/', options)
            this.items.push(...response.data);
            await this.animateItems();
        },
        async animateItems() {
            await this.$nextTick();
            this.items.forEach((item, index) => {
                const selector = `#data-${item.id}`;
                anime({
                    targets: document.querySelectorAll(selector),
                    opacity: 1,
                    duration: 100,
                    delay: 25 * index
                });
            });
        },
    }
}
</script>

<template>
  <div class="container">
    <div class="section">
    <div class="auth">
      <input placeholder="Auth...">
      <button @click="fetch()">Send</button>
    </div>
      <div class="admin">
        <div v-for="item in items" :key="item.id" :id="'data-' + item.id" class="ticket">
          {{ item.company }} | {{ item.type }} | {{ item.forename }} | {{ item.surname }} | {{ item.email }} | {{ item.number }} | {{ item.scheme }} | {{ item.imagination }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 0;
  font-size: larger;
  color: white;
}

button {
  font-family: 'Titillium Web';
  font-weight: 200;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: larger;
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem;
}

button:hover {
  background-color: rgba(0, 75, 255, 0.8);
}

.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}

.section {
  width: 100%;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  padding: 0 2rem;
}

.section * {
  margin: 0.5rem 0;
}

.admin {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
}

.auth {
  width: 100%;
  display: grid;
}

.ticket {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  width: 100%;
  padding: 1rem;
}

@media (max-width: 64em) {
  .container {
    display: -ms-grid;
    display: grid;
  }

}

@media (max-width: 32em) {
}
</style>
