import React, { useState } from "react";
import ml5 from "ml5";
import logo from "../../logo.svg";
import { Button, Loader, ButtonGroup } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { getProductID } from "../../graphql/customQueries";
import { useNavigate } from 'react-router-dom'
import "./Home.css";

const Homie = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [predictionss, setPredictionss] = useState([]);
  const [imageURL, setimageURL] = useState("")
  const navigate = useNavigate();

  const PredictObjects = (e) => {
    setShowLoader(true);
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    const image = new Image(500, 500);
    image.src = URL.createObjectURL(file);
    setimageURL(image.src)
    const classifier = ml5.imageClassifier(
      "https://teachablemachine.withgoogle.com/models/2h5AEDbDm/",
      () => {
        console.log("Model Loaded");
      }
    );
    classifier.classify(image, 8, (err, results) => {
      console.log(results);
      setPredictionss(results);
      console.log(err);
      setShowLoader(false);
    });
    image.onload = function () {
      console.log("Image loaded");
    };
  };

  const redirectToProductID = async (e) => {
    // let productName = e.target.name;
    // console.log(e.target.name);
    // const apiData = await API.graphql(
    //   graphqlOperation(getProductID, { eq: productName })
    // );
    // let productID = apiData.data.listProducts.items[0].id;
    navigate(`/productJeans`,{state: {imageURL: imageURL}})
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
      {showLoader && <Loader variation="linear" width={300} />}
      {Boolean(predictionss.length) && (
        <ButtonGroup direction="column" variation="primary">
          <Button
            name={predictionss[0].label}
            variation="primary"
            marginTop="20px"
            onClick={redirectToProductID}
          >
            {predictionss[0].label} (
            {Math.floor(predictionss[0].confidence * 100)} %)
          </Button>
          <Button
            name={predictionss[1].label}
            variation="primary"
            onClick={redirectToProductID}
          >
            {predictionss[1].label} (
            {Math.floor(predictionss[1].confidence * 100)} %)
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default Homie;
