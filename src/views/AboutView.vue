<template>
  <div class="container">
    <div class="section">
      <div class="loader" ref="loading">
        <div class="placeholder"></div>
      </div>
      <img ref="image" />
    </div>
    <div class="section">
      <h1>
        My Name is Gernot, Founder of Netox.ws! <br />
        I'm a 21-Year-Old Web/Software-Developer.
      </h1>
      <h2>
        At the Age of 12 I became Passionate about Technic, and it's Journey,
        Day on – Day off, learning new capabilities about HTML/CSS3 as well as
        JavaScript and its wide Spectrum of Features… These days I am running a
        Website Developing Service, helping People Visualizing their Products on
        the World Wide Web!
      </h2>
      <h1>
        I am Always Dedicated and Open for new Projects at every Scale possible!
      </h1>
      <h2>
        For business inquiries regarding Web-Development, directly Open a Ticket
        via our Form or Sending an E-Mail to: admin@netox.ws
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const computedStyle = window.getComputedStyle(this.$refs.image);

    const imageSrc = computedStyle.content.slice(5, -2);

    const image = new Image();

    image.src = imageSrc;

    if (!image.complete) {
      this.$refs.loading.style.display = "block";
    }

    image.onload = () => {
      this.$refs.loading.style.display = "none";
      this.$refs.image.style.display = "block";
    };
  },
};
</script>

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

.section h1 {
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.section h2 {
  font-weight: 200;
  margin-bottom: 2rem;
}

.section h2:last-child {
  margin-bottom: 0;
}

.section:nth-child(2) {
  margin: 2rem;
}

.loader {
  display: none;
  -webkit-mask-image: -webkit-linear-gradient(
    320deg,
    rgba(0, 0, 0, 0.3) 55%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0.3) 95%
  );
  mask-image: linear-gradient(
    130deg,
    rgba(0, 0, 0, 0.3) 55%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0.3) 95%
  );
  -webkit-mask-size: 200% 100%;
  mask-size: 200% 100%;
  -webkit-animation: placeholder 2s linear infinite;
  -moz-animation: placeholder 2s linear infinite;
  -o-animation: placeholder 2s linear infinite;
  animation: placeholder 2s linear infinite;
  width: 100%;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  -webkit-transition: display 1s;
  -o-transition: display 1s;
  -moz-transition: display 1s;
  transition: display 1s;
}

.placeholder {
  background-color: rgba(0, 0, 0, 0.7);
  height: 700px;
}

img {
  display: none;
  content: url(../assets/images/admin.png);
  width: 100%;
  height: 100%;
  -webkit-border-radius: 6rem;
     -moz-border-radius: 6rem;
          border-radius: 6rem;
  padding: 2rem;
}

@-webkit-keyframes placeholder {
  100% {
    -webkit-mask-position: -600% 0%;
    mask-position: -600% 0%;
  }
}

@-moz-keyframes placeholder {
  100% {
    mask-position: -600% 0%;
  }
}

@-o-keyframes placeholder {
  100% {
    mask-position: -600% 0%;
  }
}

@keyframes placeholder {
  100% {
    -webkit-mask-position: -600% 0%;
    mask-position: -600% 0%;
  }
}

@media (max-width: 64em) {
  .container {
    display: -ms-grid;
    display: grid;
  }

  img {
    content: url(../assets/images/admin_small.png);
    width: 100%;
    padding: 0.5rem;
  }

  .section:nth-child(1) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .section:nth-child(2) {
    padding: 1rem;
    margin: 0;
  }
}

@media (max-width: 32em) {
}
</style>
