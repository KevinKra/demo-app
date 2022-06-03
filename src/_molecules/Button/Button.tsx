import { styled, Typography } from "@mui/material";
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
    <Wrapper {...args}>
      {icon && <StyledIcon icon={icon} size="lg" />}
      {text}
    </Wrapper>
  );
};

export default StyledButton;

const Wrapper = styled(Button)`
  text-transform: none;
`;
