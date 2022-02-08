import { useEffect, useState } from "react";

import { api } from "api";

import Date from "components/common/date";

import { Link } from "react-router-dom";

import { DescriptionHeader } from "./styles";

const UserComment = ({
  userId,
  description,
  postTimestamp,
  withAvatar,
  withDate,
}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await api.user.getUserById(userId);
      setUser(userRes && userRes.data());
    };
    fetchData();
  }, [userId]);

  return (
    <DescriptionHeader withAvatar={withAvatar}>
      {user && (
        <>
          {withAvatar && (
            <Link to={`/u/${user.login}`}>
              <img src={user.avatar} alt="Avatar" />
            </Link>
          )}
          <div className="description-container">
            <span className="login">
              <Link to={`/u/${user.login}`}>{user.login}</Link>
            </span>
            <span>{description}</span>
            {withDate && <Date date={postTimestamp} />}
          </div>
        </>
      )}
    </DescriptionHeader>
  );
};

export default UserComment;
