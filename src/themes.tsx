export interface Theme {
    black: string;
    white: string;
    primary: string;
    secondary: string;
    buttonDefaultSize: string;
  }

const lightModeTheme = {
    black: "#22222",
    white: "#ffffff",
    primary: "#48bae4",
    secondary: "#444e72",
    fade_text: "#838baa",
    gray: "#bebebe",
    gray_bg: "#f2f2f2",
    error_red: "#f0274b",
    yellow: "#ffd130",
    buttonDefaultSize: "1.8rem"

}


const darkMode = {
    primary: "#1a2b55",
}



const darkModeTheme = {...lightModeTheme , ...darkMode};

export default lightModeTheme;