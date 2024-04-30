import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbr">
        <Link to="/" style={{textDecoration:"none"}}>
          <h2 className="logo" >Inventory Purchase</h2>
        </Link>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
