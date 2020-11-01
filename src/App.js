import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home"
import Slide from "./component/Slide"
import List from "./component/List"
import Service from "./component/Service"
import Info from "./component/Info"
import Footers from "./component/Footers"
import About from "./component/About"




const App = () => {
  return (
    <div>
      <Home />
      <Slide />
      <Service />
      <Service />
      <List />
      <Info />
      <Footers />
      <About />
    </div>
  )
}

export default App
