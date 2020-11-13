import React from 'react';
import './App.css';
import {  HashRouter, Route, Link  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home"
// import Slide from "./component/Slide"
// import List from "./component/List"
// import Service from "./component/Service"
// import Info from "./component/Info"
// import Footers from "./component/Footers"
import About from "./component/About"
import Contact from "./component/Contact"
import Error from "./component/Error"
// import Submit from "./component/Submit"



const App = () => {
  return (

    <>
<HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/submit" component={Submit} /> */}
        <Route component={Error} />
      </HashRouter>

    </>
  )
}

export default App
