import React, { useState } from "react";
import ml5 from "ml5";
import logo from "../../logo.svg";
import { Button } from "@aws-amplify/ui-react";

const Homie = () => {
  const [predictionss, setPredictionss] = useState([]);

  const PredictObjects = (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    const image = new Image(500, 500);
    image.src = URL.createObjectURL(file);
    const classifier = ml5.imageClassifier(
      "https://teachablemachine.withgoogle.com/models/kjbL88QHM/",
      () => {
        console.log("Model Loaded");
      }
    );
    classifier.classify(image, 8, (err, results) => {
      console.log(results);
      setPredictionss(results);
      console.log(err);
    });
    image.onload = function () {
      console.log("Image loaded");
    };
  };

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Click a Image of the Product</p>
      <label htmlFor="file-upload" className="Custom-file-upload">
        Upload Photo
      </label>
      <input
        id="file-upload"
        capture="environment"
        type="file"
        accept="image/*"
        onChange={PredictObjects}
      />
      <Button variation="primary" marginTop="20px">
        {predictionss[0].label} ({Math.floor(predictionss[0].confidence * 100)}{" "}
        %)
      </Button>
      <Button variation="primary" marginTop="20px">
        {predictionss[1].label} ({Math.floor(predictionss[1].confidence * 100)}{" "}
        %)
      </Button>
    </div>
  );
};

export default Homie;
