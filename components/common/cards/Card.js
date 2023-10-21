import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Share } from "react-native";
import { downloadGif } from "../../../features/download/download";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
const CardWithFeatures = ({ id, imageSource, onPressImage }) => {
  const onPressButton1 = async () => {
    const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (perm.status != "granted") {
      alert("Permission not granted");
      return;
    }
    try {
      const asset = await MediaLibrary.createAssetAsync(imageSource.uri);
      const album = await MediaLibrary.getAlbumAsync("Download");
      if (album == null) {
        await MediaLibrary.createAlbumAsync("Download", assets, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([assets], album, false);
      }
    } catch (e) {
      console.log(e);
    }
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

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPressImage}>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.featuresContainer}>
        <TouchableOpacity onPress={onPressButton1} style={styles.featureButton}>
          <Feather name="download" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={shareButton} style={styles.featureButton}>
          <Feather name="share-2" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
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
    height: 150, // Adjust the height as needed
    marginBottom: 8,
    borderRadius: 8,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featureButton: {
    flex: 1,
    // backgroundColor: "blue", // Adjust button styles as needed
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 4,
  },
  featureButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CardWithFeatures;
