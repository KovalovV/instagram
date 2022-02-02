/* eslint-disable react/no-array-index-key */
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import {
//   setSelectedPostThunk,
//   setSelectedPostCommentsThunk,
// } from "store/thunks/post";
import { setCurrentUserThunk } from "store/thunks/user";

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
  const dispatch = useDispatch();

  const emptyPath = ["/sign-up", "/sign-in", "/forgot-password"];

  const { avatar, login } = useSelector((state) => state.user.currentUser);
  const navigateIcons = ["home", "messenger", "plus", "explore", "heart"];
  const routeIcons = ["home", "messenger", "create", "explore", "heart"];

  useEffect(() => {
    dispatch(setCurrentUserThunk());
  }, [dispatch]);

  if (emptyPath.some((path) => path === location.pathname)) {
    return <span />;
  }

  return (
    <StyledNav>
      <NavContainer>
        <Logo>
          <Link to={`/${login}`}>
            <img src={instagramLoginLogo} alt="Instagram Logo" />
          </Link>
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
              {name === "plus" ? (
                <Link to={`/${routeIcons[index]}/image`}>
                  <Icon icon={`${name}Icon`} />
                </Link>
              ) : (
                <Link to={`/${routeIcons[index]}`}>
                  <Icon icon={`${name}Icon`} />
                </Link>
              )}
            </IconNavigate>
          ))}
          <UserPhoto>
            <Link to={`/${login}`}>
              <img src={avatar} alt="Avatar" />
            </Link>
          </UserPhoto>
        </IconNavigateWrapper>
      </NavContainer>
    </StyledNav>
  );
};

export default NavBar;
