import { useState } from "react";
import { useWordleoStore, WORD_LENGTH } from "../store/store";
import { isGuessedValidWord } from "../utils/utils";
import { Keyboard } from "react-native";

export default function useGuess() {
  const [guess, setGuess] = useState<string>("");
  const [isValidWord, setIsValidWord] = useState(true);

  const wordleStorage = useWordleoStore();

  const isGameOver = wordleStorage.guesses.length === WORD_LENGTH;
  const isGameWon = wordleStorage.guesses
    .map((eachGuess) => eachGuess.guess)
    .includes(wordleStorage.answerWord);

  // HANDLE KEY PRESS EVENTS
  const handleKeyPress = (key: string) => {
    if (guess.length >= WORD_LENGTH) {
      return;
    }
    setGuess((prev) => prev + key);
  };

  const handleBackspace = () => {
    if (guess.length === 0) {
      return;
    }
    setGuess((prev) => prev.slice(0, -1));
  };

  const handleEnter = (word: string) => {
    addGuessToStore(word);
  };

  function addGuessToStore(newGuess: string) {
    // ADD GUESS TO STORE IF VALID
    if (
      newGuess.length === WORD_LENGTH &&
      wordleStorage.guesses.length < WORD_LENGTH &&
      isGuessedValidWord(newGuess)
    ) {
      wordleStorage.addGuess(newGuess);
      setIsValidWord(true);
      setGuess("");
      return true;
    } else {
      setIsValidWord(false);
    }
    return false;
  }

  return {
    guess,
    setGuess,
    isValidWord,
    setIsValidWord,
    handleKeyPress,
    handleEnter,
    handleBackspace,
  };
}
