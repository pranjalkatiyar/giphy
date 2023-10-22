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
import { ThemeProvider } from "../context/ThemeContext";
import ThemedButton from "../components/Theme/ThemeButton";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
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
