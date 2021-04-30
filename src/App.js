import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title" >
          <h1 class="title red">Your name here</h1>
          <br />

          <img src={logo} className="App-logo" alt="logo" />
          <br />

          <p>Import images  from public      </p>
          <img src="/Logo-sedia.png" alt="myimage" />

        </div>

      </header>
    </div >


  );
}

export default App;
