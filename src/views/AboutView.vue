 <template>
    <div class="container">
        <Suspense>
            <template #default>
                <AboutFetch />
            </template>
            <template #fallback>
                <Loading/>
            </template>
        </Suspense>
        <div class="section">
            <h1>My Name is Gernot, Founder of Netox.ws! <br> I'm a 21-Year-Old Web/Software-Developer.</h1>
            <h2>At the Age of 12 I became Passionate about Technic & it's Journey, Day on – Day off, learning new capabilities about HTML/CSS3 as well as JavaScript and its wide Spectrum of Features… These days I am running a Website Developing Service, helping hundreds of People visualizing their Products on the World Wide Web!</h2>
            <h1>I am Always Dedicated and Open for new Projects at every Scale possible!</h1>
            <h2>For business inquiries regarding Web-Development, directly Open a Ticket via our Form or Sending an E-Mail to: admin@netox.ws</h2>
        </div>
    </div>
 </template>

 <script>
import Loading from "../components/Fetch/LoadingSkeleton.vue";
import AboutFetch from "../components/Fetch/AboutFetch.vue";

export default {
  components: {
    Loading: Loading,
    AboutFetch: AboutFetch,
  },
}
</script>
 
<style scoped>
.container {
    display: flex;
}

.section {
    width: 100%;
}

.section h1 {
    margin-bottom: 0.5rem;
}

.section h2 {
    margin-bottom: 2.5rem;
}


@media (max-width: 64em) {
    .container {
        display: grid;
    }

    .section:nth-child(1) {
        display: flex;
        justify-content: center;
    }

    .section:nth-child(2) {
        padding: 1rem;
    }
}
</style>