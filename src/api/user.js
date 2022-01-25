import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { setDoc, getDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "firebase.config";

export const getMe = () => {
  const auth = getAuth();
  return auth.currentUser;
};

export const setUser = async (formData, id) => {
  const additionalUserProperties = {
    name: "",
    bio: "",
    folowers: [],
    folowing: [],
    posts: [],
    saved: [],
    timestamp: serverTimestamp(),
  };
  const formDataDb = { ...formData, ...additionalUserProperties };
  delete formDataDb.password;

  await setDoc(doc(db, "users", id), formDataDb);
};

export const getUserById = async (id) => {
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);
  return userSnap;
};

export const googleAuth = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const { user } = result;

    const userSnap = await getUserById(user.uid);

    if (!userSnap.exists()) {
      setUser(
        {
          login: user.uid,
          email: user.email,
        },
        user.uid
      );
    }
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const signInUser = async ({ email, password }) => {
  const auth = getAuth();

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential;
};

export const signUpUser = async (formData) => {
  const { email, password } = formData;

  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential;
};
