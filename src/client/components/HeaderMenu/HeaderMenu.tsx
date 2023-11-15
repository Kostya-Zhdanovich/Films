import React, { useState } from "react";
import UserInfoContent from "./UserInfoContent/UserInfoContent";
import UserInfo from "./UserInfo/UserInfo";
import { useSelector } from "react-redux";
import { selectors } from "../../../store/Hooks/selectors";

const HeaderMenu = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };
  const { username } = useSelector(selectors.getUserInfo);


  return (
   
    <div onClick={handleOpenMenu}>
      <UserInfo />
      {menuIsOpened && (
        <UserInfoContent $isAuthorized={!!username}></UserInfoContent>
      )}
    </div>
  )
}

export default HeaderMenu;
