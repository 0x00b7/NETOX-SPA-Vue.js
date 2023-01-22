<template>
   <footer>
      <div>
         <h3>Resources</h3>
         <ul class="fa-ul">
            <li>
               <span class="fa-li">
               <i class="fa-sharp fa-scale-balanced"></i>
               </span>
               <RouterLink to="/Law/imprint">Legal & Privacy</RouterLink>
            </li>
         </ul>
      </div>
      <div>
         <h3>Social Media</h3>
         <ul class="fa-ul">
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
         <h3>Contact</h3>
         <ul class="fa-ul">
            <li>
               <span class="fa-li">
               <i class="fa-sharp fa-at"></i>
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
   box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 1);
   z-index: 0;
   position: relative;
   display: -webkit-box;
   display: -webkit-flex;
   display: -moz-box;
   display: -ms-flexbox;
   display: flex;
   padding: 1rem 0rem 0rem 3rem;
   height: 500px;
   background: linear-gradient(164deg, rgb(0, 16, 40) 0%, rgb(40, 0, 50) 100%); 
}

footer div {
   display: block;
   width: 100%;
}

footer div h3 {
   font-weight: 600;
}

ul {
   margin: 0 0 0 0px;
}

li {
   padding: 5px 0;
}

@media (max-width: 64em) {
   footer {
      height: 300px;
      display: -ms-grid;
      display: grid;
   }
}
</style>