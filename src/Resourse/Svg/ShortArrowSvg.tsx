import React from "react";
import { Wrapper, StyledFillSvg } from "./styles";

const ShortArrowSvg = () => {
  return (
    <Wrapper>
      <StyledFillSvg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.23496 6.35943C9.66622 6.01442 10.2955 6.08434 10.6405 6.5156L15.1403 12.1403L10.6405 17.765C10.2955 18.1963 9.66622 18.2662 9.23496 17.9212C8.8037 17.5762 8.73378 16.9469 9.07879 16.5156L12.579 12.1403L9.07879 7.76499C8.73378 7.33373 8.8037 6.70444 9.23496 6.35943Z"
        />
      </StyledFillSvg>
    </Wrapper>
  );
};

export default ShortArrowSvg;
