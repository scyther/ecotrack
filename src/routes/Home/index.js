import { Badge, Loader, View } from "@aws-amplify/ui-react";
import {  Predictions, Storage } from "aws-amplify";
import { useState } from "react";
import logo from "../../logo.svg";
import "./Home.css";

const Home = () => {
  const [showLoader, setshowLoader] = useState(false);
  const [labels, setLabels] = useState([]);
  // Image Upload
  const uploadImage = async (e) => {
    if (!e.target.files[0]) return;
    const image = e.target.files[0];
    setshowLoader(true);
    const { key } = await Storage.put(image.name, image, {
      level: "public",
    });
    console.log(key);
    return key;
  };

  //Predict Objects
  const PredictObjects = async (e) => {
    const key = await uploadImage(e);
    const s3URL = await Storage.get(key, { level: "public" });
    console.log(s3URL);
    console.log(key);
    // if (!e.target.files[0]) return;
    // const {
    //   target: { files },
    // } = e;
    // const [file] = [files] || [];
    setshowLoader(true);
    await Predictions.identify({
      labels: {
        source: {
          key: s3URL,
          level: 'public',
          // identityId: Auth.Credentials._config.identityPoolId
        },
        type: "LABELS",
      },
    })
      .then((response) => {
        const { labels } = response;
        console.log(labels);
        setLabels(labels);
        setshowLoader(false);
      })
      .catch((err) => console.log({ err }));
  };

  const isPlasticBottle = (label) => {
    if (label === "Plastic" || label === "Bottle" || label === "Pop Bottle")
      return true;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click a Photo of the Product</p>
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

        {/* show Loader */}
        {showLoader && (
          <div className="loader">
            <Loader
              variation="linear"
              // percentage={percentage}
              // isDeterminate
              width={300}
            />
          </div>
        )}

        {/* show predicted labels */}
        {labels.length !== 0 && (
          <View>
            {labels.find((label) => {
              return isPlasticBottle(label.name);
            }) && (
              <View>
                <Badge>Plastic Bottle</Badge>
              </View>
            )}
          </View>
        )}
      </header>
    </div>
  );
};

export default Home;
