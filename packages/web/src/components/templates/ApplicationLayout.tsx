import { FC } from "react";
import { Box, Container, Grid } from "@chakra-ui/react";

import Sidebar from "@organisms/Sidebar";

const ApplicationLayout: FC = ({ children }) => (
  <Grid gridTemplateColumns="300px 1fr">
    <Sidebar />
    <Box h="100vh" overflow="auto">
      <Container py="1em" maxW="container.xl">
        {children}
      </Container>
    </Box>
  </Grid>
);

export default ApplicationLayout;
