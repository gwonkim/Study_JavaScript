import './App.css';
import Food from './components/Food';
import Count from './components/Count';

const myFavoriteFoods = [
  { name: '돈까스', price: 10000 },
  { name: '우동', price: 8000 },
  { name: '냉우동', price: 12000 },
];

function App() {
  //console.log(myFavoriteFoods);
  //console.table(myFavoriteFoods);

  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      {
        myFavoriteFoods.map((food, index) => {
          return <Food key={index} name={food.name} price={food.price} />
        })
      }
      <Count />
    </div>
  );
}

export default App;
