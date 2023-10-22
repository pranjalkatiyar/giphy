import React, { useEffect } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../common/cards/Card";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import getData from "../../data/getData";
const Media = ({ searchTerm }) => {
  const { isDarkMode, setDarkMode, type, setType } = useContext(ThemeContext);
  const [result, setresult] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [page, setPage] = React.useState(1);
  console.log("MEDIA", searchTerm);

  const feature1 = "Download";
  const feature2 = "Share";

  const fetchData = async () => {
    setLoading(true);
    const { data, loading } = await getData({ searchTerm, page });
    setresult(data);
    setLoading(false);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      setresult([]);
      setPage(1);
    } else {
      setresult([]);
      setPage(1);
    }

    fetchData();
  }, [searchTerm]);

  const infiniteScroll = async () => {
    setLoading(true);
    const { data } = await getData({ searchTerm, page });
    setresult([...result, ...data]);
    setLoading(false);
  };

  console.log(result[0]?.banner_image);
  useEffect(() => {
    infiniteScroll();
  }, [page]);

  const onPressImage = () => {
    console.log("Image pressed");
  };
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "white" : "#112B3C",
        height: "100%",
        paddingTop: 10,
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
              pauseImage={{
                uri:
                  item?.user?.avatar_url === undefined
                    ? item?.user?.profile_url
                    : item?.user?.avatar_url,
              }}
              id={item.id}
              feature1={feature1}
              feature2={feature2}
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
