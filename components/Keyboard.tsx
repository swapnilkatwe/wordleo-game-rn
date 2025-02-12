import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { letterStatus } from "../utils/utils";
import { useWordleoStore } from "../store/store";
import { characterStateStyle } from "../utils/styles";

const keyboardKeys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Backspace", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
];

const keyStateStyles = {
  [letterStatus.absent]: characterStateStyle.absent,
  [letterStatus.present]: characterStateStyle.present,
  [letterStatus.correct]: characterStateStyle.correct,
};

type Props = {
  onClick: (letter: string) => void;
  isGameOver: boolean;
  isGameWon: boolean;
};

const Keyboard = ({ onClick, isGameOver, isGameWon }: Props) => {
  const keyBoardLetterState = useWordleoStore(
    (state) => state.keyboardLetterState
  );
  const onClickButton = (letter: string) => {
    onClick(letter.toUpperCase());
  };

  return (
    <View style={styles.container}>
      {keyboardKeys.map((keyboardRow, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {keyboardRow.map((key, index) => {
            let stylesArray = [styles.key];

            const letterState =
              keyStateStyles[
                keyBoardLetterState[key] as keyof typeof keyStateStyles
              ];
            if (letterState) {
              stylesArray.push({ ...styles.key, ...letterState });
            } else if (key !== "") {
              stylesArray.push({ ...styles.key, ...styles.defaultKey });
            }

            return (
              <TouchableOpacity
                onPress={() => onClickButton(key)}
                key={key + index}
                style={stylesArray}
                disabled={isGameOver || isGameWon}
              >
                {key === "Backspace" ? (
                  <Image
                    source={require("../assets/Backspace.png")}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                ) : key === "Enter" ? (
                  <Image
                    source={require("../assets/Enter-icon.png")}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                ) : (
                  <Text style={styles.keyText}>{key}</Text>
                )}
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
    paddingTop: 32,
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
  defaultKey: {
    backgroundColor: "lightgray",
  },
});

export default Keyboard;
