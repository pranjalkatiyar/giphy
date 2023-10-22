import React, { useState, useContext } from "react";
import { Alert, Linking, Modal } from "react-native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { ThemeContext } from "../../context/ThemeContext";
const InfoModal = ({ info, item, setInfo }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const onClosePress = () => {
    console.log("on close press");
    setInfo(false);
  };

  const redirectInstagramIcon = () => {
    Linking.openURL(item?.user?.instagram_url);
  };

  const redirectWebsiteIcon = () => {
    Linking.openURL(item?.user?.website_url);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={info}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setInfo(!info);
        }}
      >
        <View style={styles.centeredContainer}>
          <View style={isDarkMode ? styles.card : styles.darkModeCard}>
            <TouchableOpacity style={styles.closeButton} onPress={onClosePress}>
              <AntDesign
                name="close"
                size={24}
                color={isDarkMode ? "black" : "white"}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={isDarkMode ? styles.title : styles.darktitle}>
                {item?.title}
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  source={{ uri: item?.user?.avatar_url }}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.description}>
                  {item?.user?.display_name}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  marginTop: 10,
                }}
              >
                <TouchableOpacity onPress={redirectInstagramIcon}>
                  <Feather
                    name="instagram"
                    size={30}
                    color={isDarkMode ? "black" : "white"}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={redirectWebsiteIcon}>
                  <Feather
                    name="globe"
                    size={30}
                    color={isDarkMode ? "black" : "white"}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ display: "flex", flexDirection: "column" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={
                      isDarkMode ? styles.description : styles.darkdescription
                    }
                  >
                    height:
                  </Text>
                  <Text
                    style={
                      isDarkMode ? styles.sizeDetails : styles.darksizeDetails
                    }
                  >
                    {item?.images?.fixed_height?.height}
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={
                      isDarkMode ? styles.description : styles.darkdescription
                    }
                  >
                    width:
                  </Text>
                  <Text
                    style={
                      isDarkMode ? styles.sizeDetails : styles.darksizeDetails
                    }
                  >
                    {item?.images?.fixed_height?.width}
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={
                      isDarkMode ? styles.description : styles.darkdescription
                    }
                  >
                    Size:
                  </Text>
                  <Text
                    style={
                      isDarkMode ? styles.sizeDetails : styles.darksizeDetails
                    }
                  >
                    {Number(item?.images?.fixed_height?.size) / 1024000}mb
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    width: "90%",
    height: "50%",
    margin: 10,
  },
  closeButton: {
    position: "absolute",
    top: 25,
    right: 20,
    color: "black",
    zIndex: 1,
  },
  darkModeCard: {
    backgroundColor: "#112B3C",
    borderRadius: 10,
    elevation: 3,
    width: "90%",
    color: "white",
    height: "50%",
    margin: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  darktitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
    justifyContent: "center",
    color: "black",
    alignSelf: "center",
  },
  darkdescription: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    alignSelf: "center",
  },
  sizeDetails: {
    fontSize: 15,
    fontStyle: "noraml",
    textTransform: "capitalize",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 10,
    color: "black",
  },
  darksizeDetails: {
    fontSize: 15,
    fontStyle: "noraml",
    textTransform: "capitalize",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 10,
    color: "white",
  },
});

export default InfoModal;
