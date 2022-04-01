import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header data-testid="app-header">
      <nav className="navbar">
        <div className="brand-wrap">
          <Link to="/" className="nav-link">
            <div className="brand-name" data-testid="header-brand-name">
              Businesses
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
