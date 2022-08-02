import React from "react";

export interface SwitchProps {
/**
 * Switch toggle to move for dark to light mode in the app
 */


  id: string;  
left? :React.ReactNode;
right? :React.ReactNode;
value: boolean;
onChange: () => void;

}
