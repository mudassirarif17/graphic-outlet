import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Comission from './components/Comission';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/contact"><Contact/></Route>
      <Route exact path="/about"><About/></Route>
      <Route exact path="/comission"><Comission/></Route>
      <Route exact path="/portfolio"><Portfolio/></Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
