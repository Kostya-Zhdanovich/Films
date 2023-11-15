import React from "react";
import {
  StyledHeader,
  LogoWrapper,
  Wrapper,
  RightContentWrapper,
  FlexWrapper,
} from "./styles";
import HeaderMenu from "../../HeaderMenu/HeaderMenu";
import SearchInput from "../../SearchInput/SearchInput";
import PixemaSvg from "../../../../Resourse/Svg/PixemaSvg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
 

  let link = useLocation().pathname;
  const isMain = link.includes('main')

  return  (
    <StyledHeader>
      <Wrapper>
        <LogoWrapper>
          <Link to="/main"><PixemaSvg/></Link>
        </LogoWrapper>
        {(isMain || link === '/') && (
          <RightContentWrapper>
            {<SearchInput />}
            <HeaderMenu />
          </RightContentWrapper>
        )}
      </Wrapper>
    </StyledHeader>
  )
};

export default Header;
