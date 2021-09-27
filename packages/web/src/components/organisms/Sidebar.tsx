import { Box } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/react";

import { HiHome } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";

import ItemSidebar from "@atoms/ItemSidebar";
import SidebarImage from "@molecules/SidebarImage";
import SidebarUserBottom from "@molecules/SidebarUserBottom";

import useNavigation from "@hooks/useNavigation";
import useCurrentPath from "@hooks/useCurrentPath";

const Sidebar = () => {
  const { isCurrentPath } = useCurrentPath();
  const {
    navigateToHome,
    navigateToClassroom,
    navigateToSharedArea,
    navigateToDiaryAssistance
  } = useNavigation();

  const isHome = isCurrentPath("HOME");
  const isClass = isCurrentPath("CLASSROOM");
  const isShared = isCurrentPath("SHARED_AREA");
  const isAssistance = isCurrentPath("ASSISTANCE");

  return (
    <Box bg="gray.900" h="100vh">
      <Grid h="100%" gridTemplateRows="1fr 64px">
        <Box overflow="auto" display="flex" flexDirection="column" alignItems="center">
          <SidebarImage />
          <Box w="100%">
            <ItemSidebar icon={HiHome} select={isHome} onClick={navigateToHome}>
              Dashboard
            </ItemSidebar>
            <ItemSidebar
              icon={AiFillFolderOpen}
              select={isShared}
              onClick={navigateToSharedArea}
            >
              Area Compartida
            </ItemSidebar>
            <ItemSidebar
              icon={SiGoogleclassroom}
              select={isClass}
              onClick={navigateToClassroom}
            >
              Mi aula
            </ItemSidebar>
            <ItemSidebar
              icon={BsCalendar}
              select={isAssistance}
              onClick={navigateToDiaryAssistance}
            >
              Asistencia Escolar
            </ItemSidebar>
          </Box>
        </Box>
        <SidebarUserBottom />
      </Grid>
    </Box>
  );
};

export default Sidebar;
