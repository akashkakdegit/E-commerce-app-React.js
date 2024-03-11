import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <text className="text">Sign up and get 20% off to your first order.</text>
      <Link to="/sign-up" className="sign-up-button" data-testid={'sign-up-button'}>
        Sign Up Now
      </Link>
    </div>
  );
};

export default Header;
