import './App.css';
import React, {useState} from "react";
import {Routes, Route, Link, useParams} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

function MyGame() {
  //let {wins, average, setAverage, setWins} = props;
  const [ranVal, setRanVal] = useState(newNumber());
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);
  const [wins, setWins] = useState(0);
  const [average, setAverage] = useState(0);

  function newNumber() {
    return (Math.floor(Math.random() * 100) +1);
  }

  function checkGuess() {
    setCount(count + 1);
    if (count > 8) {

      setMessage("You have used all your guesses and therefore have lost the game. Better luck next time!");
    }
    else {
      if (guess > ranVal) {
        setMessage("Oh no! Your guess is too high! Please try again.");
      }
      else if (guess < ranVal) {
        setMessage("Oh no! Your guess is too low. Please try again");
      }
      else {
        setWins(wins + 1);
        setAverage(average + (count/wins));
        setMessage('Congrats! You have guesses the target number!');
      }
    }
  }

  function resetGame() {
    setCount(0);
    setGuess("");
    setRanVal(newNumber());
    setMessage("");
  }

  return (
    <div className='box1'>
      <input type="number" onChange={(e) => setGuess(e.target.value)} placeholder="Enter Guess Here"/>
      <button disabled={count>9} onClick={checkGuess}>Guess</button>
      <p>You have now used {count} guesses.</p>
      <p>{message}</p>
      <p>You have won {wins} games this far with an average of {average} guesses.</p>
      <button onClick={resetGame}>Reset</button>
    </div>
  )

}

function Home() {
  return (
    <div className='page'>
      <Header />
      <h1>DGME-28<br/>Guess That Number!</h1>
      <p>Please enter your guess below and lets see how close we can get to the target!</p>
      <MyGame />
    </div>
  )
}

function MyApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/usett" element={<Usett />} />
      </Routes>
    </div>
  )
}

function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/stats">Player Stats</Link></li>
      <li><Link to="/usett">User Settings</Link></li>
    </ul>
  )
}

function Header() {
	return (
	  <div className='header'>
	    <Nav />
	  </div>
	)
}

//function Stats(props) {
    //const {wins, average} = props;
    //return (
     //<div className='page'>
        //<Header />
        //<h1>Player Stats</h1>
        //The total number of games won are {wins}. <br />
        //The average number of guesses needed are {average}. 
      //</div>
    //)
//}

function Stats(props) {
    return (
     <div className='page'>
     <Header />
     <h1>Player Stats</h1>All player stats can be found at the bottom of the game as you play!</div>
 )
}

function Usett() {
  return (
    <div className='page'>
      <Header />
      <h1>User Settings</h1>For each game, a player is only allowed ten guesses.<br />
    The target number is within the range of 1 to 100.
    </div>
  )
}

function App() {
  return (
    <Router>
      <MyApp />
    </Router>
  );
}

export default App;
