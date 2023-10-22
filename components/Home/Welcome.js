import React, { useContext, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./welcome.style";
import { ThemeContext } from "../../context/ThemeContext";

const Welcome = ({ searchTerm, handleClick, setSearchTerm }) => {
  const [search, setSearch] = useState("");
  const { isDarkMode } = useContext(ThemeContext);
  console.log("WELCOME", isDarkMode);

  const pressed = () => {
    setSearchTerm(search);
    handleClick();
    setSearch("");
  };

  return (
    <View style={{ backgroundColor: isDarkMode ? "white" : "black" }}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={pressed}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
