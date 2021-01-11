import Particles from 'react-particles-js';
import './App.css';

const particles = {
  polygon: {
    enable: true,
    type: 'inside',
    move: {
        radius: 10
    },
    url: 'path/to/svg.svg'
}}

function App() {
  return (
    <div className="App">
      {/* <Particles params={particles}  className="particles"/> */}
      <div className="header">Heading </div>
      <div className="about">About section</div>
       <div className="inputField center pa4 br3 shadow-5">
                  <input className = "f4 pa2  center"type="text" />
                  <button className='grow f4 link ph3 pv2 dib white bg-light-purple mart3'>Detect</button>
       </div>
      <div className="images">Images Will appear here..!</div>
    </div>
  );
}

export default App;
