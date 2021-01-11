import logo from './logo.svg';

// Styling
import './App.css';

// Components - Pages
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
// import SplashObject from "./components/SplashObject.js";

import ScrollToTop from "./functions/ScrollToTop.js";

// Project Pages
import ProjectKST from "./components/ProjectKST.js";
import ProjectHack from "./components/ProjectHack.js";

// Components - Objects
// import ProjectCard from "./components/ProjectCard.js";

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <ScrollToTop>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={() => <Home/>} />
            <Route path={process.env.PUBLIC_URL + '/resume'} exact component={() => <Resume/>} />
            <Route path={process.env.PUBLIC_URL + '/project-kst'} exact component={() => <ProjectKST/>} />
            <Route path={process.env.PUBLIC_URL + '/project-hack'} exact component={() => <ProjectHack/>} />
          </Switch>
      </ScrollToTop>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
