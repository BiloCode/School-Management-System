import { Heading, Box, Text } from "@chakra-ui/react";
import { memo } from "react";

const SharedHeader = () => (
  <Box borderWidth="1px" borderRadius="5px" py="1em" px="2em">
    <Heading size="md">Area Compartida</Heading>
    <Text color="gray.500" fontSize="15px">
      10 elementos compartidos
    </Text>
  </Box>
);

export default memo(SharedHeader);
