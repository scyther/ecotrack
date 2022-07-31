import logo from "../../logo.svg";
import "./Home.css";

const Home = () => {
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
      />
    </header>
  </div>
  )
}

export default Home