import { Routes, Route, Link } from "react-router-dom";
import UMap from "./UMap";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/UMap">Map</Link>
      </nav>
      <Routes>
        <Route path="/UMap" element={<UMap />} />
      </Routes>
    </div>
  );
}

export default App;
