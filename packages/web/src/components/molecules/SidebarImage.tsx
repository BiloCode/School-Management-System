import { memo } from "react";
import { Box } from "@chakra-ui/layout";

import CompanyImage from "@atoms/CompanyImage";

const SidebarImage = () => (
  <Box py="2em">
    <CompanyImage />
  </Box>
);

export default memo(SidebarImage);
