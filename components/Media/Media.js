import React, { useEffect } from "react";
import { Text } from "react-native";
import {
  View,
  Image,
  PermissionsAndroid,
  Permission,
  Platform,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../common/cards/Card";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import getData from "../../data/getData";
const Media = ({ searchTerm }) => {
  const { isDarkMode, setDarkMode, toggleTheme } = useContext(ThemeContext);
  const [result, setresult] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [page, setPage] = React.useState(1);

  const feature1 = "Download";
  const feature2 = "Share";

  const fetchData = async () => {
    setLoading(true);
    const { data, loading } = await getData({ searchTerm, page });
    setresult(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const infiniteScroll = async () => {
    setLoading(true);
    const { data } = await getData({ searchTerm, page });
    setresult([...result, ...data]);
    setLoading(false);
  };
  useEffect(() => {
    infiniteScroll();
  }, [page]);

  const onPressImage = () => {
    console.log("Image pressed");
  };
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "white" : "black",
        height: "100%",
      }}
    >
      <FlatList
        data={result}
        renderItem={({ item }) =>
          (
            <Card
              item={item}
              imageSource={{
                uri: item?.images?.fixed_height.url,
              }}
              id={item.id}
              feature1={feature1}
              feature2={feature2}
              onPressImage={onPressImage}
            />
          ) || <Text>{JSON.stringify(item.images.fixed_height.url)}</Text>
        }
        keyExtractor={(item) => Date.now() + item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setPage(page + 1);
        }}
      />
    </View>
  );
};

export default Media;
