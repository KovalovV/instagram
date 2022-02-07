import { useEffect, useState } from "react";

import { api } from "api";

import { Link } from "react-router-dom";

import { HeaderDetails } from "./styles";

const ShortUserInfo = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await api.user.getUserById(userId);
      setUser(userRes && userRes.data());
    };
    fetchData();
  }, [userId]);

  return (
    <HeaderDetails>
      {user && (
        <>
          <Link to={`/${user.login}`}>
            <img src={user.avatar} alt="Avatar" />
          </Link>
          <h1>
            <Link to={`/${user.login}`}>{user.login}</Link>
          </h1>
        </>
      )}
    </HeaderDetails>
  );
};

export default ShortUserInfo;
