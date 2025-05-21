import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import City from "./City";
function App() {


  return (
    <>
      <Router>
        <nav>
          <Link to="/hero">Hero</Link>
          <Link to="/city">City</Link>
        </nav>

        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/city" element={<City />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
