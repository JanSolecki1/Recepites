import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="left-nav">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
      </nav>
      <h1>DishDelights</h1>
      <nav className="right-nav">
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;