import './App.css';
import MadeFor from './components/MadeFor';
import MakingDesign from './components/MakingDesign';
import Trusted from './components/Trusted';

function App() {
  return (
    <div className='py-10 bg-primary'>
      <MakingDesign />
      <MadeFor />
      <Trusted />
    </div>
  );
}

export default App;
