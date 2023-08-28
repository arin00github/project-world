import { useEffect } from "react";

import {
  FloatContainer,
  FloatContainerOverlay,
  SubTitle,
} from "../../components/common";
import { MapBox } from "../../components/world";

import { Box } from "@chakra-ui/react";

const ArchivePage = () => {
  const testAPI = async () => {
    const bodyData = {
      database_id: "54e82072fbff4590a759c86d86670d05",
    };
    const res = await fetch(
      "https://project-world-archive.teru325.workers.dev",
      {
        body: JSON.stringify(bodyData),
        method: "GET",
      },
    );
    const data = await res.json();
    console.log("data", data);
  };
  useEffect(() => {
    testAPI();
  }, []);
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
