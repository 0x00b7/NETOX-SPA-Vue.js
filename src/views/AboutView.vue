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
    </div>
 </template>

 <script>
import Loading from "../components/fetching/LoadingSkeleton.vue";
import AboutFetch from "../components/fetching/AboutFetch.vue";

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

@media (max-width: 64em) {
    .container {
        display: grid;
    }
}
</style>