import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

import { api } from "api";

import { Icon } from "components/common/icons";

import { HeaderDetails, InfoWrapper } from "./styles";

const ShortUserInfo = ({
  userId,
  width,
  height,
  withName,
  altitude,
  link = "login",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const userRes = await api.user.getUserById(userId);
      setUser(userRes && userRes.data());
      setIsLoading(false);
    };
    fetchData();
  }, [userId]);

  return (
    <HeaderDetails width={width} height={height} altitude={altitude}>
      {isLoading ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ margin: 1 }}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Skeleton width="125px">
              <Typography>.</Typography>
            </Skeleton>
          </Box>
        </Box>
      ) : (
        user && (
          <>
            <Link to={`/u/${user.login}`}>
              <img src={user.avatar} alt="Avatar" />
            </Link>
            <InfoWrapper>
              <h1>
                <Link to={`/u/${user.login}`}>
                  {link === "login" && user.login}
                  {link === "name" && user.name}
                  {user.id === "u5WYU79Sgcggbic5hzrxAdzYHxC2" && (
                    <Icon icon="verifiedIcon" style={{ marginLeft: `5px` }} />
                  )}
                </Link>
              </h1>
              {withName && <p>{user.name}</p>}
            </InfoWrapper>
          </>
        )
      )}
    </HeaderDetails>
  );
};

export default ShortUserInfo;
