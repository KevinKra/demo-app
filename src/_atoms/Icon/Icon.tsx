import { styled } from "@mui/material";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

export type IIcon = "github" | "google" | "email";

interface IStyledIcon extends Omit<FontAwesomeIconProps, "icon"> {
  icon: IIcon;
}

const renderIcon: FC<IStyledIcon> = ({ ...args }) => {
  const setIcon = (icon: IconDefinition) => (
    <FontAwesomeIcon {...args} icon={icon} />
  );

  switch (args.icon) {
    case "google":
      return setIcon(faGoogle);
    case "github":
      return setIcon(faGithub);
    case "email":
      return setIcon(faEnvelope);
    default:
      return setIcon(faGoogle);
  }
};

const StyledIcon = ({ ...args }: IStyledIcon): JSX.Element => {
  return <Wrapper>{renderIcon(args)}</Wrapper>;
};

export default StyledIcon;

const Wrapper = styled("div")``;
