import React from "react";
import { Container} from '@material-ui/core'
import {Route,Routes} from 'react-router-dom'

import Appbar from "./components/Appbar/appbar.js";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth.js";

const App = ()=>{
    return(
        <Container maxWidth='lg'>
            <Appbar />
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path="/auth" element ={<Auth/>}/>
            </Routes>
        </Container>
    )
}



// 22000 1300 900 
// 
export default App;