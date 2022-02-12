import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  limit,
  orderBy,
  arrayRemove,
  arrayUnion,
  where,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  collection,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "firebase.config";

import { toast } from "react-toastify";

export const searchUserByLogin = async (login) => {
  const collectionRef = collection(db, "users");

  const querySet = query(
    collectionRef,
    where("login", ">=", login),
    where("login", "<=", `${login}\uf8ff`)
  );
  const querySnap = await getDocs(querySet);

  const users = [];
  querySnap.forEach((document) => users.push(document.data()));

  return users;
};

export const getUserByLogin = async (login) => {
  try {
    const collectionRef = collection(db, "users");

    const querySet = query(collectionRef, where("login", "==", login));
    const querySnap = await getDocs(querySet);

    const users = [];
    querySnap.forEach((document) => users.push(document.data()));

    if (!users.length) {
      throw new Error("This user not exists");
    }

    return users[0];
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserById = async (id) => {
  try {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);

    return userSnap;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addUser = async (formData, id) => {
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
      addUser(
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

export const signOutUser = () => {
  try {
    const auth = getAuth();
    auth.signOut();
    return 1;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProfileInfo = async (editedProfileInfo) => {
  try {
    const userRef = doc(db, "users", editedProfileInfo.id);
    const userSnap = await getDoc(userRef);

    const userData = userSnap.data();

    if (
      !(await getUserByLogin(editedProfileInfo.login)) ||
      userData.login === editedProfileInfo.login
    ) {
      await updateDoc(userRef, editedProfileInfo);

      toast.success("Profile info updated");
    } else {
      throw Error("This login is exists");
    }
  } catch (error) {
    toast.error("Profile info not updated");
  }
};

export const addUserFollowing = async (userId, followingId) => {
  const userRef = doc(db, "users", userId);
  const followingIdUserRef = doc(db, "users", followingId);
  const followingDocRef = doc(collection(db, "followings"));

  const followingData = {
    id: followingDocRef.id,
    userID: userId,
    followingID: followingId,
  };

  await setDoc(followingDocRef, followingData);

  await updateDoc(userRef, {
    following: arrayUnion(followingId),
  });

  await updateDoc(followingIdUserRef, {
    followers: arrayUnion(userId),
  });
};

export const removeUserFollowing = async (userId, followingId) => {
  const userRef = doc(db, "users", userId);
  const followingIdUserRef = doc(db, "users", followingId);

  const followingsRef = collection(db, "followings");

  const querySet = query(
    followingsRef,
    where("userID", "==", userId),
    where("followingID", "==", followingId)
  );

  const querySnap = await getDocs(querySet);

  const following = [];
  querySnap.forEach((followingDoc) => following.push(followingDoc));

  await deleteDoc(doc(db, "followings", following[0].id));

  await updateDoc(userRef, {
    following: arrayRemove(followingId),
  });

  await updateDoc(followingIdUserRef, {
    followers: arrayRemove(userId),
  });
};

export const getUserFeed = async (userId) => {
  const userDoc = await getUserById(userId);
  const userData = userDoc.data();

  const postsRef = collection(db, "posts");

  if (userData.following.length) {
    const querySet = query(
      postsRef,
      where("userID", "in", userData.following),
      orderBy("timestamp", "desc")
    );
    const querySnap = await getDocs(querySet);

    const feedPosts = [];
    querySnap.forEach((postDoc) => feedPosts.push(postDoc.data()));

    return feedPosts;
  }
  return [];
};

export const getLastUsers = async (currentUserId) => {
  const usersRef = collection(db, "users");

  const querySet = query(usersRef, where("id", "!=", currentUserId), limit(5));
  const querySnap = await getDocs(querySet);

  const lastUsers = [];
  querySnap.forEach((userDoc) => lastUsers.push(userDoc.data()));

  return lastUsers;
};
