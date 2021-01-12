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
      <div className="header"><h1>combining opposites : normal & deaf</h1></div>
      <div className="about">About section</div>
       <div className="inputField">
                  <input type="text" placeholder="type text"></input>
                  <button type="submit">DETECT</button>
       </div>
      <div className="images">Images Will appear here..!</div>
    </div>
  );
}

export default App;
