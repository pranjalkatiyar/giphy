import React, { useState } from "react";
import { Alert, Linking, Modal } from "react-native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const InfoModal = ({ info, item, setInfo }) => {
  const onClosePress = () => {
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
          <View style={styles.card}>
            <TouchableOpacity style={styles.closeButton} onPress={onClosePress}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item?.title}</Text>
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
                  <Feather name="instagram" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={redirectWebsiteIcon}>
                  <Feather name="globe" size={30} color="black" />
                </TouchableOpacity>
              </View>

              <View style={{ display: "flex", flexDirection: "column" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.description}>height:</Text>
                  <Text>{item?.images?.fixed_height?.height}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.description}>width:</Text>
                  <Text>{item?.images?.fixed_height?.width}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.description}>Size:</Text>
                  <Text>
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
    top: 10,
    right: 10,
    color: "black",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 20,
  },
});

export default InfoModal;
