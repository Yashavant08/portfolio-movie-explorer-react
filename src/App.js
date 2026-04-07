import './App.css';
import PortfolioCard from './components/PortfolioCard';
import MovieExplore from './components/MovieExplorer';

function App() {
  return(
    <div className='app'>
      <PortfolioCard
          name="Satish Rathod"
          title="Frontend Devloper"
          bio="Learning React"
      />
      <MovieExplore />
    </div>
  );
}
export default App;
