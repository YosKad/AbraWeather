export type ButtonVariants = "primary" | "white" | "ghost" | "link";


export interface ButtonProps {
/**
 * Provide all variant of the button for this project
 */

    variant?: ButtonVariants;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick: () => void;
  }
  
