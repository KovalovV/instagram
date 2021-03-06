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

  const comments = [];
  querySnap.forEach((document) => comments.push(document.data()));

  return comments;
};

export const addUserPost = async (postData, userId) => {
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
  try {
    await setDoc(postRef, postDataDb);
    await updateDoc(userRef, {
      posts: arrayUnion(postRef.id),
    });
    return 1;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addUserSavedPost = async (postId, userId) => {
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

export const addUserComment = async (postId, userId, content) => {
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

export const addUserLike = async (postId, userId) => {
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

export const deleteUserPost = async (postId, userId) => {
  const userRef = doc(db, "users", userId);

  const usersRef = collection(db, "users");
  const querySetUsers = query(
    usersRef,
    where("saved", "array-contains", postId)
  );
  const querySnapUsers = await getDocs(querySetUsers);
  const usersId = [];
  querySnapUsers.forEach((userDoc) => usersId.push(userDoc.data()));
  // eslint-disable-next-line no-restricted-syntax
  for (const { id } of usersId) {
    const userSavedRef = doc(db, "users", id);
    // eslint-disable-next-line no-await-in-loop
    await updateDoc(userSavedRef, {
      saved: arrayRemove(postId),
    });
  }

  const commentsRef = collection(db, "comments");
  const querySetComments = query(commentsRef, where("postID", "==", postId));
  const querySnapComments = await getDocs(querySetComments);
  const commentsId = [];
  querySnapComments.forEach((commentDoc) => commentsId.push(commentDoc.data()));
  // eslint-disable-next-line no-restricted-syntax
  for (const { id } of commentsId) {
    // eslint-disable-next-line no-await-in-loop
    await deleteDoc(doc(db, "comments", id));
  }

  const likesRef = collection(db, "likes");
  const querySetLikes = query(likesRef, where("postID", "==", postId));
  const querySnapLikes = await getDocs(querySetLikes);
  const likesId = [];
  querySnapLikes.forEach((likeDoc) => likesId.push(likeDoc.data()));
  // eslint-disable-next-line no-restricted-syntax
  for (const { id } of likesId) {
    // eslint-disable-next-line no-await-in-loop
    await deleteDoc(doc(db, "likes", id));
  }

  await updateDoc(userRef, {
    posts: arrayRemove(postId),
  });

  await deleteDoc(doc(db, "posts", postId));
};
