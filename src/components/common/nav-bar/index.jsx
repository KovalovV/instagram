/* eslint-disable react/no-array-index-key */
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import instagramLoginLogo from "assets/images/instagramLoginLogo.png";
import Input from "components/common/input";
import { Icon } from "components/common/icons";

import {
  StyledNav,
  NavContainer,
  Logo,
  SearchWrapper,
  IconNavigateWrapper,
  IconNavigate,
  UserPhoto,
} from "./styles";

const NavBar = () => {
  const location = useLocation();

  const emptyPath = ["/sign-up", "/sign-in", "/forgot-password"];

  const { avatar } = useSelector((state) => state.user.currentUser);
  const navigateIcons = ["home", "messenger", "plus", "explore", "heart"];

  if (emptyPath.some((path) => path === location.pathname)) {
    return <span />;
  }

  return (
    <StyledNav>
      <NavContainer>
        <Logo>
          <img src={instagramLoginLogo} alt="Instagram Logo" />
        </Logo>
        <SearchWrapper>
          <Input
            type="textSearch"
            border="none"
            bgColor="mostDarkGrey"
            id="search"
            placeholder="Search"
            // value={password}
            // onChange={onChange}
            // onClick={isVisible}
          />
        </SearchWrapper>
        <IconNavigateWrapper>
          {navigateIcons.map((name, index) => (
            <IconNavigate key={`${name}${index}`}>
              <Icon icon={`${name}Icon`} />
            </IconNavigate>
          ))}
          <UserPhoto>
            <img src={avatar} alt="Avatar" />
          </UserPhoto>
        </IconNavigateWrapper>
      </NavContainer>
    </StyledNav>
  );
};

export default NavBar;
