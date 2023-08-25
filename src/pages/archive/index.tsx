import {
  FloatContainer,
  FloatContainerOverlay,
  SubTitle,
} from "../../components/common";
import { MapBox } from "../../components/world";

import { Box } from "@chakra-ui/react";

const ArchivePage = () => {
  return (
    <Box>
      <MapBox />
      <FloatContainerOverlay />
      <FloatContainer>
        <SubTitle title="Archive" />
      </FloatContainer>
    </Box>
  );
};

export default ArchivePage;
