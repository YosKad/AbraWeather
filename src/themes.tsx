const baseTheme = {
    black: "#22222",
    white: "#ffffff",
    primary: "#48bae4",
    secondary: "#444e72"
}

const lightMode = {
    black: "#222222",
    white: "#ffffff",
    primary: "#48bae4",
    secondary: "#444e72",
    buttonDefaultSize: "1.8rem",
}

const darkMode = {
    primary: "#1a2b55",
}


const lightModeTheme = {...baseTheme , ...lightMode};
const darkModeTheme = {...baseTheme , ...darkMode};

export default lightModeTheme;