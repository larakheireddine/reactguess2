import {useState} from "react";
import React from "react";

export const ranVal = (Math.floor(Math.random() * 100) +1);
export const loss = 0;

export function Gamevar(e) {
    const [guess, setGuess] = useState(0);
    const [wins, setWins] = useState(0);
    const [counter, setCount] = useState(0);

    if (guess > ranVal) {
        if (counter < 4) {
            return (
                <div>
                    <p>Your guess is {guess} and you have used {counter} guesses and have {wins} wins.</p>
                    <input type='number' value={guess} onChange={(e) => setGuess(e.target.value)}></input>
                    <button onClick={()=> setCount(parseInt(counter)+1)}></button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>You have used all your guesses! Thank you for playing, want to try again?</p>
                </div>
            )
        }
    }
    else if (guess < ranVal) {
        return (
            <div>
                <p>Your guess is {guess} and you have used {counter} guesses and have {wins} wins.</p>
                <input type='number' value={guess} onChange={(e) => setGuess(e.target.value)}></input>
                <button onClick={()=> setCount(parseInt(counter)+1)}></button>
            </div>
        )
    }
    else {
        return (
            <div>
                <p>Your guess is {guess} and you have used {counter} guesses and have {wins} wins.</p>
                <input type='number' value={guess} onChange={(e) => setGuess(e.target.value)}></input>
                <button onClick={()=> setCount(parseInt(counter)+1)}></button>
            </div>
        )
    }
}
