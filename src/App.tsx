import React from 'react';
import styled from 'styled-components';
import './App.css';

interface Props {
  
}
const StyledDiv = styled.p<Props>`
  width: 500px;
  height: 500px;
  background-color: aqua;
`;

const App: React.FC= () => {
  return <>
  <p> Hello </p>
  </>;
  
};

export default App;
