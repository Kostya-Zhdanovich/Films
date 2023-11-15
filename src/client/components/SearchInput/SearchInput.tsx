import React, { useState, useMemo } from "react";
import { Search, Wrapper, FilterSvgWrapper } from "./styles";
import FilterSvg from "../../../Resourse/Svg/FilterSvg";
import { getFilmsPerList } from "../../Helpers/helpers";
import { useAction } from "../../../store/Hooks/useAction";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const { openFilterMenu, setSearchedFilmsAsync, setFilmsAsync } = useAction();

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);

    if (newValue) {
      setSearchedFilmsAsync(newValue, getFilmsPerList(width));
    } else {
      setFilmsAsync(true, getFilmsPerList(width));
    }
  };

  const width = useMemo(() => window.innerWidth, []);

  return (
    <Wrapper>
      <Search
        placeholder="Search"
        value={searchValue}
        onChange={handleChangeValue}
      ></Search>
      <FilterSvgWrapper onClick={openFilterMenu}>
        <FilterSvg />
      </FilterSvgWrapper>
    </Wrapper>
  );
};

export default SearchInput;
