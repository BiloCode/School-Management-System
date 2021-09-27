import { Avatar } from "@chakra-ui/avatar";
import { memo } from "react";

const CompanyImage = () => (
  <Avatar
    bg="-moz-initial"
    size="2xl"
    src="https://www.colegiosaucache.cl/images/logos/color_nt_m.png"
  />
);

export default memo(CompanyImage);
