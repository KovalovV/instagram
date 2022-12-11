/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "components/common/input";

import { api } from "api";

import useDebounce from "hooks/useDebounce";

import Spinner from "components/common/spinner";
import ShortUserInfo from "components/common/short-user-info";

import {
  SearchWrapper,
  SearchResults,
  SearchResultsWrapper,
  ShortUserInfoWrapper,
  EmptyResult,
} from "./styles";

const SearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setValue("");
  };

  const onClose = (e) => {
    if (e.target.id === "search-wrapper") {
      setValue("");
    }
  };

  const debouncedSearchTerm = useDebounce(value, 500);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      const resultUsers = await api.user.searchUserByLogin(debouncedSearchTerm);
      setIsLoading(false);
      setResult(resultUsers);
    } else {
      setResult([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <SearchWrapper>
      <Input
        type="textSearch"
        border="none"
        bgColor="mostDarkGrey"
        id="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      {Boolean(value.length) && (
        <SearchResultsWrapper id="search-wrapper" onClick={onClose}>
          <SearchResults>
            {isLoading ? (
              <Spinner width="50px" height="50px" />
            ) : result.length ? (
              result.map((item) => (
                <ShortUserInfoWrapper key={item.id}>
                  <Link to={`/u/${item.login}`}>
                    <ShortUserInfo
                      userId={item.id}
                      width="44px"
                      height="44px"
                      withName
                    />
                  </Link>
                </ShortUserInfoWrapper>
              ))
            ) : (
              <EmptyResult>No results found.</EmptyResult>
            )}
          </SearchResults>
        </SearchResultsWrapper>
      )}
    </SearchWrapper>
  );
};

export default SearchUser;
