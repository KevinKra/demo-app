import { styled, css, Theme, Typography } from "@mui/material";
// import { css } from "@emotion/react";
import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";
import StyledIcon, { IIcon } from "../../_atoms/Icon/Icon";

interface IButton extends ButtonProps {
  text: string;
  icon?: IIcon;
  customColor?: string;
}

const StyledButton: FC<IButton> = ({ icon, text, ...args }) => {
  return (
    <Wrapper icon={icon} {...args}>
      {icon && (
        <StyledIcon className="styled-button-icon" icon={icon} size="lg" />
      )}
      {text}
    </Wrapper>
  );
};

export default StyledButton;

const Wrapper = styled(Button)<{ icon?: IIcon }>`
  text-transform: none;
  height: 3rem;
  // todo: base palette not found, just the custom stuff added.
  ${(props) => `background-color: ${props.theme.palette.secondary}`};

  .styled-button-icon {
    margin-right: 0.5rem;
  }
  ${(props) =>
    props.icon === "github" &&
    css`
      background-color: ${props.theme.palette.brands[props.icon]};
    `};
  ${(props) =>
    props.icon === "google" &&
    `background-color: ${props.theme.palette.brands[props.icon]}`};
  ${(props) =>
    props.icon === "email" &&
    `background-color: ${props.theme.palette.primary.main}`};
`;

// //* leverages both local styled props and global mui theme props.
