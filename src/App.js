import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="player-container">
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
      </div>
      <Board />
    </div>
  );
}

export default App;
