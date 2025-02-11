import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Keyboard from "./components/Keyboard";

export default function App() {
  const keyboardHandler = (letter: string) => {
    console.log(letter);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

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
