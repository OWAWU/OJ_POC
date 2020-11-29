import React, {useState, useEffect} from "react";
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About";
import Home from "./routes/Home";
import Retest from "./routes/Retest";
import Navigation from './components/Navigation';

function App (){
    return(
        <HashRouter>
            <Navigation /> 
            <Route path="/" exact={true} component={Home} />
            <Route path='/about' component={Retest} />
        </HashRouter>
    );
}

export default App