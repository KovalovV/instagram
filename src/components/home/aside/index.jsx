import { useSelector } from "react-redux";

import ShortUserInfo from "components/common/short-user-info";
import UserSuggestions from "components/common/user-suggestions";

import {
  AsideContainer,
  AsideFeed,
  HeaderDetails,
  HelpList,
  AsideFooter,
} from "./styles";

const Aside = () => {
  const { id } = useSelector((state) => state.user.currentUser);

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
          <ShortUserInfo userId={id} width="56px" height="56px" withName />
        </HeaderDetails>
        <UserSuggestions width="32px" height="32px" type="grey" />
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
