<template>
    <div class="container">
        <div class="header">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div class="object" v-for="object in array">
            <div class="q" @click="toggleAnswer(object)">
                <span>{{ object.question }}</span>
            </div>
            <div class="a" v-if="object.show">
                <span>{{ object.answer }}</span>
            </div>
        </div>
    </div>
  </template>

<script>
export default {
    data() {
        return {
            array: [{
                    question: "What services do you offer?",
                    answer: "A: We offer website design and development, e-commerce solutions, digital marketing, and web hosting services.",
                    show: false
                },
                {
                    question: "What is your process for developing a website?",
                    answer: "A: Our process typically includes understanding the client's requirements, planning, design, development, testing, and deployment.",
                    show: false
                },
                {
                    question: "Do you offer custom solutions?",
                    answer: "A: Yes, we offer custom solutions that are tailored to meet specific client requirements.",
                    show: false
                },
                {
                    question: "Can you help with website maintenance and updates?",
                    answer: "A: Yes, we provide ongoing website maintenance and updates as needed.",
                    show: false
                },
                {
                    question: "How do you ensure the website is secure and protected?",
                    answer: "A: We use industry-standard security measures, such as SSL encryption and regular backups, to ensure the website's security.",
                    show: false
                },
                {
                    question: "What is your pricing like?",
                    answer: "A: Our pricing is based on the specific requirements of each project and can be provided after understanding the client's needs.",
                    show: false
                },
                {
                    question: "Do you provide any guarantees or warranties?",
                    answer: "A: Yes, we provide guarantees for our work and stand behind our projects.",
                    show: false
                },
                {
                    question: "What is your timeline for completing a project?",
                    answer: "A: The timeline for a project depends on its specific requirements, but we strive to complete all projects within a reasonable timeframe.",
                    show: false
                }
            ]
        }
    },
    methods: {
        toggleAnswer(object) {
            object.show = !object.show;
        }
    }
}
</script>

<style scoped>
.container {
  display: -ms-grid;
  display: grid;
}

.object {
  margin: 1rem;
  word-wrap: break-word;
  overflow: hidden;
}

.object div {
  padding: 1rem;
}

.object .q {
  background-color: rgba(0, 0, 0, 0.2);
}

.object .a {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>