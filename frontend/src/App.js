import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// ✅ COMPONENTS
import Navbar from "./components/Navbar";

// ✅ PAGES
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OrderHistory from "./pages/OrderHistory";


function App() {
  return (
    <CartProvider>
      <Router>

        {/* 🔥 GLOBAL NAVBAR (VISIBLE ON ALL PAGES) */}
        <Navbar />

        {/* 🔀 ROUTES */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<OrderHistory userId={2} />} />
        </Routes>

      </Router>
    </CartProvider>
  );
}

export default App;