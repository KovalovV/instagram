import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import UserSuggestions from "./user-suggestions";

import {
  AsideContainer,
  AsideFeed,
  HeaderDetails,
  HelpList,
  AsideFooter,
} from "./styles";

const Aside = () => {
  const { avatar, name, login } = useSelector(
    (state) => state.user.currentUser
  );

  const helpUserCategory = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Top",
    "Accounts",
    "Hashtags",
    "Language",
  ];

  return (
    <AsideContainer>
      <AsideFeed>
        <HeaderDetails>
          <Link to={`/u/${login}`}>
            <img src={avatar} alt="Avatar" />
          </Link>
          <div>
            <h1>
              <Link to={`/u/${login}`}>{login}</Link>
            </h1>
            <p>{name}</p>
          </div>
        </HeaderDetails>
        <UserSuggestions />
        <HelpList>
          {helpUserCategory.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </HelpList>

        <AsideFooter>© 2022 Instagram from Vitala Kovalov</AsideFooter>
      </AsideFeed>
    </AsideContainer>
  );
};
export default Aside;
