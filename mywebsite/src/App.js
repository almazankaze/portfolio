import NavBar from "./components/NavBar";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <>
            <NavBar />
            <Redirect exact from="/" to="/about" component={About}></Redirect>
            <Route path="/about" component={About}></Route>
            <Route path="/education" component={Education}></Route>
            <Route path="/experience" component={Experience}></Route>
            <Route path="/projects" component={Projects}></Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
