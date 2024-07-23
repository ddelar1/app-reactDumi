import logo from './logo.svg';
import './App.css';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Desarrollo de Aplicaciones Web NRC-50517
        </p>
        <Component/>
      </header>
    </div>
  );
}

export default App;
