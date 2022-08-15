import { Badge, Loader, View } from "@aws-amplify/ui-react";
import { Predictions, Storage } from "aws-amplify";
import { useState } from "react";
import logo from "../../logo.svg";


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
    setshowLoader(true);
    await Predictions.identify({
      labels: {
        source: {
          key: key,
          level: "public",
          // identityId: Auth.Credentials._config.identityPoolId
        },
        type: "LABELS",
      },
    })
      .then((response) => {
        const { labels } = response;
        console.log(labels);
        let labelList = labels.map((label) => label.name);
        console.log(labelList);

        setLabels(labelList);
        setshowLoader(false);
      })
      .catch((err) => console.log({ err }));
  };

  // const isPlasticBottle = (label) => {
  //   if (label === "Plastic" || label === "Bottle" || label === "Pop Bottle")
  //     return true;
  // };

  const isType = (label) => {
    switch (label) {
      case label === "Plastic" || label === "Bottle" || label === "Pop Bottle":
        return "Plastic Bottle";

      default:
        return false;
    }
  };
  //handleClick

  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <header className="App-header">
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
              return (
                <View>
                  <Badge variation="success" onClick={handleClick}>
                    {isType(label)}
                  </Badge>
                </View>
              );
            })}
          </View>
        )}
      </header>
    </div>
  );
};

export default Home;