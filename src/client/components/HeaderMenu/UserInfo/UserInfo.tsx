import React, { useState } from "react";
import {
  IconWrapper,
  Wrapper,
  FlexWrapper,
  ArrowWrapper,
} from "./styles";
import ShortArrowSvg from "../../../../Resourse/Svg/ShortArrowSvg";
import { useSelector } from "react-redux";
import { selectors } from "../../../../store/Hooks/selectors";
import UserSvg from "../../../../Resourse/Svg/UserSvg";
import { getInitials } from "../../../Helpers/helpers";
import { IconInitials, UserText } from "./styles";



const getIcon = (username: string) => {
  if (username) return <IconInitials>{getInitials(username)}</IconInitials>;
  else return <UserSvg />;
};

const getUserText = (username: string) => {
  return username ? (
    <UserText>{username}</UserText>
  ) : (
    <UserText>Log In</UserText>
  );
};

const UserInfo = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  const { username } = useSelector(selectors.getUserInfo);

  return (
    <Wrapper onClick={handleOpenMenu}>
      <FlexWrapper>
        <IconWrapper>{getIcon(username)}</IconWrapper>
        {getUserText(username)}
      </FlexWrapper>
      <ArrowWrapper $menuIsOpened={menuIsOpened}>
        <ShortArrowSvg />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default UserInfo;
