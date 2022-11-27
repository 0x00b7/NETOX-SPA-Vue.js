<template>
  <div class="container">
    <div class="welcome">
      <h1>MAKE THE WWW <br/>YOUR<span id="u" class="blueviolet">TERRITORY!</span>
      </h1>
    </div>
    <div class="definition">
      <h1> Netox not only creates your presentation but also provides all the other components to deliver your site. </h1>
      <h2>WE ARE RESPONSIBLE FOR</h2>
      <ul class="fa-ul">
        <li>
          <span class="fa-li">
            <i class="fa-sharp fa-rectangle-code"></i>
          </span>PROGRAMMING
        </li>
        <li>
          <span class="fa-li">
            <i class="fa-sharp fa-wifi"></i>
          </span>HOSTING
        </li>
        <li>
          <span class="fa-li">
            <i class="fa-sharp fa-link"></i>
          </span>DOMAIN-LINKING
        </li>
        <li>
          <span class="fa-li">
            <i class="fa-sharp fa-magnifying-glass-location"></i>
          </span>SEARCH-ENGINE-OPTIMIZATION (SEO)
        </li>
        <li>
          <span class="fa-li">
            <i class="fa-sharp fa-shield-keyhole"></i>
          </span>SERVICE PROTECTION
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  ul {
    padding: 1% 0;
    left: -1%
  }

  li {
    line-height: 1.5;
  }

  div {
    width: 100%;
  }

  .container {
    padding: 1vh 1vh;
    font-size: 4vh;
  }

  .definition {
    font-size: 2vh;
  }

  .definition h2 {
    margin-top: 1rem;
    text-align: center;
    border-bottom: 1px solid var(--color-border);
  }

  @media (min-width: 1024px) {
    .container {
      display: flex;
    }
  }
</style>