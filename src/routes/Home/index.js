import { Loader } from "@aws-amplify/ui-react";
import { Predictions, Storage } from "aws-amplify";
import { useState } from "react";
import logo from "../../logo.svg";
import "./Home.css";

const Home = () => {
  const [showLoader, setshowLoader] = useState(false);
  const [percentage, setPercentage] = useState(0);

  //Image Upload
  // const uploadImage = async (e) => {
  //   if (!e.target.files[0]) return;
  //   const image = e.target.files[0];
  //   setshowLoader(true);
  //   const {key} = await Storage.put(image.name, image, {
  //     level: "private",
  //     resumable: true,
  //     progressCallback(progress) {
  //       console.log(progress)
  //       setPercentage(Math.floor((progress.loaded / progress.total) * 100));
  //     },
  //     completeCallback: (event) => {
  //       console.log(`Successfully uploaded ${event.key}`);
  //       setPercentage(0);
  //       setshowLoader(false);
  //     },
  //   });
  //   return key
  // };

  //Predict Objects
  const PredictObjects = async (e) => {
    if (!e.target.files[0]) return;
    const { target: { files } } = e;
    const [file,] = files || [];
    setshowLoader(true);
    Predictions.identify({
      labels: {
          source: {
              file,
          },
          type: "ALL"
      }
  })
  .then(response => {
      const { labels } = response;
      const { unsafe } = response; // boolean 
      console.log(labels,unsafe)
      setshowLoader(false);

  })
  .catch(err => console.log({ err }));
  }

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
      </header>
    </div>
  );
};

export default Home;
