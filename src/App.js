import './App.css'
import Navbar from './Navbar';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='grid'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
