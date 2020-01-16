import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import AboutMe from '../components/about-me';
import Header from './header';
import Footer from './footer';
import Education from '../components/education';
import Projects from '../components/projects';

const Content = () => {
    return (
      <>
        <Header></Header>

        <Router>
          <div className="links">
            <Link to={"/about_me"}>
              <div className = "about_me">
                <p>About me</p>
              </div>
            </Link>
            <Link to={"/education"}>
              <div className = "education">
                <p>Education</p>
              </div>
            </Link>
            <Link to={"/projects"}>
              <div className = "projects">
                <p>Projects</p>
              </div>
            </Link>
          </div>

          <Switch>
            <Route exact path="/about_me" component={AboutMe}></Route>
            <Route exact path="/education" component={Education}></Route>
            <Route exact path="/projects" component={Projects}></Route>
          </Switch>
        </Router>

        <Footer></Footer>
      </>
    );
}

export default Content