import { Grid } from "@chakra-ui/layout";

import FileTable from "@organisms/FileTable";
import FileActions from "@organisms/FileActions";
import SharedHeader from "@molecules/SharedHeader";
import ApplicationLayout from "@templates/ApplicationLayout";

const SharedArea = () => (
  <ApplicationLayout>
    <Grid rowGap="2em">
      <SharedHeader />
      <Grid rowGap="1em">
        <FileActions />
        <FileTable />
      </Grid>
    </Grid>
  </ApplicationLayout>
);

export default SharedArea;
