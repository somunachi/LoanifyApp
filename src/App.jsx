import "./App.css";
import Navbar from './components/Header/Navbar'
import Side from "./components/SideMenu/Side";
import PageContent from "./components/pages/PageContent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    
        <div className="App">
          <Navbar/>
          <div className="sideandpage">
            <Side />
            <PageContent />
          </div>
        </div>
      
    </Router>
  );
}

export default App;
