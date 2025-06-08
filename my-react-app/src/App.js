import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Message from './Message';
import Button from './Button';

function App() {
  const handleButtonClick = () => {
    console.log("Кнопка натиснута!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Іван" />
        <Message text="Це довільне повідомлення." />
        <Button onClick={handleButtonClick} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
