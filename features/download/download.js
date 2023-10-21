// import * as FileSystem from "expo-file-system";
// import ensureFileDir from "../directory";

// import { Platform, PermissionsAndroid } from "react-native";
// let grantedPermission = false;
// // const permissions = async () => {
// //   try {
// //     const granted = await PermissionsAndroid.request(
// //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
// //       {
// //         title: "Storage Permission Required",
// //         message: "App needs access to your storage to download Photos",
// //         buttonNeutral: "Ask Me Later",
// //         buttonNegative: "Cancel",
// //         buttonPositive: "OK",
// //       }
// //     );

// //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
// //       console.log("Storage Permission Granted.");
// //       grantedPermission = true;
// //     } else {
// //       console.log("Storage Permission Not Granted.");
// //       //   return false;
// //       grantedPermission = false;
// //     }
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };

// export async function downloadGif(id, gifDir, gifFileUri, gifUrl) {
//   try {
//     if (Platform.OS === "android") await permissions();
//     console.log(id, gifDir, gifFileUri, gifUrl);
//     if (grantedPermission) {
//       await ensureFileDir(gifDir);
//       const fileInfo = await FileSystem.getInfoAsync(gifFileUri);
//       console.log("FILE INFO", fileInfo);
//       if (!fileInfo.exists) {
//         const result = await FileSystem.downloadAsync(gifUrl, fileUri);
//         console.log("Downloaded file to ", result.uri);
//       }
//       //   return fileUri;
//     } else {
//       console.log("Permission not granted");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
