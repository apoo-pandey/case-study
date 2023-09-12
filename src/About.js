import RestaurantGallery from "./RestaurantGallery";
const About = () => {
  return (
    <div className="about-content">
      <div className="gallery">
        <RestaurantGallery />
      </div>
      <div className="content">
        <p>
          <strong>
            <i>about us-</i>
          </strong>
        </p>
        <h1 className="italic-style">Welcome to 🍴🥘 The Spice Factory</h1>
        <br />
        <p>
          Here, at <b>The Spice Factory</b>, in the center of London, we don’t
          accept compromises. Not about our food. All our ingredients are
          sourced from local producers to ensure quality and freshness.
        </p>
        <br />
        <p>
          That's why our menu is seasonal. Today, we may serve you creamy
          mushroom soup, and tomorrow we may have a classic ratatouille on the
          menu. But the taste is always the same: finger-licking good!
        </p>
        <br />
        <p>
          Forget about the daily stress and come relax with us. After tasting
          any of our menu items, you will never want to leave!
        </p>
        <br />
        <button className="input-btn" type="submit">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default About;
