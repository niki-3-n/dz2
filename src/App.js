import React from 'react';
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
      </header>
    </div>
  );
}

export default App; 