import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
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
  render (
 <Router>
   

      
        <Route exact path="/MS-Repair_Laptop/" component={Home} />
        <Route path="/MS-Repair_Laptop/about" component={About} />
        <Route path="/MS-Repair_Laptop/contact" component={Contact} />
        {/* <Route path="MS-Repair_Laptop/submit" component={Submit} /> */}
//         <Route component={Error} />
    

   
     </Router>
  )
}

export default App
