import React , {Component , useState} from 'react';
import styled from 'styled-components';
import { IconFacebookLogo , IconDarkMoon , IconDarkSun} from "./Common/Icon";
import Button from "./Common/Button";
import Switch from "./Common/Switch";



const Container = styled.div`
  background-color: #b7b7b7;
  padding: 10px;
`
const ButtonStyle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  `

const App: React.FC= () => {
  const [toggle, setToggle] = useState<boolean>(true);
  console.log(toggle)
  return (

  <Container>
<Button onClick={() => console.log("clicked")} variant="primary" disabled>
  test </Button>
<Button onClick={() => console.log("clicked")} variant="ghost">
   test </Button>
<Button onClick={() => console.log("clicked")} variant="link">
  <ButtonStyle><IconFacebookLogo/>Login with facebook</ButtonStyle> 
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
  </Container>
  
);
};

export default App;
