import React from 'react';
import ReactDOM from 'react-dom';
import MyGrid from './grid';
import './App.css'

function App() {
  
  return(
    <div className='div'>
    <h1 className='heading'>Tic Tac Toe!</h1>
  <MyGrid />
  </div>
  
  ) 
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
