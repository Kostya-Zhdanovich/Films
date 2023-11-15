import React, { useState, useEffect } from "react";
import {
  Wrapper,
  SectionWrapper,
  SectionTitle,
} from "./styles";
import BookmarkSvg from "../../../Resourse/Svg/BookmarkSvg";
import FireSvg from "../../../Resourse/Svg/FireSvg";
import HomeSvg from "../../../Resourse/Svg/HomeSvg";
import SettingsSvg from "../../../Resourse/Svg/SettingsSvg";
import { useAction } from "../../../store/Hooks/useAction";
import { useSelector } from "react-redux";
import { sectionsEnum } from "../../../types";
import { getFilmsPerList } from "../../Helpers/helpers";
import { selectors } from "../../../store/Hooks/selectors";
import { useNavigate } from "react-router-dom";



const GetColor = (section: sectionsEnum, selected: sectionsEnum) => {
  return section === selected ? "#7B61FF" : "#80858B";
};


const Navigation = () => {
  const defaultSection = useSelector(selectors.getSection);
  const userInfo = useSelector(selectors.getUserInfo);

  const [selectedSection, setSelectedSection] = useState(defaultSection);

  const handleSelect = (section: sectionsEnum) => {
    setSelectedSection(section);
  };

  const { setFilmsAsync, changeSection } = useAction();

  const width = window.innerWidth;
  const filmsPerList = getFilmsPerList(width);


  const navigate = useNavigate();

  const goToAnotherSection = (section: sectionsEnum, link: string) => {
    handleSelect(section);

    if (link === "settings") {
      userInfo.username
        ? setTimeout(() => navigate(`/${link}`), 500)
        : setTimeout(() => navigate(`/sign-up`), 500);
    } else setTimeout(() => navigate(`/${link}`), 500);
  };

  return (
    <Wrapper>
      <SectionWrapper
        onClick={() => goToAnotherSection(sectionsEnum.HOME, "main")}
      >
        <HomeSvg fill={GetColor(sectionsEnum.HOME, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.HOME === selectedSection}>
          Home
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper
        onClick={() => goToAnotherSection(sectionsEnum.TRENDS, "main")}
      >
        <FireSvg fill={GetColor(sectionsEnum.TRENDS, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.TRENDS === selectedSection}>
          Trends
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper
        onClick={() =>
          goToAnotherSection(sectionsEnum.FAVOURITES, "favourites")
        }
      >
        <BookmarkSvg
          fill={GetColor(sectionsEnum.FAVOURITES, selectedSection)}
        />
        <SectionTitle $selected={sectionsEnum.FAVOURITES === selectedSection}>
          Favorites
        </SectionTitle>
      </SectionWrapper>

      <SectionWrapper
        onClick={() => goToAnotherSection(sectionsEnum.SETTINGS, "settings")}
      >
        <SettingsSvg fill={GetColor(sectionsEnum.SETTINGS, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.SETTINGS === selectedSection}>
          Settings
        </SectionTitle>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Navigation;
