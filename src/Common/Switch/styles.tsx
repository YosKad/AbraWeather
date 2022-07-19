import styled from "styled-components";

export const SwitchWrapper = styled.div`
 width: 73px;
  height: 40px;
  border-radius: 100px;
  border: solid 1px #444e72;
  background-color: #fff;
  position: relative;
`;

export const SwitchCheckbox = styled.input``
/* visibility: hidden;`; */

export const SwitchLeftThumbWrapper = styled.div``;

export const SwitchRightThumbWrapper = styled.div``;

export const SwitchToggle = styled.div`
position: absolute;
width: 32px;
  height: 32px;
  background-color: #838baa;
  border-radius: 50%;
top: 4px;
left: 4px;
`;

interface Props {
    checked: boolean;
  }