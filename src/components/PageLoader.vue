<template>
    <div class="page-loader" v-if="!isloaded">
        <p>LOADING..</p>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                isloaded: false
            }
        },
        mounted() {
            document.onreadystatechange = () => {
                if (document.readyState == "complete") {
                    this.isloaded = true;
                }
            }
        }
    }
</script>

<style>
    .page-loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vh;
        height: 100vh;
        background-color: beige;
        z-index: 9999;
    }
</style>