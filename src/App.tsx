import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { IconFacebookLogo, IconDarkMoon, IconDarkSun } from "./Common/Icon";
import Button from "./Common/Button";
import Switch from "./Common/Switch";
import Input from './Common/Input';
import customMedia from './Utils/mediaQuery';
import Login from './Common/Pages/Login';




const Container = styled.div`
  background-color: #b7b7b7;
  ${customMedia.greaterThan('desktop')`
  background-color: red;
  `};

  ${customMedia.between('tablet' , 'desktop')`
  background-color: blue;
  `};

  ${customMedia.between('mobile' , 'tablet')`
  background-color: green;
  `};


  ${customMedia.lessThan('mobile')`
  background-color: yellow;
  `};

  padding: 10px;
`
const ButtonStyle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  `

const App: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [text, setText] = useState<String>("")

  console.log(toggle)
  return (
      <>
    <Container>
    
      <Button onClick={() => console.log("clicked")} variant="primary" disabled>
        test </Button>
      <Button onClick={() => console.log("clicked")} variant="ghost">
        test </Button>
      <Button onClick={() => console.log("clicked")} variant="link">
        <ButtonStyle><IconFacebookLogo />Login with facebook</ButtonStyle>
      </Button>
      <Button onClick={() => console.log("clicked")} variant="white">
        test </Button>

      <Switch
        id={"degree-id"}
        value={toggle}
        left={<IconDarkMoon />}
        right={<IconDarkSun />}
        onChange={() => {
          setToggle(!toggle);
        }}
      ></Switch>

      <Input
        value=""
        onChange={(e) => {
          setText(e.target.value);
        }}
        title={"Email account"}
        // error={"this is an error"}
        placeholder="6 charaters and digit numbers blabla"
      ></Input>

    </Container>
    <Login /></>
  );
};

export default App;
