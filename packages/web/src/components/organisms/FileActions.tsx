import Icon from "@chakra-ui/icon";

import { AiOutlineDelete, AiOutlineSearch, AiOutlineUpload } from "react-icons/ai";

import { Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { openImageDialog } from "@utils/openImageDialog";

const FileActions = () => {
  const onClickUpload = () => {
    openImageDialog();
  };

  return (
    <Flex gridGap="2">
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} />
        <MenuList>
          <MenuItem icon={<AiOutlineUpload />} onClick={onClickUpload}>
            Subir Archivo
          </MenuItem>
          <MenuItem icon={<AiOutlineDelete />}>Borrar Todo</MenuItem>
        </MenuList>
      </Menu>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={AiOutlineSearch} w={6} h={6} color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Busca por el nombre..." />
      </InputGroup>
    </Flex>
  );
};

export default FileActions;
