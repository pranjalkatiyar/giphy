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
import useFetch from "../../hook/useFetch";
import Card from "../common/cards/Card";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Media = ({ searchTerm }) => {
  const { isDarkMode, setDarkMode, toggleTheme } = useContext(ThemeContext);
  const [result, setresult] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [page, setPage] = React.useState(1);
  //   {
  //     images: {
  //       fixed_height: {
  //         url: "https://media1.giphy.com/media/3o7aD2t9aWhdrtYmVy/giphy.gif?cid=ecf05e47j5x4s9w5q5j0w6k0x2h5w4x5k9j9x4kx4w8k9z6k&rid=giphy.gif&ct=g",
  //       },
  //     },
  //     title: "test",
  //   },
  //   {
  //     images: {
  //       fixed_height: {
  //         url: "https://media1.giphy.com/media/3o7aD2t9aWhdrtYmVy/giphy.gif?cid=ecf05e47j5x4s9w5q5j0w6k0x2h5w4x5k9j9x4kx4w8k9z6k&rid=giphy.gif&ct=g",
  //       },
  //     },
  //     title: "test",
  //   },
  //   {
  //     images: {
  //       fixed_height: {
  //         url: "https://media1.giphy.com/media/3o7aD2t9aWhdrtYmVy/giphy.gif?cid=ecf05e47j5x4s9w5q5j0w6k0x2h5w4x5k9j9x4kx4w8k9z6k&rid=giphy.gif&ct=g",
  //       },
  //     },
  //     title: "test",
  //   },
  //   {
  //     images: {
  //       fixed_height: {
  //         url: "https://media1.giphy.com/media/3o7aD2t9aWhdrtYmVy/giphy.gif?cid=ecf05e47j5x4s9w5q5j0w6k0x2h5w4x5k9j9x4kx4w8k9z6k&rid=giphy.gif&ct=g",
  //       },
  //     },
  //     title: "test",
  //   },
  //   {
  //     images: {
  //       fixed_height: {
  //         url: "https://media1.giphy.com/media/3o7aD2t9aWhdrtYmVy/giphy.gif?cid=ecf05e47j5x4s9w5q5j0w6k0x2h5w4x5k9j9x4kx4w8k9z6k&rid=giphy.gif&ct=g",
  //       },
  //     },
  //     title: "test",
  //   },
  //   {
  //     images: {
  //       fixed_height: {
  //         url: "https://media1.giphy.com/media/3o7aD2t9aWhdrtYmVy/giphy.gif?cid=ecf05e47j5x4s9w5q5j0w6k0x2h5w4x5k9j9x4kx4w8k9z6k&rid=giphy.gif&ct=g",
  //       },
  //     },
  //     title: "test",
  //   },
  // ];
  // console.log(data);
  // console.log(data.title);
  // console.log(data?.images?.fixed_height.url);

  const feature1 = "Download";
  const feature2 = "Share";

  useEffect(() => {
    infiniteScroll(page);
  }, []);

  const infiniteScroll = async (page) => {
    setPage(page + 1);
    const { data, loading, error } = await useFetch({ searchTerm, page });
    console.log(data);
    setresult([...result, ...data]);
    setLoading(loading);
    setError(error);
  };

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
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0}
        onEndReached={() => {
          console.log("End reached");
          if (!loading) {
            infiniteScroll();
          }
        }}
      />
    </View>
  );
};

export default Media;
