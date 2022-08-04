import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Product from "./routes/Product";

import { Amplify } from 'aws-amplify';
import {
  AmazonAIPredictionsProvider
} from '@aws-amplify/predictions';
import awsconfig from './aws-exports';

Amplify.addPluggable(new AmazonAIPredictionsProvider())
Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
