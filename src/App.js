import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import WebCamDetect from './Pages/WebCamDetect';
import VideoDetect from './Pages/VideoDetect';
import Appbar from './components/ButtonAppBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Appbar />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/webcam-detection" element={<WebCamDetect />} />
          <Route exact path="/video-detection" element={<VideoDetect />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
