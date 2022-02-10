import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import instagramLoginLogo from "assets/images/instagramLoginLogo.png";
import { Icon } from "components/common/icons";

import SearchUser from "./search-user";

import {
  StyledNav,
  NavContainer,
  Logo,
  IconNavigateWrapper,
  IconNavigate,
  UserPhoto,
} from "./styles";

const NavBar = () => {
  const location = useLocation();

  const emptyPath = ["/sign-up", "/sign-in", "/forgot-password"];

  const { avatar, login } = useSelector((state) => state.user.currentUser);
  const navigateIcons = ["home", "messenger", "plus", "explore", "heart"];
  const routeIcons = ["", "messenger", "create", "explore", "heart"];

  if (emptyPath.some((path) => path === location.pathname)) {
    return <span />;
  }

  return (
    <StyledNav>
      <NavContainer>
        <Logo>
          <Link to="/">
            <img src={instagramLoginLogo} alt="Instagram Logo" />
          </Link>
        </Logo>
        <SearchUser />
        <IconNavigateWrapper>
          {navigateIcons.map((name, index) => (
            <IconNavigate key={`${name}`}>
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
            <Link to={`/u/${login}`}>
              <img src={avatar} alt="Avatar" />
            </Link>
          </UserPhoto>
        </IconNavigateWrapper>
      </NavContainer>
    </StyledNav>
  );
};

export default NavBar;
