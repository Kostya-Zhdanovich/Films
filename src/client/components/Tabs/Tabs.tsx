import React, { useState, useEffect } from "react";
import {
  StyledTab,
  StyledTabsWrapper,
} from "./styles";
import { sortByEnum } from "../../../types";
import { useAction } from "../../../store/Hooks/useAction";

interface TabsProps {
  firstText: string;
  secondText: string;
}

enum valuesEnum {
  FIRST = "FIRST",
  SECOND = "SRCOND",
}

const Tabs = ({ firstText, secondText }: TabsProps) => {
  const [active, setActive] = useState(valuesEnum.FIRST);
  const handleClickOnTab = (activeValue: valuesEnum) => {
    setActive(activeValue);
  };

  const { changeFilters } = useAction();

  useEffect(() => {
    if (firstText === "Rating" && secondText === "Year") {
      const sortBy =
        active === valuesEnum.FIRST ? sortByEnum.RATING : sortByEnum.YEAR;
      changeFilters({ sortBy });
    }
  }, [active]);

  return (
    <StyledTabsWrapper>
      <StyledTab
        $active={active === valuesEnum.FIRST}
        onClick={() => handleClickOnTab(valuesEnum.FIRST)}
        $isFirst={true}
      >
        {firstText}
      </StyledTab>
      <StyledTab
        $active={active === valuesEnum.SECOND}
        onClick={() => handleClickOnTab(valuesEnum.SECOND)}
        $isFirst={false}
      >
        {secondText}
      </StyledTab>
    </StyledTabsWrapper>
  );
};

export default Tabs;
