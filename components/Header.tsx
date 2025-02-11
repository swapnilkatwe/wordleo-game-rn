import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

type Props = {
  handleOnOpenModal: () => void;
};

const Header = ({ handleOnOpenModal }: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.title}>WordleoReplica</Text>
        <TouchableOpacity style={styles.button} onPress={handleOnOpenModal}>
          <Image
            source={require("../assets/QuestionIcon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 28,
    paddingBottom: 32,
    width: "100%",
  },
  container: {
    flexDirection: "row",
    position: "relative",
  },
  title: {
    color: "black",
    fontSize: 24,
    textAlign: "center",
    flex: 1,
  },
  button: {
    position: "absolute",
    verticalAlign: "middle",
    right: 40,
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default Header;
