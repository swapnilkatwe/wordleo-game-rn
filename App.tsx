import { StatusBar } from "expo-status-bar";
import { Alert, Text, StyleSheet, View } from "react-native";
import Keyboard from "./components/Keyboard";
import GridRow from "./components/GridRow";
import Header from "./components/Header";
import Result from "./components/Result";
import { useWordleoStore, WORD_LENGTH } from "./store/store";
import { useEffect, useState } from "react";
import useGuess from "./hooks/useGuess";

export default function App() {
  const wordleStorage = useWordleoStore();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    guess,
    setGuess,
    isValidWord,
    setIsValidWord,
    handleKeyPress,
    handleEnter,
    handleBackspace,
  } = useGuess();

  useEffect(() => {
    if (!isValidWord) {
      setTimeout(() => setIsValidWord(true), 2000);
    }
  }, [isValidWord, setIsValidWord]);

  // ==== FILL THE GRID ROWS WITH GUESSES ====
  let rows = [...wordleStorage.guesses];
  let currentRowIndex = 0;
  if (rows.length < WORD_LENGTH) {
    currentRowIndex = rows.push({ guess }) - 1;
  }
  const numberOfGuessesRemaining = WORD_LENGTH - rows.length;
  rows = rows.concat(Array(numberOfGuessesRemaining).fill(""));

  // ==== Game Result ======
  const isGameOver = wordleStorage.guesses.length === WORD_LENGTH;
  const isGameWon = wordleStorage.guesses
    .map((eachGuess) => eachGuess.guess)
    .includes(wordleStorage.answerWord);

  // ====== Action Handlers =========

  const handleOnOpenModal = () => {
    Alert.alert("Hint", `The correct word is: ${wordleStorage.answerWord}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* render Header */}
      <Header handleOnOpenModal={handleOnOpenModal} />

      {/* Render Results */}
      {(isGameOver || isGameWon) && (
        <Result
          isGameOver={isGameOver}
          isGameWon={isGameWon}
          setGuess={setGuess}
        />
      )}

      {/* Render Grid */}
      {rows.map(({ guess, result }, index) => (
        <GridRow key={index} word={guess} result={result} animateRowCss={""} />
      ))}

      {/* Validate guess */}
      {!isValidWord && (
        <Text style={styles.centeredErrorText}>
          Not a word in saved list. Please try again!
        </Text>
      )}
      {/* Render Keyboard */}
      <Keyboard
        onClick={(letter) => {
          switch (letter) {
            case "BACKSPACE":
              handleBackspace();
              break;
            case "ENTER":
              handleEnter(guess);
              break;
            default:
              handleKeyPress(letter);
              break;
          }
        }}
        isGameOver={false}
        isGameWon={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredErrorText: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    marginHorizontal: "auto",
    textAlign: "center",
    color: "#be123c", // Tailwind's rose-700
    fontSize: 20, // Tailwind's text-xl
    backgroundColor: "#f1f5f9", // Tailwind's slate-100
    width: "100%",
    paddingVertical: 8, // Tailwind's py-2
    borderRadius: 8, // Tailwind's rounded
  },
});
