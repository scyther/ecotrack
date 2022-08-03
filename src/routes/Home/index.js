import { Loader } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { useState } from "react";
import logo from "../../logo.svg";
import "./Home.css";

const Home = () => {
  const [showLoader, setshowLoader] = useState(false);
  const [percentage, setPercentage] = useState(0);

  //Image Upload
  const uploadImage = async (e) => {
    if (!e.target.files[0]) return;
    const image = e.target.files[0];
    setshowLoader(true);
    await Storage.put(image.name, image, {
      level: "private",
      resumable: true,
      progressCallback(progress) {
        console.log(progress)
        setPercentage(Math.floor((progress.loaded / progress.total) * 100));
      },
      completeCallback: (event) => {
        console.log(`Successfully uploaded ${event.key}`);
        setPercentage(0);
        setshowLoader(false);
      },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click a Photograph of the Product</p>
        <label htmlFor="file-upload" className="Custom-file-upload">
          Upload Photo
        </label>
        <input
          id="file-upload"
          capture="environment"
          type="file"
          accept="image/*"
          onChange={uploadImage}
        />
        {showLoader && (
          <div className="loader">
            <Loader
              variation="linear"
              percentage={percentage}
              isDeterminate
              width={300}
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default Home;
