import { getDownloadURL, getStorage, ref } from "firebase/storage";
import app from "./init";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app);
const storage = getStorage(app);

export async function getFile(callback: Function) {
  const storageRef = ref(
    storage,
    "https://firebasestorage.googleapis.com/v0/b/mafnext-1.appspot.com/o/File%2FCV%20Muhammad%20Ardiansyah%20Firdaus%20(1).pdf?alt=media&token=cb844795-4021-4e5e-8d6e-13fe90953995"
  );
  getDownloadURL(storageRef)
    .then((url) => {
      callback(url);
    })
    .catch((error) => {
      callback(error);
    });
}

export async function sendMessage(
  data: {
    name: string;
    mail: string;
    phone: string;
    message: string;
  },
  callback: Function
) {
  await addDoc(collection(firestore, "Messages"), data)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}
