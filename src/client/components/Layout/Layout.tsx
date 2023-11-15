import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useSelector } from "react-redux";
import FilterMenu from "../FilterMenu/FilterMenu";
import { PopupIsOpenedBG } from "./styles";
import { Outlet } from "react-router-dom";
import { selectors } from "../../../store/Hooks/selectors";
import { useAction } from "../../../store/Hooks/useAction";

const Layout = () => {
  const { autoAuthAsync } = useAction();

  useEffect(() => {
    autoAuthAsync();
  }, []);

  const filterMenuIsOpened = useSelector(selectors.getFilterMenuIsOpened);

  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      {filterMenuIsOpened && <PopupIsOpenedBG />}
      {filterMenuIsOpened && <FilterMenu />}
    </div>
  );
};

export default Layout;
