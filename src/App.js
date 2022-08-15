import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Product from "./routes/Product";

//Ammplify Configurations
import { Amplify } from 'aws-amplify';
import {
  AmazonAIPredictionsProvider
} from '@aws-amplify/predictions';
import awsconfig from './aws-exports';
import Homie from "./routes/Homie";

Amplify.addPluggable(new AmazonAIPredictionsProvider())
Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homie" element={<Homie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productID" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
