import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useWordleoStore } from "../store/store";

type Props = {
  isGameOver: boolean;
  isGameWon: boolean;
  setGuess: (value: string) => void;
};

function Result({ isGameOver, isGameWon, setGuess }: Props) {
  const wordleStore = useWordleoStore();

  return (
    <View style={isGameWon ? styles.gameWonStyle : styles.gameOverStyle}>
      <Text style={{ textAlign: "center" }}>
        {isGameWon ? "You Won!" : "Game Over!"}
      </Text>
      {isGameOver && !isGameWon && (
        <Text style={styles.answerText}>
          Your Answer: {wordleStore.answerWord}
        </Text>
      )}
      <Button
        title={isGameWon ? "New Game" : "Try Again"}
        onPress={() => {
          wordleStore.newGame();
          setGuess("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gameWonStyle: {
    textAlign: "center",
    width: "85%",
    color: "#22c55e", // Tailwind's green-500
    fontSize: 24, // text-2xl
    padding: 20, // p-5
    margin: 20, // m-5
    backgroundColor: "#e2e8f0", // Tailwind's slate-200
    borderRadius: 8, // rounded
    alignSelf: "center", // mx-auto
  },
  gameOverStyle: {
    textAlign: "center",
    color: "#ef4444", // Tailwind's red-500
    fontSize: 24, // text-2xl
    padding: 20, // p-5
    margin: 20, // m-5
    backgroundColor: "#e2e8f0", // Tailwind's slate-200
    borderRadius: 8, // rounded
    alignSelf: "center", // mx-auto
    width: "85%",
  },
  answerText: {
    color: "green",
    textAlign: "center",
  },
});

export default Result;
