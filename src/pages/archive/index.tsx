import { useEffect, useMemo, useState } from "react";

import {
  FloatContainer,
  FloatContainerOverlay,
  SubTitle,
} from "../../components/common";
import { MapBox } from "../../components/world";
import { pageUnit } from "../../interfaces/notion-interface";

import { Badge, Box, Flex, Text } from "@chakra-ui/react";

const ArchivePage = () => {
  const [rawData, setRawData] = useState<pageUnit[]>();

  const testAPI = async () => {
    const res = await fetch(
      "https://project-world-archive.teru325.workers.dev/",
    );
    const data = await res.json();
    console.log("data", data.results);
    setRawData(data.results);
  };

  const realData = useMemo(() => {
    if (rawData) {
      return rawData.map((dt) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newData: any = {};
        Object.entries(dt.properties).forEach((entry) => {
          if (entry[1].multi_select) {
            newData[entry[0]] = entry[1].multi_select.map(
              (select) => select.name,
            );
          } else if (entry[1].rich_text) {
            newData[entry[0]] = entry[1].rich_text[0].plain_text;
          } else if (entry[1].title) {
            newData[entry[0]] = entry[1].title[0].plain_text;
          } else {
            newData[entry[0]] = "";
          }
        });
        return newData;
      });
    } else {
      return null;
    }
  }, [rawData]);
  console.log("realData", realData);

  useEffect(() => {
    testAPI();
  }, []);
  return (
    <Box>
      <MapBox />
      <FloatContainerOverlay />
      <FloatContainer>
        <SubTitle title="Archive" />
        <Flex flexDir={"column"}>
          {realData?.map((dt) => {
            return (
              <Flex>
                <Text w="120px">{dt["country"]}</Text>
                <Text w="230px">{dt["post_title"]}</Text>
                <Text>
                  {dt["tag"].map((tg: string) => (
                    <Badge>{tg}</Badge>
                  ))}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </FloatContainer>
    </Box>
  );
};

export default ArchivePage;
