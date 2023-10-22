import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import { Share } from "react-native";
import { ThemeContext } from "../../../context/ThemeContext";
import { fetchGif } from "../../../features/download/download";
import { Ionicons } from "@expo/vector-icons";
import InfoModal from "../../Modal/InfoModal";

import { downloadGif } from "../../../features/download/download";
const CardWithFeatures = ({
  item,
  id,
  imageSource,
  onPressImage,
  pauseImage,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [pause, setPause] = useState(false);
  const [info, setInfo] = useState(false);

  const downloadButton = async () => {
    console.log("Download pressed");
    fetchGif(imageSource.uri);
  };

  const shareButton = async () => {
    console.log("Share pressed");
    try {
      const result = await Share.share({
        message: imageSource.uri,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with Activity Type of", result.activityType);
        } else {
          console.log("Shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Dismissed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const moreInformationButton = async () => {
    console.log("More Information pressed");
    setInfo(true);
  };

  const pauseResumeButton = async () => {
    console.log("Pause/Resume pressed");
    console.log(pauseImage);
    setPause(!pause);
  };

  return (
    <View style={isDarkMode ? styles.lightCard : styles.darkCard}>
      <TouchableOpacity onPress={pauseResumeButton}>
        <Image source={pause ? pauseImage : imageSource} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.featuresContainer}>
        <TouchableOpacity onPress={downloadButton} style={styles.featureButton}>
          <Feather
            name="download"
            size={24}
            color={isDarkMode ? "black" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={shareButton} style={styles.featureButton}>
          <Feather
            name="share-2"
            size={30}
            color={isDarkMode ? "black" : "white"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={moreInformationButton}
          style={styles.featureButton}
        >
          <Ionicons
            name="information-circle-outline"
            size={30}
            color={isDarkMode ? "black" : "white"}
          />
        </TouchableOpacity>
        <InfoModal item={item} info={info} setInfo={setInfo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightCard: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkCard: {
    backgroundColor: "#183D3D",
    borderRadius: 8,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 300, // Adjust the height as needed
    marginBottom: 8,
    borderRadius: 8,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "black",
  },
  featureButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 4,
  },
  featureButtonText: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "orange",
    padding: 10,
    margin: 10,
    borderRadius: 50,
  },
});

export default CardWithFeatures;
