import { api } from "api";
import { getAuth } from "firebase/auth";

export const getMe = () => {
  const auth = getAuth();
  return auth.currentUser;
};

const Home = () => {
  const currUser = api.user.getMe();
  console.log("currUser", currUser.uid);

  const auth = getAuth();
  console.log("auth", auth);
  return <div>Home page</div>;
};

export default Home;
