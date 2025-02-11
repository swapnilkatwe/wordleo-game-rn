import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { letterStatus } from "../utils/utils";

type Props = {
  character: string;
  state: letterStatus;
};
const caracterStateStyle = StyleSheet.create({
  correct: {
    backgroundColor: "#22c55e",
    color: "#ffffff",
    borderColor: "#22c55e",
  },
  present: {
    backgroundColor: "#f59e0b",
    color: "#ffffff",
    borderColor: "#f59e0b",
  },
  absent: {
    backgroundColor: "#94a3b8",
    color: "#ffffff",
    borderColor: "#94a3b8",
  },
  default: {
    backgroundColor: "#ffffff",
    borderColor: "#cbd5e1",
  },
});

const Cell = ({ character, state }: Props) => {
  const stateStyles = state
    ? caracterStateStyle[state]
    : caracterStateStyle.default;
  return (
    <View style={[styles.cell, stateStyles]}>
      <TextInput
        value={character}
        editable={false}
        style={styles.textInput}
        testID="textbox"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    borderWidth: 1,
    padding: 8,
    height: 48,
    width: 48,
    margin: 8,
    marginLeft: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#aaaaa",
  },
});

export default Cell;
