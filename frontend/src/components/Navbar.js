import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // ✅ Load user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // ✅ Handle login/logout click
  const handleUserClick = () => {
    if (user) {
      // logout
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
    } else {
      navigate("/signup");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  return (
    <div className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <Link to="/" className="logo">
          amazon<span>.in</span>
        </Link>

        <div className="location">
          <span className="small">Deliver to</span>
          <span className="bold">India</span>
        </div>
      </div>

      <SearchBar onSearch={(data) => console.log(data)} />

      {/* RIGHT */}
      <div className="nav-right">

        {/* ACCOUNT */}
        <div
          className="nav-item"
          onClick={handleUserClick}
          style={{ cursor: "pointer" }}
        >
          <span className="small">
            Hello, {user ? user.name : "Sign Up"}
          </span>
          <span className="bold">
            {user ? "Logout" : "Account & Lists"}
          </span>
        </div>

        {/* 🔥 LOGIN LINK (ONLY WHEN NOT LOGGED IN) */}
        {!user && (
          <Link to="/login" className="nav-item">
            <span className="small">Existing user?</span>
            <span className="bold">Login</span>
          </Link>
        )}

        {/* ORDERS */}
        <div className="nav-item">
          <span className="small">Returns</span>
          <span className="bold">& Orders</span>
        </div>

        {/* CART */}
        <Link to="/cart" className="cart">
          🛒
          <span className="cart-count">{cart.length}</span>
          <span className="bold">Cart</span>
        </Link>

      </div>
    </div>
  );
}