import "./Main.css";

export default function Main() {
  return (
    <main>
      <section className="site-hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </div>

        <img
          className="hero-img"
          src="/restauranfood.jpg"
          alt="Little Lemon restaurant Chef and Sushi"
        />
      </section>


      {/* This is for specials section */}
      <section className="site-menu">
        <div className="menu-header">
          <h1>This week's specials</h1>
          <button>Online Menu</button>
        </div>
        <article className="menu-card">
          <img
            src="/greek salad.jpg"
            alt="Greek salad"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Order a delivery</button>
        </article>
        <article className="menu-card">
          <img
            src="/bruchetta.svg"
            alt="Bruschetta"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Order a delivery</button>
        </article>
        <article className="menu-card">
          <img
            src="/lemon dessert.jpg"
            alt="Lemon dessert"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Order a delivery</button>
        </article>
      </section>


      <section className="site-testimonials">
        <h1>Testimonials</h1>

        <p>Rating</p>
        <img src="" alt="" />
        <p>Name</p>
        <p>Review</p>

        <p>Rating</p>
        <img src="" alt="" />
        <p>Name</p>
        <p>Review</p>

        <p>Rating</p>
        <img src="" alt="" />
        <p>Name</p>
        <p>Review</p>

        <p>Rating</p>
        <img src="" alt="" />
        <p>Name</p>
        <p>Review</p>
      </section>

      <section className="site-about">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img src="" alt="" />
        <img src="" alt="" />
      </section>
    </main>
  );
}