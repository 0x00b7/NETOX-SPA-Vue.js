<template>
<div class="skeleton">
    <div class="placeholder"></div>
</div>
</template>

<style scoped>
.placeholder {
  width: 100%;
  height: 500px;
  background-color: rgb(25, 25, 25);
  opacity: 0.5;
}

.skeleton {
    -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    -webkit-mask-size: 200% 100%;
    mask-size: 200% 100%;
    width: 100%;
    padding: 20px;
    -webkit-animation: skeleton 2s linear infinite;
    animation: skeleton 2s linear infinite;
}

@-webkit-keyframes skeleton {
    100% {
        -webkit-mask-position: -200% 0%;
        mask-position: -200% 0%
    }
}

@keyframes skeleton {
    100% {
        -webkit-mask-position: -200% 0%;
        mask-position: -200% 0%
    }
}
</style>

