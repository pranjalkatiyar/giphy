import { Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./screenheader.style";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

const ScreenHeaderBtn = ({ name, dimension, handlePress, color }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={isDarkMode ? styles.btnContainer : styles.darkbtnContainer}
      onPress={handlePress}
    >
      <Feather
        name={name}
        size={Number(dimension)}
        color={isDarkMode ? color : "white"}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
