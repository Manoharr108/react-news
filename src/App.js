import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import propTypes from "prop-types";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div className="container my-4 ">
            {/* <h1 className='text-center' style={{margin:"23px 0", marginTop:"70px"}}>Hey, it's just baked for u!!</h1> */}
            <Switch>
              <Route exact path="/">
                <News key="general"  category={"general"} />
              </Route>
              <Route exact path="/entertainment">
                <News
                  key="entertainment"
                  
                  category={"entertainment"}
                />
              </Route>
              <Route exact path="/business">
                <News key="business"  category={"business"} />
              </Route>
              <Route exact path="/health">
                <News key="health"  category={"health"} />
              </Route>
              <Route exact path="/science">
                <News key="science"  category={"science"} />
              </Route>
              <Route exact path="/sports">
                <News key="sports"  category={"sports"} />
              </Route>
              <Route exact path="/technology">
                <News key="technology"  category={"technology"} />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </>
    );
  }
}

News.defaultProps = {
  //this must be included only in App.js
  country: "in",
  category: "general",
};

News.propTypes = {
  country: propTypes.string,
  category: propTypes.string,
};
