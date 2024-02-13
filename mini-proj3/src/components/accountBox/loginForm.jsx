import React, { useContext, useState, useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../../marginer";
import { AccountContext } from "./accountContext";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function LoginForm(props) {
 
    const navigate = useNavigate();
    
    const handleSignup = () => {
        navigate('/NBA') 
    } 
 
    const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <BoldLink href="./Forgotpassword.jsx">Forgot your password?</BoldLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={handleSignup}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
