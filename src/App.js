import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <div className='Title'></div>

      <div className='product'>
        <img src={logo} alt='pic'></img>
        브랜드A<br></br>
        <span>편안하고 착용감이 좋은 신발</span><br></br>
        35,000원<br></br>
        <button className='add'>담기</button>
      </div>
      
      
    </div>
  );
}

export default App;
