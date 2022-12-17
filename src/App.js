import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Events from "./Events";
import UpcomingEvent from "./UpcomingEvent";
import Gallary from "./Gallary";
import MemberPage from "./MemberPage";
import PastEvent from "./PastEvent";
import TicketsForm from "./TicketsForm";
import Home from "./Home";
import NavBar from "./components/Navbar.jsx";
import AssiutCollageFair from "./AssiutCollageFair";
import TEDxAssiut2020 from "./TEDxAssiut2020";
import TEDxAssiut2019 from "./TEDxAssiut2019";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/memories-of-the-future" component={UpcomingEvent} />
          <Route path="/archive" component={Gallary} />
          <Route path="/book-your-ticket" component={TicketsForm} />
          <Route path="/assiut-collage-fair" component={AssiutCollageFair} />
          <Route path="/tedxassiutstem-2020" component={TEDxAssiut2020} />
          <Route path="/tedxassiutstem-2019" component={TEDxAssiut2019} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
