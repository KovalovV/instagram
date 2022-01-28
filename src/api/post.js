// import {
//     getAuth,
//     onAuthStateChanged,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     GoogleAuthProvider,
//   } from "firebase/auth";
import {
  //   updateDoc,
  //   doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  //   deleteDoc,
} from "firebase/firestore";
import { db } from "firebase.config";

export const getAllUserPosts = async (userId) => {
  const collectionRef = collection(db, "posts");

  const querySet = query(
    collectionRef,
    where("userID", "==", userId),
    orderBy("timestamp", "desc")
  );

  const querySnap = await getDocs(querySet);

  const posts = [];
  querySnap.forEach((document) => posts.push(document.data()));

  return posts;
};

export const getAllUserSavedPosts = async (userSavedPostId) => {
  const collectionRef = collection(db, "posts");

  const querySet = query(
    collectionRef,
    where("id", "in", userSavedPostId),
    orderBy("timestamp", "desc")
  );

  const querySnap = await getDocs(querySet);

  const savedPosts = [];
  querySnap.forEach((document) => savedPosts.push(document.data()));

  return savedPosts;
};
