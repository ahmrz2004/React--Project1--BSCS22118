import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Categories from './Categories';
import Footer from './Footer';
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

       <Footer/>
       
       
    </div>
  );
}

export default App;
