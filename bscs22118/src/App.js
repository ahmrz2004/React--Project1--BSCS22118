import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Categories from './Categories';
import ListingCard from './ListingCard';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <SearchBar />
       <Categories/>
       <ListingCard/>
       <ListingCard/>
       <ListingCard/>
       <ListingCard/>
       <ListingCard/>
      
       
      </div>
  );
}

export default App;
