import React, { useState } from "react";
import {
  StyledInput,
  StyledLabel,
  StyledSwitch,
} from "./styles";
import { useAction } from "../../../store/Hooks/useAction";
import { themeModes } from "../../../styles/theme";
import { useSelector } from "react-redux";
import { selectors } from "../../../store/Hooks/selectors";

const ThemeToggler = () => {
  const { changeTheme } = useAction();
  const themeMode = useSelector(selectors.getThemeMode);

  const [checked, setChecked] = useState(themeMode === themeModes.DARK_MODE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme =
      themeMode === themeModes.DARK_MODE
        ? themeModes.LIGHT_MODE
        : themeModes.DARK_MODE;
    changeTheme(newTheme);
    setChecked(event.target.checked);
  };

  return (
    <StyledLabel>
      <StyledInput checked={checked} type="checkbox" onChange={handleChange} />
      <StyledSwitch />
    </StyledLabel>
  );
};

export default ThemeToggler;
