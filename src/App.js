//import React from 'react';
//import {Link, Switch,  Route} from 'react-router-dom'


// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

// function App() {
  
//   return (
//     <div>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>

//         <Switch>
//             <Route exact path="/"><Home /></Route>
//             <Route path="/about" > <About /> </Route>
//             <Route path="/contact" > <Contact /> </Route>
//         </Switch>
//     </div>
//   )
// }

//export default App;

import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App;