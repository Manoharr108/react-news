import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import PropTypes from "prop-types";
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
    <>
      <Router>
         <Navbar/>
        <div className='container my-4 '>
            <h1 className='text-center' style={{margin:"23px 0", marginTop:"70px"}}>Hey, it's just baked for u!!</h1>
                  <Switch>
                    <Route exact path="/">
                      <News key="general" country ={"in"} category={"general"}/>
                      </Route>
                      <Route exact path="/entertainment">
                      <News key="entertainment" country ={"in"} category={"entertainment"}/>
                      </Route>
                      <Route exact path="/business">
                      <News key="business" country ={"in"} category={"business"}/>
                      </Route>
                      <Route exact path="/health">
                      <News key="health" country ={"in"} category={"health"}/>
                      </Route>
                      <Route exact path="/science">
                      <News key="science" country ={"in"} category={"science"}/>
                      </Route>
                      <Route exact path="/sports">
                      <News key="sports" country ={"in"} category={"sports"}/>
                      </Route>
                      <Route exact path="/technology">
                      <News key="technology" country ={"in"} category={"technology"}/>
                    </Route>
                  </Switch>
         </div> 
      </Router>
          <Footer/>
    </>
    )
  }
}

News.defaultProps ={  //this must be included only in App.js
  country : "in", 
  category : "general"
}

News.PropTypes = {
  country : PropTypes.string,
  category : PropTypes.string
}
