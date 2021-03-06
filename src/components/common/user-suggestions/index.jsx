import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { api } from "api";

import ShortUserInfo from "components/common/short-user-info";

import { SuggestionsContainer, SuggestionsText } from "./styles";

const UserSuggestions = ({ width, height, type, altitude }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lastUsers, setLastUser] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const usersRes = await api.user.getLastUsers(currentUser.id);

      setLastUser(usersRes && usersRes);
      setIsLoading(false);
    };
    fetchData();
  }, [currentUser.id]);

  return (
    <SuggestionsContainer>
      <SuggestionsText type={type}>Suggestions For You</SuggestionsText>
      {isLoading ? (
        <Box sx={{ margin: 1 }}>
          <Skeleton
            animation="pulse"
            variant="rectangular"
            width="293px"
            height="240px"
          />
        </Box>
      ) : (
        <>
          <ShortUserInfo
            key="u5WYU79Sgcggbic5hzrxAdzYHxC2"
            userId="u5WYU79Sgcggbic5hzrxAdzYHxC2"
            width={width}
            height={height}
            withName
            altitude={altitude}
          />
          {lastUsers &&
            lastUsers.map((user) => (
              <ShortUserInfo
                key={user.id}
                userId={user.id}
                width={width}
                height={height}
                withName
                altitude={altitude}
              />
            ))}
        </>
      )}
    </SuggestionsContainer>
  );
};

export default UserSuggestions;
