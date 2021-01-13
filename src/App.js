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
  }
}

function App() {
  return (
    <div className="App">
      {/* <Particles params={particles}  className="particles"/> */}
      <div className="header"><h1>combining opposites : normal & deaf</h1></div>
      <div className="Content">
        <div className="about"><span id="typewriter">About section 
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sunt magnam, perspiciatis blanditiis, obcaecati quaerat repellat ea et a veniam nisi vel. Harum temporibus in dolore voluptatibus nulla officia fuga vel, iusto soluta alias eos! Facere necessitatibus eligendi voluptas consequuntur in molestias! Aperiam culpa eveniet commodi error vel repellat nihil?
       </span>
       </div>
        <div className="inputField">
          <input type="text" placeholder="type text"></input>
          <button type="submit">DETECT</button>
        </div>
        <div className="images">Images Will appear here..!</div>
      </div>
      <div className="footer">Made with <i class="fas fa-heart text-danger" aria-hidden="true"></i></div>
    </div>
  );
}

export default App;
