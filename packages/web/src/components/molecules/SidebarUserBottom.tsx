import { Avatar } from "@chakra-ui/avatar";
import { Box, Heading } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";

import LigthText from "@atoms/LigthText";

const SidebarUserBottom = () => (
  <Box
    px="1em"
    cursor="pointer"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    <Box display="flex" gridGap="1em" alignItems="center">
      <Avatar
        w="40px"
        h="40px"
        src="https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-thumbnail.png"
      />
      <Box>
        <Heading size="xs" color="gray.300">
          Billy Paredes Aycho
        </Heading>
        <LigthText>Profesor(a)</LigthText>
      </Box>
    </Box>
    <ChevronRightIcon color="gray.300" w={6} h={6} />
  </Box>
);

export default SidebarUserBottom;
