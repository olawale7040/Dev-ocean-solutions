import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="brand-wrap">
          <Link to="/" className="nav-link">
            <div className="brand-name">App</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
