/* eslint-disable import/no-cycle */
import {
  arrayUnion,
  arrayRemove,
  updateDoc,
  doc,
  collection,
  getDocs,
  getDoc,
  setDoc,
  query,
  where,
  orderBy,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "firebase.config";

import { api } from "./index";

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

export const getPostById = async (postId) => {
  const postRef = doc(db, "posts", postId);
  const postSnap = await getDoc(postRef);
  return postSnap;
};

export const getAllPostCommentsById = async (postId) => {
  const collectionRef = collection(db, "comments");

  const querySet = query(
    collectionRef,
    where("postID", "==", postId),
    orderBy("timestamp", "desc")
  );

  const querySnap = await getDocs(querySet);

  const authorId = [];
  querySnap.forEach((document) => authorId.push(document.data().authorID));

  const authors = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const author of authorId) {
    // eslint-disable-next-line no-await-in-loop
    const user = await api.user.getUserById(author);
    const userData = user.data();
    authors.push(userData);
  }

  const commentsData = [];
  querySnap.forEach((document) => commentsData.push(document.data()));

  const comments = [];
  commentsData.forEach((document, index) =>
    comments.push({
      ...document,
      user: { ...authors[index] },
    })
  );

  return comments;
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

export const setUserSavedPost = async (postId, userId) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    saved: arrayUnion(postId),
  });
};

export const removeUserSavedPost = async (postId, userId) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    saved: arrayRemove(postId),
  });
};

export const setUserComment = async (postId, userId, content) => {
  const postRef = doc(db, "posts", postId);
  const commentRef = doc(collection(db, "comments"));

  const commentData = {
    id: commentRef.id,
    postID: postId,
    authorID: userId,
    content,
    timestamp: serverTimestamp(),
  };

  await setDoc(commentRef, commentData);

  await updateDoc(postRef, {
    comments: arrayUnion(commentRef.id),
  });
};

export const setUserLike = async (postId, userId) => {
  const postRef = doc(db, "posts", postId);
  const likeRef = doc(collection(db, "likes"));

  const likeData = {
    id: likeRef.id,
    postID: postId,
    authorID: userId,
  };

  await setDoc(likeRef, likeData);

  await updateDoc(postRef, {
    likes: arrayUnion(userId),
  });
};

export const removeUserLike = async (postId, userId) => {
  const postRef = doc(db, "posts", postId);
  const likeRef = collection(db, "likes");

  const querySet = query(
    likeRef,
    where("postID", "==", postId),
    where("authorID", "==", userId)
  );

  const querySnap = await getDocs(querySet);

  const like = [];
  querySnap.forEach((likeDoc) => like.push(likeDoc));

  await deleteDoc(doc(db, "likes", like[0].id));

  await updateDoc(postRef, {
    likes: arrayRemove(userId),
  });
};
