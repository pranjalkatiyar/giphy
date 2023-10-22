import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeContext } from "../../context/ThemeContext";

const ThemedButton = () => {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);
  // console.log(a);
  console.log("button", isDarkMode);

  const buttonStyle = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "black" : "white",
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <Feather name="moon" size={24} color="black" />
        ) : (
          <Feather name="sun" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ThemedButton;
