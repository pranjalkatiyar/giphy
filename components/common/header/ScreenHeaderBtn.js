import { Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ name, dimension, handlePress, color }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Feather name={name} size={Number(dimension)} color={color} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
