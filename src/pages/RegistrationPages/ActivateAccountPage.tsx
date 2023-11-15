import React, { useEffect } from "react";
import {
  SuccessWrapper,
  FromWrapper,
  ActivationText,
  SubmitButtonWrapper,
} from "./styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SubmitButton from "../../client/components/Buttons/SubmitButton/SubmitButton";
import { activateAccountAsync } from "../../store/User/userThunks/activateAccountAsync";

const ActivateAccountPage = () => {
  const { uid, token } = useParams();

  useEffect(() => {
    if (uid && token) {
      activateAccountAsync(uid!, token!);
    }
  }, [uid, token]);

  return (
    <SuccessWrapper>
    <FromWrapper>
      <ActivationText>
        {uid && token ? "Success!" : "Please, check your email! Activate your account with the activation link in the email!"}
      </ActivationText>
      {uid && token && (
        <Link to="/main">
          <SubmitButtonWrapper to="/main">
            <SubmitButton>Go to home!</SubmitButton>
          </SubmitButtonWrapper>
        </Link>
      )}
    </FromWrapper>
    </SuccessWrapper>
  );
};

export default ActivateAccountPage;
