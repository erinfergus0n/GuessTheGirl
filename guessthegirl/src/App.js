import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Joanna: My favourtie hobbies are anything sport related. I particulary enjoy horse-riding and swimming. I also enjoy watching Formula 1.
          Erin: My favourite hobby is playing guitar. I love to play gigs with my friends.
          Annie: My favourite hobby is baking. I enjoy baking because it can be hard to find good vegan bakes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
