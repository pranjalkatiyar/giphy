import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./welcome.style";

const Welcome = ({ searchTerm, handleClick, setSearchTerm }) => {
  const [search, setSearch] = useState("");

  const pressed = () => {
    setSearchTerm(search);
    handleClick();
    setSearch("");
  };

  return (
    <View>
      {/* <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View> */}

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

      {/* <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View> */}
    </View>
  );
};

export default Welcome;
