import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click a Photograph of the Product
        </p>
        <input capture="environment" type='file' accept="image/*" />
      </header>
    </div>
  );
}

export default App;
