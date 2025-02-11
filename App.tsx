import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Keyboard from "./components/Keyboard";
import GridRow from "./components/GridRow";
import Header from "./components/Header";

export default function App() {
  let rows = Array(5).fill({ guess: "APPLE", result: [] });

  const keyboardHandler = (letter: string) => {
    console.log(letter);
  };

  const handleOnOpenModal = () => {
    console.log("Clicked");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* render Header */}
      <Header handleOnOpenModal={handleOnOpenModal} />
      {/* Render Grid */}
      {rows.map(({ guess, result }, index) => (
        <GridRow key={index} word={guess} result={result} animateRowCss={""} />
      ))}

      {/* Render Keyboard */}
      <Keyboard
        onClick={keyboardHandler}
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
});
