<script>
import axios from 'axios';
import anime from 'animejs';


export default {
    data() {
        return {
            items: [],
        }
    },
    async mounted() {
        try {
            const headers = {
                "Authorization": "N3T0X",
            };
            const options = {
                headers
            };
            const response = await axios.get('https://armbush.lehle-gernot2441.workers.dev/', options)
            this.items.push(...response.data);
            await this.animateItems();
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
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
      <div class="admin">
        <div v-for="item in items" :key="item.id" :id="'data-' + item.id" class="ticket">
          {{ item.company }} | {{ item.type }} | {{ item.forename }} | {{ item.surname }} | {{ item.email }} | {{ item.number }} | {{ item.scheme }} | {{ item.imagination }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

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
}

.admin {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  height: 200px;
  margin: 1rem;
  padding: 1rem;
}

.ticket {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
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
