import React from 'react';
import './App.css';
import bassSound from './audios/Bass.wav';
import chordSound from './audios/Chord.wav';
import gameoverSound from './audios/Little Piano Game Over.wav';
import magicSound from './audios/Magic.wav';
import cartoonSound from './audios/Piano Cartoon Failure.wav';
import badJokeSound from './audios/Bad Joke Drums 2893.wav';
import losingSound from './audios/Piano Losing 2024.wav';
import failingSound from './audios/Piano.wav';
import harpSound from './audios/Rising Harp Music 691.wav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    }
  }

  handleClick = (event) => {
    let description = ""
    switch(event.target.id) {
      case 'Cartoon-failure-piano':
        document.getElementById("Q").play();
        description = document.getElementById("Q").parentElement.id.trim().replaceAll('-', ' ');
        this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      case 'Little-piano-game-over':
        document.getElementById("W").play();
        description = document.getElementById("W").parentElement.id.trim().replaceAll('-', ' ');
      this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      case 'Losing-piano':
        document.getElementById("E").play();
        description = document.getElementById("E").parentElement.id.trim().replaceAll('-', ' ');
        this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      case 'Magic-notification-ring':
        document.getElementById("A").play();
        description = document.getElementById("A").parentElement.id.trim().replaceAll('-', ' ');
        this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      case 'Piano-falling-effect':
        document.getElementById("S").play();
        description = document.getElementById("S").parentElement.id.trim().replaceAll('-', ' ');
        this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      case 'Bad-Joke-Drums':
        document.getElementById('D').play();
        description = document.getElementById("D").parentElement.id.trim().replaceAll('-', ' ');
        this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      case 'Rising-harp-music':
        document.getElementById('Z').play();
        description = document.getElementById("Z").parentElement.id.trim().replaceAll('-', ' ');
        this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      case 'Bass-guitar-single-note':
        document.getElementById('X').play();
        description = document.getElementById("X").parentElement.id.trim().replaceAll('-', ' ');
        this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      case 'Chord-swell-short':
        document.getElementById('C').play();
        description = document.getElementById("C").parentElement.id.trim().replaceAll('-', ' ');
        this.setState({
        display: 'The sound description is: ' + description
      })
        break;
      default:
        break;
    }
  }

  handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    if (key === 'Q' || key === 'W' || key === 'E' || key === 'A' || key === 'S' || key === 'D' || key === 'Z' || key === 'X' || key === 'C') {
      document.getElementById(key).play();
      const description = document.getElementById(key).parentElement.id.trim().replaceAll('-', ' ');
      this.setState({
        display: 'The sound description is: ' + description
      })
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        <button onClick={this.handleClick} className='drum-pad' id='Cartoon-failure-piano'>
          Q
          <audio className='clip' id='Q' src={cartoonSound}></audio>
          </button>
        <button onClick={this.handleClick} className='drum-pad' id='Little-piano-game-over'>
          W
          <audio className='clip' id='W' src={gameoverSound}></audio>
          </button>
        <button onClick={this.handleClick} className='drum-pad' id='Losing-piano'>
          E
          <audio className='clip' id='E' src={losingSound}></audio>
        </button>
        <button onClick={this.handleClick} className='drum-pad' id='Magic-notification-ring'>
          A
          <audio className='clip' id='A' src={magicSound}></audio>
        </button>
        <button onClick={this.handleClick} className='drum-pad' id='Piano-falling-effect'>
          S
          <audio className='clip' id='S' src={failingSound}></audio>
        </button>
        <button onClick={this.handleClick} className='drum-pad' id='Bad-Joke-Drums'>
          D
          <audio className='clip' id='D' src={badJokeSound}></audio>
        </button>
        <button onClick={this.handleClick} className='drum-pad' id='Rising-harp-music'>
          Z
          <audio className='clip' id='Z' src={harpSound}></audio>
        </button>
        <button onClick={this.handleClick} className='drum-pad' id='Bass-guitar-single-note'>
          X
          <audio className='clip' id='X' src={bassSound}></audio>
        </button>
        <button onClick={this.handleClick} className='drum-pad' id='Chord-swell-short'>
          C
          <audio className='clip' id='C' src={chordSound}></audio>
        </button>
      </div>
    )
  }
}

export default App;
