import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img
          className="max-w-[150px]"
          src="src/public/netflix_logo.svg"
          alt="netflix_logo"
        />
      </Link>
    </header>
  );
};

export default Header;
