import { FC } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  select?: boolean;
  onClick: () => void;
};

const ItemSidebar: FC<Props> = ({ children, icon, onClick, select }) => (
  <Button
    width="100%"
    height="48px"
    px="1em"
    color={select ? "gray.300" : "gray.700"}
    bgColor={select ? "gray.800" : "gray.900"}
    borderRadius="0"
    onClick={onClick}
    display="grid"
    justifyItems="flex-start"
    gridTemplateColumns="40px 1fr"
    leftIcon={<Icon w={6} h={6} as={icon} />}
    _focus={{
      boxShadow: "none"
    }}
    _hover={{
      bgColor: !select && "gray.800",
      color: !select && "gray.300"
    }}
    _active={{
      bgColor: "gray.700"
    }}
  >
    {children}
  </Button>
);

export default ItemSidebar;
