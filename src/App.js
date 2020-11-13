import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
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

      <Switch>
        <Route exact path="https://mubarak77-c.github.io/MS-Repair_Laptop/" component={Home} />
        <Route path="https://mubarak77-c.github.io/MS-Repair_Laptop/about" component={About} />
        <Route path="https://mubarak77-c.github.io/MS-Repair_Laptop/contact" component={Contact} />
        {/* <Route path="/submit" component={Submit} /> */}
        <Route component={Error} />
      </Switch>

    </>
  )
}

export default App