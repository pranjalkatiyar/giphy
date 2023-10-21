import * as FileSystem from "expo-file-system";

export default async function ensureFileDir(gifDir) {
  const dirInfo = await FileSystem.getInfoAsync(gifDir);
  if (!dirInfo.exists) {
    console.log("creating directory");
    await FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
  }
  console.log("created");
}
