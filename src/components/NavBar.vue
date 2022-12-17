<template>
    <header>
       <div class="wrapper">
          <nav>
             <RouterLink to="/">Home</RouterLink>
             <RouterLink to="/creation">Creation</RouterLink>
             <RouterLink to="/about">About</RouterLink>
          </nav>
       </div>
    </header>
 </template>

<style scoped>
header {
    display: grid;
}

header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
}

a.router-link-exact-active:hover {
    background-color: transparent;
}

nav {
    width: 100%;
    font-size: 24px;
    text-align: left;
    margin: 15px 0px 15px 0px;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {
    header {
        line-height: 1.5;
        max-height: 100vh;
    }

    nav {
        text-align: center;
    }
}
</style>