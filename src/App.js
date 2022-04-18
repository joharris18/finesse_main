import './App.css'
import Navbar from './Navbar';
import Card from './components/Card'
import Product from './components/Product'
import Filter from './components/Filter'

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <div className='grid'>
        <Card />
        <Card />
        <Card />
      </div>
      <Filter />
    </div>
  );
}

export default App;
