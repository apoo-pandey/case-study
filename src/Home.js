import BookaTable from "./BookaTable";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Enjoy Our <br />
          delicious meals
        </h1>
        <h2>You’re in good hands with us.</h2>
        <br />
        <p>
          <strong>
            enjoy our delicious meals and explore new dishes on our menu.
          </strong>
          <br />
          <strong>We promise that you'll come again.</strong>
          <br />
          Go Ahead.Enjoy!
        </p>
        <br />
        <br />
        <Link className="home-book-table" to="/BookaTable">
          Book a Table
        </Link>
      </div>
      <img
        className="home-img"
        src="https://www.thedailymeal.com/img/gallery/why-its-technically-polite-to-leave-food-on-the-plate-at-fancy-restaurants/l-intro-1670498698.jpg"
      />
    </div>
  );
};
export default Home;
