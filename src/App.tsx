import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log('Кнопку натиснуто!');
  };

  return (
    <div className="App">
      <Greeting name="Іван" />
      <Message text="Ласкаво просимо до нашого додатку!" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
