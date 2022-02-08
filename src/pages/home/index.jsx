import UserFeed from "components/home/user-feed";
import Aside from "components/home/aside";

import { MainContainer } from "./styles";

const Home = () => (
  <MainContainer>
    <UserFeed />
    <Aside />
  </MainContainer>
);

export default Home;
