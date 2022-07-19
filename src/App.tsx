import React from 'react';
import styled from 'styled-components';
import './App.css';
import { IconFacebookLogo} from "./Common/Icon"
import Button from "./Common/Button"


interface Props {
  
}
const StyledDiv = styled.p<Props>`
  width: 500px;
  height: 500px;
  background-color: aqua;
`;

const App: React.FC= () => {
  return <>
  <Button > Test </Button>
  <IconFacebookLogo />
  <p> Hello </p>
  </>;
  
};

export default App;
