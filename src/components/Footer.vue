<template>
  <footer>
      <div>
        <div class="header" id="company">NETOX.ws</div>
          <ul>
              <li>
                  <span class="fa-li">
                    <i class="fa-solid fa-earth-americas"></i>
                  </span>
                  <RouterLink to="/">Home</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                  </span>
                  <RouterLink to="/Service">Service</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                    <i class="fa-solid fa-comments-question"></i>
                  </span>
                  <RouterLink to="/FAQs">FAQs</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                    <i class="fa-solid fa-person-rays"></i>
                  </span>
                  <RouterLink to="/About">About</RouterLink>
              </li>
              <span id="section">Legal Center</span>
              <li>
                  <span class="fa-li">
                    <i class="fa-solid fa-person-rays"></i>
                  </span>
                  <RouterLink to="/Legal-Center/Trademark">Trademark</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                    <i class="fa-solid fa-person-rays"></i>
                  </span>
                  <RouterLink to="/Legal-Center/Privacy">Privacy</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                    <i class="fa-solid fa-person-rays"></i>
                  </span>
                  <RouterLink to="/Legal-Center/Eula">Eula</RouterLink>
              </li>
          </ul>
      </div>
      <div>
        <div class="header">Social Media</div>
          <ul>
              <li>
                  <span class="fa-li">
                    <i class="fa-brands fa-tiktok"></i>
                  </span>
                  <a href="https://www.tiktok.com/@netox.ws" target="_blank" rel="noopener noreferrer">TikTok</a>
              </li>
              <li>
                  <span class="fa-li">
                    <i class="fa-brands fa-instagram"></i>
                  </span>
                  <a href="https://www.instagram.com/netox.ws/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
          </ul>
      </div>
      <div>
        <div class="header">Communication</div>
          <ul>
              <li>
                  <span class="fa-li">
                    <i class="fa-solid fa-at"></i>
                  </span>
                  <a href="mailto:admin@netox.ws" target="_blank" rel="noopener noreferrer">E-Mail</a>
              </li>
              <li>
                  <span class="fa-li">
                    <i class="fa-brands fa-whatsapp"></i>
                  </span>
                  <a href="https://wa.me/message/I2C4ETTGL33HB1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
          </ul>
      </div>
  </footer>
</template>


<style scoped>
footer {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 500px;
}

footer .header {
  text-align: left;
  position: relative;
  max-height: 0;
  font-weight: 600;
  background: 0;
}

footer .header#company {
  font-size: 2rem;
  font-weight: 600;
  font-style: italic;
}

footer div {
  display: block;
  width: 100%;
}

footer div ul {
  list-style: none;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin: 1.5rem 0.5rem;
}

footer div ul span#section {
  font-size: smaller;
  color: rgba(0, 110, 255, 1);
}

footer div ul li {
  padding: 0.5rem;
}

footer div h3 {
  font-weight: 600;
}

.router-link-active {
  color: white;
}

.router-link-exact-active {
  color: white;
}


@media (max-width: 64em) {
  footer {
    height: 300px;
    display: -ms-grid;
    display: grid;
  }
}
</style>
