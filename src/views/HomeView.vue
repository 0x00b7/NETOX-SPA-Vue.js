<template>
  <div class="container">
    <div class="welcome">
      <h1>
        MAKE THE WWW <br />
        YOUR <span id="u" class="blueviolet">TERRITORY!</span>
      </h1>
    </div>
    <div class="definition">
      <h1>Netox not only creates your presentation but also provides all the other components to deliver your site.</h1>
      <h2>We will</h2>
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  background-color: rgba(0, 110, 255, 0.5);
}
.container {
  padding: 1vh 1vh;
  font-size: 3vh;
}

.welcome {
  line-height: 1;
}

.definition {
  font-size: 1.5vh;
  line-height: 1;
}

@media (min-width: 1024px) {
  .container {
    display: flex;
  }
}
</style>
