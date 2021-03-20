import './App.css';
import products from './Data';
import CardList from './components/CardList' 
function App() {
  return (
    <div className="App">
    <CardList data={products} />
    </div>
  );
}

export default App;
