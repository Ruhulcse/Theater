import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Screens/Welcome";
import Search from "./Screens/Search";
import Seat from "./Screens/Seat";
import Snacks from "./Screens/Snacks";
import Summary from "./Screens/Summary";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/booking" component={Search} />
        <Route exact path="/seat" component={Seat} />
        <Route exact path="/snacks" component={Snacks} />
        <Route exact path="/summary" component={Summary} />
      </Router>
    </div>
  );
}

export default App;
