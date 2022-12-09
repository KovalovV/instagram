import { useLocation, Link } from "react-router-dom";

import instagramLoginLogo from "assets/images/instagramLoginLogo.png";
import { Icon } from "components/common/icons";

import SearchUser from "./search-user";
import UserPhoto from "./user-photo";

import {
  StyledNav,
  NavContainer,
  Logo,
  IconNavigateWrapper,
  IconNavigate,
} from "./styles";

const NavBar = () => {
  const location = useLocation();

  const emptyPath = ["/sign-up", "/sign-in", "/forgot-password", "/call"];

  const navigateIcons = ["home", "direct", "plus", "explore", "heart"];
  const routeIcons = ["", "direct", "create", "explore", "heart"];

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
          <UserPhoto />
        </IconNavigateWrapper>
      </NavContainer>
    </StyledNav>
  );
};

export default NavBar;
