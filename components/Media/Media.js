import React from "react";
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
const Media = ({ searchTerm }) => {
  // const router = useRouter();
  // console.log("HEEEELLLO", searchTerm);
  const { data, loading, error } = useFetch({
    searchTerm,
  });
  console.log(data);
  // const data = [
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

  const onPressImage = () => {
    console.log("Image pressed");
  };

  const onPressButton2 = () => {
    console.log("Share pressed");
  };

  return (
    <View>
      <Text>{data.title}</Text>

      <FlatList
        data={data}
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
              onPressButton2={onPressButton2}
            />
          ) || <Text>{JSON.stringify(item.images.fixed_height.url)}</Text>
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Media;
