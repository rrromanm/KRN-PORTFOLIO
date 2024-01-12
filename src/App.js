import "./App.css";
import HomePage from "./Pages/homepage";
import Gallery1 from "./Pages/b-and-w";
import Gallery2 from "./Pages/cars";
import Gallery3 from "./Pages/animals";
// import Navbar from "./Components/navbar/navbar";
// import Footer from "./Components/footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/b-and-w" element={<Gallery1 />}/>
          <Route path="/cars" element={<Gallery2 />}/>
          <Route path="/animals" element={<Gallery3 />}/>
        </Routes>
      </div>
      
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
