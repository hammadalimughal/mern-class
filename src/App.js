import './App.css';
import Product from './components/Product'
import tshirt1 from './images/prod-img.jpg'
import tshirt2 from './images/thisrt-2.webp'

function App() {
  return (
    <div className='main'>
      <div className='item'>
       <Product title='TSHIRT BLACK' thumbnail={tshirt1} />
      </div>
      <div className='item'>
      <Product title='TSHIRT BLACK 2' thumbnail={tshirt2} />
      </div>
    </div>
  );
}

export default App;
