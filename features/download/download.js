import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";
import axios from "axios";
global.Buffer = require("buffer").Buffer;

const requestFileWritePermission = async () => {
  const permissions =
    await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  console.log(permissions.granted);
  if (!permissions.granted) {
    console.log("File write Permissions Denied!!");
    return {
      access: false,
      directoryUri: null,
    };
  }
  return {
    access: true,
    directoryUri: permissions.directoryUri,
  };
};

const saveGifFile = async (gifData, directoryUri) => {
  try {
    await FileSystem.StorageAccessFramework.createFileAsync(
      directoryUri,
      "My_gif",
      "image/gif"
    )
      .then(async (uri) => {
        await FileSystem.writeAsStringAsync(uri, gifData, {
          encoding: FileSystem.EncodingType.Base64,
        });
      })
      .then(() => {
        Alert.alert("Success", "GIF Saved");
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    Alert.alert("Error", `Could not Download GIF: ${error.message}`);
  }
};

export const fetchGif = async (url) => {
  const gifUrl = url.split("?")[0];
  console.log("====================================");
  console.log(gifUrl);
  console.log("====================================");
  const hasPermissions = await requestFileWritePermission();
  if (hasPermissions.access) {
    axios
      .get(gifUrl, { responseType: "arraybuffer" })
      .then(async (res) => {
        const gifData = Buffer.from(res.data).toString("base64");
        saveGifFile(gifData, hasPermissions.directoryUri);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Error Downloading GIF");
      });
  }
};
