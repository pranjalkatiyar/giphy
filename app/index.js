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
import { useState } from "react";

const context = React.createContext("");

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
          headerRight: () => (
            <ScreenHeaderBtn name="menu" dimension="24" color="black" />
          ),
          headerTitle: "",
        }}
      />
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      ></View>
      <Welcome
        searchTerm={searchTerm}
        handleClick={() => {
          console.log("clicked");
          console.log("ME ONLY", searchTerm);
          // setSearchTerm("");
        }}
        setSearchTerm={setSearchTerm}
      />
      <Media searchTerm={searchTerm} />
    </SafeAreaView>
  );
};

export default Home;
