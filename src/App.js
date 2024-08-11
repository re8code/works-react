import './App.css';
import './main.css';
import Element1 from './Element1.js';
import Element2 from './Element2.js';

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
    </>
  );
}

export default App;
