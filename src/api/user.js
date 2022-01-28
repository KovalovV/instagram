import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { setDoc, getDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "firebase.config";

export const getUserById = async (id) => {
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);
  return userSnap;
};

export const getMe = async () => {
  const auth = getAuth();
  // eslint-disable-next-line no-unused-vars
  let authUser;
  // eslint-disable-next-line consistent-return
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      authUser = user;
      console.log("authUser", authUser, "user", user);
      const authUserData = await getUserById(authUser.uid);
      console.log("authUserData", authUserData.data());
      return authUserData;
    }
  });
  // console.log("authUser", authUser);
};

export const setUser = async (formData, id) => {
  const additionalUserProperties = {
    id,
    name: "",
    bio: "",
    avatar: "",
    website: "",
    followers: [],
    following: [],
    posts: [],
    saved: [],
    timestamp: serverTimestamp(),
  };
  const formDataDb = { ...formData, ...additionalUserProperties };
  delete formDataDb.password;

  await setDoc(doc(db, "users", id), formDataDb);
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
