import "./Main.css";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner.jsx";
import Search from "../Search/Search.jsx";

export default function Main() {
  return (
    <main className="main">
      <div className="main__contents">
        <Banner />
        <section className="main__profile-page">
          <Link to="/search" className="main-link">
            <p className="main__search-page_text">Search the character library!</p>
          </Link>
          <Link to="/comic-search" className="main-link">
            <p className="main__profile-page_text">Search the comic library!</p>
          </Link>
          {/* <Link to="/profile" className="main-link">
            <p className="main__profile-page_text">Find Your Favorite Items</p>
          </Link> */}
        </section>
      </div>
    </main>
  );
}
