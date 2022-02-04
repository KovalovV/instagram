import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const storeImage = async (currentUserId, image) =>
  new Promise((resolve, reject) => {
    const storage = getStorage();
    const fileName = `${currentUserId}-${uuidv4()}-${image.name}`;
    const storageRef = ref(storage, `images/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      // eslint-disable-next-line no-unused-vars
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
