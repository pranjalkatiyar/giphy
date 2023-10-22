import { View, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import Welcome from "../components/Home/Welcome";
import { COLORS } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { ScrollView } from "react-native-gesture-handler";
import { SIZES } from "../constants";
import { useRouter } from "expo-router";
import Media from "../components/Media/Media";
import React from "react";
import { useState, createContext, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ThemeProvider } from "../context/ThemeContext";
import ThemedButton from "../components/Theme/ThemeButton";
import { StatusBar } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const { isDarkMode, type, setType } = useContext(ThemeContext);
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="#112B3C" hidden={false} />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: isDarkMode ? COLORS.lightWhite : "black",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn name="menu" dimension="24" color="black" />
          ),
          headerRight: () => <ThemedButton />,
          headerTitle: "",
        }}
      />
      <View></View>
      <Welcome
        searchTerm={searchTerm}
        handleClick={() => {
          console.log("clicked");
          console.log("ME ONLY", searchTerm);
        }}
        setSearchTerm={setSearchTerm}
      />
      <Media searchTerm={searchTerm} />
    </SafeAreaView>
  );
};

export default Home;
