import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { letterStatus } from "../utils/utils";

const keyboardKeys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Backspace", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
];

type Props = {
  onClick: (letter: string) => void;
  isGameOver: boolean;
  isGameWon: boolean;
};

const Keyboard = ({ onClick, isGameOver, isGameWon }: Props) => {
  const keyBoardLetterState = letterStatus.present;

  const onClickButton = (letter: string) => {
    onClick(letter.toUpperCase());
  };

  return (
    <View style={styles.container}>
      {keyboardKeys.map((keyboardRow, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {keyboardRow.map((key, index) => {
            let stylesArray = [styles.key];

            const letterState = letterStatus.absent;

            return (
              <TouchableOpacity
                onPress={() => onClickButton(key)}
                key={key + index}
                style={stylesArray}
                disabled={isGameOver || isGameWon}
              >
                <Text style={styles.keyText}>{key}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "95%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  key: {
    borderRadius: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  keyText: {
    color: "black",
  },
  absent: {
    backgroundColor: "slategray",
  },
  present: {
    backgroundColor: "yellow",
  },
  correct: {
    backgroundColor: "green",
  },
  defaultKey: {
    backgroundColor: "lightgray",
  },
});

export default Keyboard;
