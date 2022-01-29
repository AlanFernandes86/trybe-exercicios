import './App.css';
import Image from './components/Image';
import Album from './components/Album';
import UserProfile from './components/UserProfile';
import Order from './components/Order';

function App() {
  const orders = [
    {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }
  ];

  return (
    <div className="App">
      <h1> Orders recently created </h1>
      { orders.map(order => <Order key={order.id} order={order} />) }
    </div>
  );
}

export default App;
