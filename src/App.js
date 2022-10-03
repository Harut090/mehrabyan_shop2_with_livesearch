import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NonFound/NonFound";
import Contact from "./Pages/Contact";
import CategoryGoods from "./Pages/CategoryGoods";
import GoodById from "./Pages/GoodById/GoodById";

function App() {
  return (
    <Router className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categoryGoods/:name" element={<CategoryGoods />} />
        <Route path="/item/:id" element={<GoodById />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
