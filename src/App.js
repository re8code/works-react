import './App.css';
import './main.css';
import Element1 from './Element1.js';
import Element2 from './Element2.js';
import Element3 from './Element3.js';

function App() {
  return (
    <>
    <Element1 />
    <div className='box_2nd'>
      <h1>Element2</h1>
      <hr />
      <Element2 />
      <Element2 />
      <Element2 />
      <Element2 />
    </div>
    <Element3 />
    </>
  );
}

export default App;
