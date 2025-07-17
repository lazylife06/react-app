import logo from './logo.svg';
import './App.css';
import React from 'react';

const Shoe = ({brand, des, price}) => {
  return (
    <div className='product'>
        <img src={logo} alt='pic'></img>
        {brand}<br></br>
        <span>{des}</span><br></br>
        {price}원<br></br>
        <button className='add'>담기</button>
      </div>
  )
}

const data = [
  {
    brand:"브랜드 A",
    des:"상품 설명",
    price:35000,
  },
  {
    brand:"브랜드 B",
    des:"상품 설명",
    price:45000,
  }
]

function App() {
  return (
    <div className='App'>
      <div className='Title'>
        <button className='Shoppingbag'>장바구니</button>
      </div>
      <div className='Content'>
        {data.map(pro=>
          <Shoe key={pro.brand} brand={pro.brand} des={pro.des} price={pro.price}></Shoe>
        )}
      </div>
      
    </div>
  );
}

export default App;
