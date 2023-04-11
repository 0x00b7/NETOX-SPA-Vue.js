<script>
import axios from 'axios';
import anime from 'animejs';


export default {
    data() {
        return {
            items: [],
            searchQuery: '',
            prevSearchQuery: '',
            fetch: false,
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
            if (response) {
                this.fetch = true;
            };
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
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                return item.type.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    item.company.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    item.url.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        },
    },
    watch: {
        searchQuery() {
            this.animateItems();
        },
    }
}
</script>

<template>
  <div class="container">
    <div class="section">
      <div class="admin">
        <div>
          <input type="text" v-model="searchQuery" placeholder="Suche...">
        </div>
        <div v-for="item in filteredItems" :key="item.id" class="ticket">
          {{ item.type }} {{ item.forename }} {{ item.surname }} {{ item.email }} {{ item.number }} {{ item.scheme }} {{ item.imagination }} {{ item.company }}
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
  background-color: red;
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
