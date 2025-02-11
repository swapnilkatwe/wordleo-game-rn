import React from "react";
import { View, StyleSheet } from "react-native";
import { letterStatus } from "../utils/utils";
import Cell from "./Cell";

const WORD_LENGTH = 5;
type Props = {
  word: string;
  result?: letterStatus[];
  animateRowCss: string;
};

const GridRow = ({ word = "", result = [], animateRowCss = "" }: Props) => {
  const lettersRemaining = WORD_LENGTH - word.length;
  const letters = word.split("").concat(new Array(lettersRemaining).fill(""));

  return (
    <View style={[styles.gridRow]}>
      {letters.map((character, index) => (
        <Cell
          key={character + index}
          character={character}
          state={result[index]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  animateRowCss: {
    textAlign: "center",
  },
});

export default GridRow;
