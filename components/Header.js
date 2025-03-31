import "../style.css"
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="navBox">
      <ul className="nav">
      <li><Link to="otpInput"> OTP Input</Link></li>
       <li><Link to="Pagination">Pagination</Link></li>
      </ul>
    </div>
  );
};

export default Header;
