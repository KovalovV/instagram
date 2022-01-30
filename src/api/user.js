import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  where,
  setDoc,
  getDoc,
  getDocs,
  doc,
  collection,
  query,
  updateDoc,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";
import { db } from "firebase.config";

export const getUserByLogin = async (login) => {
  const collectionRef = collection(db, "users");

  const querySet = query(collectionRef, where("login", "==", login));
  const querySnap = await getDocs(querySet);

  const users = [];
  querySnap.forEach((document) => users.push(document.data()));

  return users.length ? users[0] : false;
};

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

export const setUserPost = async (postData, userId) => {
  const userRef = doc(db, "users", userId);

  const postRef = doc(collection(db, "posts"));

  const additionalPostProperties = {
    id: postRef.id,
    userID: userId,
    likes: [],
    comments: [],
    timestamp: serverTimestamp(),
  };

  const postDataDb = { ...postData, ...additionalPostProperties };

  await setDoc(postRef, postDataDb);
  await updateDoc(userRef, {
    posts: arrayUnion(postRef.id),
  });
};

export const setUser = async (formData, id) => {
  const additionalUserProperties = {
    id,
    name: "",
    bio: "",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/instagram-e4745.appspot.com/o/newUserAvatar.jpg?alt=media&token=0ef9aa7b-9350-4592-9178-d3d0e5e763a9",
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

// export const isLoginFree = async (login) => {
//   const collectionRef = collection(db, "users");

//   const querySet = query(collectionRef, where("login", "==", login));

//   const querySnap = await getDocs(querySet);

//   const users = [];
//   querySnap.forEach((document) => users.push(document.data()));

//   return users.length;
// };
