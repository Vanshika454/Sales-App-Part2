import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddSales from "./components/AddSales";
import Revenue from "./components/Revenue";
import TopSales from "./components/TopSales.js";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Navigationbar from "./components/Navigationbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/add_sales" element={<AddSales />} />
          <Route path="/top_5_sales" element={<TopSales />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
