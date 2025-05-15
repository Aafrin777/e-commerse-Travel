import { BrowserRouter} from "react-router-dom";
import React from 'react'
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Services from "./components/Services";
import Travelcard from "./components/Travelcard";
import Lastlayer from "./components/Lastlayer";

import Display from "./components/Display";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Navbar />
<Hero />
<Destination />
<Services />
<Travelcard />
<Display />
<Lastlayer />
        </BrowserRouter>
  )
}

export default App;
