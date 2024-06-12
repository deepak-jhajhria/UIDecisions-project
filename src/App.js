import './App.css';
import MadeFor from './components/MadeFor';
import MakingDesign from './components/MakingDesign';
import Trusted from './components/Trusted';

function App() {
  return (
    <div className='bg-primary max-w-[1920px] mx-auto py-20'>
      <MakingDesign />
      <MadeFor />
      <Trusted />
    </div>
  );
}

export default App;
