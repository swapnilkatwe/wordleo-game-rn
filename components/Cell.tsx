import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { letterStatus } from "../utils/utils";
import { characterStateStyle } from "../utils/styles";

type Props = {
  character: string;
  state: letterStatus;
};

const Cell = ({ character, state }: Props) => {
  const stateStyles = state
    ? characterStateStyle[state]
    : characterStateStyle.default;
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
