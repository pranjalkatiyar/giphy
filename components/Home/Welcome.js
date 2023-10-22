import React, { useContext, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./welcome.style";
import { ThemeContext } from "../../context/ThemeContext";
import { AntDesign } from "@expo/vector-icons";

const Welcome = ({ searchTerm, handleClick, setSearchTerm }) => {
  const [search, setSearch] = useState("");
  const { isDarkMode, type, setType } = useContext(ThemeContext);
  console.log("WELCOME", isDarkMode);

  const pressed = () => {
    setSearchTerm(search);
    if (search != "") setType("Relevant Results");
    else setType("Trending");
    handleClick();
  };

  const removeTerm = () => {
    setSearchTerm("");
    setSearch("");
    console.log("searchTerm", searchTerm);
    setType("Trending");
    handleClick();
  };

  return (
    <View style={{ backgroundColor: isDarkMode ? "white" : "#112B3C" }}>
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
        <TouchableOpacity style={styles.searchBtn} onPress={removeTerm}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchBtn} onPress={removeTerm}>
          <Feather name="trending-up" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
