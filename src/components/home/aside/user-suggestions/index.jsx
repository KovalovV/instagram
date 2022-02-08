import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { api } from "api";

import ShortUserInfo from "components/common/short-user-info";

import { SuggestionsContainer } from "./styles";

const UserSuggestions = () => {
  const [lastUsers, setLastUser] = useState(null);
  const { id: currentUserId } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchData = async () => {
      const usersRes = await api.user.getLastUsers(currentUserId);
      setLastUser(usersRes && usersRes);
    };
    fetchData();
  }, [currentUserId]);

  return (
    <SuggestionsContainer>
      <p>Suggestions For You</p>
      {lastUsers &&
        lastUsers.map((user) => (
          <ShortUserInfo key={user.id} userId={user.id} />
        ))}
    </SuggestionsContainer>
  );
};

export default UserSuggestions;
