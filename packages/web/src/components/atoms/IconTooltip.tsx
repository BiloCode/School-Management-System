import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC } from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  icon: IconType;
  ariaLabel: string;
  disabled?: boolean;
  onClick?: () => void;
};

const IconTooltip: FC<Props> = ({ label, ariaLabel, disabled, icon: Icon, onClick }) => (
  <Tooltip isDisabled={disabled} label={label}>
    <IconButton aria-label={ariaLabel} onClick={onClick} icon={<Icon />} />
  </Tooltip>
);

export default IconTooltip;
