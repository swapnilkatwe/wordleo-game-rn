import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Keyboard from "./components/Keyboard";
import GridRow from "./components/GridRow";

export default function App() {
  const keyboardHandler = (letter: string) => {
    console.log(letter);
  };

  let rows = Array(5).fill({ guess: "APPLE", result: [] });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

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
