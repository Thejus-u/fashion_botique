import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cara</title>
  <link rel="icon" type="image/x-icon" href="./img/icon1.png" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
  />
  <link rel="stylesheet" href="style.css" />
  <section id="header">
    <a href="#">
      <img src="img/logo.png" className="logo" alt="" />
    </a>
    <div>
      <ul id="navbar">
        <li>
          <a className="active" href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="shop.html">Shop</a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li id="lg-bag">
          <a href="cart.html">
            <i className="bx bx-shopping-bag" />
          </a>
        </li>
        <a href="#" id="close">
          <i className="bx bx-x" />
        </a>
      </ul>
    </div>
    <div id="mobile">
      <a href="cart.html">
        <i className="bx bx-shopping-bag" />
      </a>
      <i id="bar" className="bx bx-menu" />
    </div>
  </section>
  <section id="main">
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>save more with coupons &amp; up to 70% off!</p>
    <button className="btn">Shop Now</button>
  </section>
  <section id="feature" className="section-p1">
    <div className="fe-box">
      <img src="./img/features/f1.png" alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
      <img src="img/features/f2.png" alt="" />
      <h6>Online Order</h6>
    </div>
    <div className="fe-box">
      <img src="img/features/f3.png" alt="" />
      <h6>Save Money</h6>
    </div>
    <div className="fe-box">
      <img src="img/features/f4.png" alt="" />
      <h6>Promotions</h6>
    </div>
    <div className="fe-box">
      <img src="img/features/f5.png" alt="" />
      <h6>Happy Sell</h6>
    </div>
    <div className="fe-box">
      <img src="img/features/f6.png" alt="" />
      <h6>F24/7 Support</h6>
    </div>
  </section>
  <section id="product1" className="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container">
      <div className="pro">
        <img className="shirt" src="img/products/f1.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2499</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/f2.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2499</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/f3.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2499</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/f4.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2499</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/f5.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2499</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/f6.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2499</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/f7.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2499</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/f8.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2499</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
    </div>
  </section>
  <section id="banner" className="section-m1">
    <h4>Repair Services</h4>
    <h2>
      Upto <span>70% Off</span> - All t-Shirts &amp; Accessories
    </h2>
    <button className="normal">Explore More</button>
  </section>
  <section id="product1" className="section-p1">
    <h2>New Arrivals</h2>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container">
      <div className="pro">
        <img className="shirt" src="img/products/n1.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2999</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/n2.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2999</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/n3.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2999</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/n4.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2999</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/n5.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2999</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/n6.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2999</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/n7.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2999</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img className="shirt" src="img/products/n8.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4>₹2999</h4>
        </div>
        <a href="#">
          <i className="bx bx-cart cart" />
        </a>
      </div>
    </div>
  </section>
  <section id="sm-banner" className="section-p1">
    <div className="banner-box">
      <h4>crazy deals</h4>
      <h2>buy 1 get 1 free</h2>
      <span>The best classic dress is on sale at cara</span>
      <button className="white">Learn More</button>
    </div>
    <div className="banner-box banner-box2">
      <h4>spring/summer</h4>
      <h2>upcoming season</h2>
      <span>The best classic dress is on sale at cara</span>
      <button className="white">Collection</button>
    </div>
  </section>
  <section id="banner3">
    <div className="banner-box">
      <h2>SEASONAL SALE</h2>
      <h3>Winter Collection -50% OFF</h3>
    </div>
    <div className="banner-box banner-box2">
      <h2>NEW FOOTWEAR COLLECTION</h2>
      <h3>Spring / Summer 2023</h3>
    </div>
    <div className="banner-box banner-box3">
      <h2>T-SHIRTS</h2>
      <h3>New Trendy Prints</h3>
    </div>
  </section>
  <section id="newsletter" className="section-p1 section-m1">
    <div className="newstext">
      <h4>Sign Up For Newsletters</h4>
      <p>
        Get E-mail updates about our latest shop and{" "}
        <span>special offers.</span>
      </p>
    </div>
    <div className="form">
      <input type="text" placeholder="Your email address" />
      <button className="normal">Sign Up</button>
    </div>
  </section>
  <footer className="section-p1">
    <div className="col">
      <img className="logo" src="./img/logo.png" alt="" />
      <h4>Contact</h4>
      <p>
        <strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco
      </p>
      <p>
        <strong>Phone:</strong> +01 2222 345 / (+91) 0 123 456 789
      </p>
      <p>
        <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
      </p>
      <div className="follow">
        <h4>Follow us</h4>
        <div className="icon">
          <i className="bx bxl-facebook" />
          <i className="bx bxl-twitter" />
          <i className="bx bxl-instagram" />
          <i className="bx bxl-pinterest-alt" />
          <i className="bx bxl-youtube" />
        </div>
      </div>
    </div>
    <div className="col">
      <h4>About</h4>
      <a href="#">About us</a>
      <a href="#">Devlivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>
    <div className="col install">
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div className="row">
        <img src="./img/pay/app.jpg" alt="" />
        <img src="./img/pay/play.jpg" alt="" />
      </div>
      <p>Secured Payment Gateways</p>
      <img src="./img/pay/pay.png" alt="" />
    </div>
    <div className="copyright">
      <p>© 2023, Sahad cmd - HTML CSS Ecommerce Template</p>
    </div>
  </footer>
</>

  );
}

export default App;
