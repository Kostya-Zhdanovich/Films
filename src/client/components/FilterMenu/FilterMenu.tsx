import React, { useState, useEffect, useMemo } from "react";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";
import ClearButton from "../Buttons/ClearButton/ClearButton";
import {
  Wrapper,
  MainWrapper,
  Title,
  SortByWrapper,
  FilterValueWrapper,
  FilterValue,
  InputsWrapper,
  InputOrButtonWrapper,
  ButtonsWrapper,
  CursorPounterWrapper,
} from "./styles";
import Input from "../CustomInput/CustomInput";
import CrossSvg from "../../../Resourse/Svg/CrossSvg";
import Tabs from "../Tabs/Tabs";
import { useAction } from "../../../store/Hooks/useAction";
import { useSelector } from "react-redux";
import { sectionsEnum } from "../../../types";
import { getFilmsPerList } from "../../Helpers/helpers";
import { selectors } from "../../../store/Hooks/selectors";

const fromToObj = {
  yearFrom: 0,
  yearTo: 0,

  ratingFrom: 0,
  ratingTo: 0,

  useFilters: true,
};

const FilterMenu = () => {
  const [filters, setFilters] = useState(fromToObj);

  const {
    closeFilterMenu,
    changeFilters,
    clearFilters,
    changeSection,
    setFilteredFilmsAsync,
  } = useAction();

  const handleSetFilters = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof fromToObj
  ) => {
    setFilters(() => {
      return { ...filters, [field]: +event.target.value, useFilters: true };
    });
  };

  useEffect(() => {
    changeFilters(filters);
  }, [filters]);

  const width = useMemo(() => window.innerWidth, []);

  const globalFilters = useSelector(selectors.getFilters);

  const showResults = () => {
      changeSection(sectionsEnum.HOME);
      setFilteredFilmsAsync(true, getFilmsPerList(width), 1, globalFilters);
  };

  const handleClearFilters = () => {
    clearFilters();
    setFilters(fromToObj);
  };

  return (
    <Wrapper>
      <div>
        <MainWrapper>
          <Title>Filters</Title>
          <CursorPounterWrapper onClick={closeFilterMenu}>
            <CrossSvg fill="#AFB2B6" />
          </CursorPounterWrapper>
        </MainWrapper>

        <SortByWrapper>
          <FilterValue>Sort by</FilterValue>
          <Tabs firstText="Rating" secondText="Year" />
        </SortByWrapper>
        <FilterValueWrapper>
          <FilterValue>Years</FilterValue>
          <InputsWrapper>
            <InputOrButtonWrapper>
              <Input
                value={filters.yearFrom ? filters.yearFrom : ""}
                placeholder="From"
                inputType="number"
                onChange={(event) => {
                  handleSetFilters(event, "yearFrom");
                }}
              ></Input>
            </InputOrButtonWrapper>
            <InputOrButtonWrapper>
              <Input
                value={filters.yearTo ? filters.yearTo : ""}
                placeholder="To"
                inputType="number"
                onChange={(event) => {
                  handleSetFilters(event, "yearTo");
                }}
              ></Input>
            </InputOrButtonWrapper>
          </InputsWrapper>
        </FilterValueWrapper>

        <FilterValueWrapper>
          <FilterValue>Rating</FilterValue>
          <InputsWrapper>
            <InputOrButtonWrapper>
              <Input
                value={filters.ratingFrom ? filters.ratingFrom : ""}
                placeholder="From"
                inputType="number"
                onChange={(event) => {
                  handleSetFilters(event, "ratingFrom");
                }}
              ></Input>
            </InputOrButtonWrapper>
            <InputOrButtonWrapper>
              <Input
                value={filters.ratingTo ? filters.ratingTo : ""}
                placeholder="To"
                inputType="number"
                onChange={(event) => {
                  handleSetFilters(event, "ratingTo");
                }}
              ></Input>
            </InputOrButtonWrapper>
          </InputsWrapper>
        </FilterValueWrapper>
      </div>

      <ButtonsWrapper>
        <InputOrButtonWrapper>
          <ClearButton  onClick={handleClearFilters}>
            Clear filter
          </ClearButton>
        </InputOrButtonWrapper>
        <InputOrButtonWrapper>
          <SubmitButton onClick={showResults}>Show results</SubmitButton>
        </InputOrButtonWrapper>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default FilterMenu;
