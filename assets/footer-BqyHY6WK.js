(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n=()=>{let t=localStorage.getItem("cartProductLS");return t?(t=JSON.parse(t),t):[]},l=()=>{const t=n();document.querySelector("#cartValue").querySelector(".fa-solid").textContent=t.length},c=()=>{const t=document.querySelectorAll(".nav-link");let a=window.location.pathname;a==="/"&&(a="/index.html"),a=a.slice(1),t.forEach(o=>{const s=o.getAttribute("href");a===s&&o.classList.add("active")})},d=()=>{document.querySelector(".section-navbar").insertAdjacentHTML("afterbegin",`
    <section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Free shipping, 30-day return or refund guarantee</p>
        </div>
        <div class="sign_in_up">
          <a href="#">SIGN IN</a>
          <a href="#">SIGN UP</a>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="navbar-brand">
        <a href="index.html">
          <img
            src="./images/logo2.png"
            alt="ShopSphere eCommerce logo"
            width="80%"
            height="auto"
          />
        </a>
      </div>

      <nav class="navbar">
        <ul>
          <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="products.html" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a
              href="addToCart.html"
              class="nav-link add-to-cart-button"
              id="cartValue"
            >
              <i class="fa-solid fa-cart-shopping"> 0 </i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
`),c()},h=()=>{document.querySelector(".section-footer").insertAdjacentHTML("afterbegin",`
    <div class="footer-container container">
        <div class="content_1">
          <img src="./images/logo3.png" alt="ShopSphere logo" />
          <p>
            Welcome to ShopSphere eComStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discount</a>
        </div>
        <div class="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">Payment Method</a>
          <a href="" target="_blank">Delivery</a>
          <a href="" target="_blank">Return and Exchange</a>
        </div>
        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <p>Be the first to know about new<br />arrivals, sales & promos!</p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div class="f-design">
        <div class="f-design-txt">
          <p>Design and Code by Sheikh IT Solutions</p>
        </div>
    </div>`)};export{l as a,h as b,n as g,d as s};
