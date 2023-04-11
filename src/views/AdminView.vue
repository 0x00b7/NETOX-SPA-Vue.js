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
        async complete(item) {
            const headers = {
                "Authorization": this.key,
                "Access-Control-Allow-Methods": "DELETE"
            };
            const options = {
                headers
            };
            await axios.delete('https://armbush.lehle-gernot2441.workers.dev/' + item, options)
        },
        async fetch() {
            const headers = {
                "Authorization": this.key,
            };
            const options = {
                headers
            };
            try {
                const response = await axios.get('https://armbush.lehle-gernot2441.workers.dev/', options)
                const newItems = response.data.filter(item => !this.items.some(existing => existing.id === item.id));
                this.items.push(...newItems);
                await this.animateItems();
            } catch (error) {
                console.error(error);
            }
        },
        async animateItems() {
            await this.$nextTick();
            this.items.forEach((item, index) => {
                const selector = `#data-${item.id}`;
                anime({
                    targets: document.querySelectorAll(selector),
                    opacity: [0, 1],
                    duration: 250,
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
      <input v-model="this.key" placeholder="Password...">
      <button @click="fetch()">Send</button>
    </div>
      <div class="admin">
        <div v-for="item in items" :key="item.id" :id="'data-' + item.id" class="array">
          <h3>ID: {{ item.id }}</h3>
          <div v-if="item.status">
            {{ item.status }}
          </div>
          <button @click="complete(item.id)">DONE</button>
          <div class="object"><span>company: </span>{{ item.company }}</div>
          <div class="object"><span>type: </span>{{ item.type }}</div>
          <div class="object"><span>forename: </span>{{ item.forename }}</div>
          <div class="object"><span>surname: </span>{{ item.surname }}</div>
          <div class="object"><span>e-mail: </span>{{ item.email }}</div>
          <div class="object"><span>number: </span>{{ item.number }}</div>
          <div class="object"><span>scheme: </span>{{ item.scheme }}</div>
          <div class="object"><span>imagination: </span>{{ item.imagination }}</div>
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

.array {
  border-bottom: 2px solid rgb(255, 255, 255);
}

.object {
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
}

.object span {
  font-variant: small-caps;
  color: rgb(0, 100, 255);
  font-size: larger;
  font-weight: 700;
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
