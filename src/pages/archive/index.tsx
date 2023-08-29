import { useEffect, useMemo, useState } from "react";

import {
  FloatContainer,
  FloatContainerOverlay,
  SubTitle,
} from "../../components/common";
import { MapBox } from "../../components/world";
import { pageUnit } from "../../interfaces/notion-interface";

import { Badge, Box, Button, Flex, Text } from "@chakra-ui/react";

const ArchivePage = () => {
  const [rawData, setRawData] = useState<pageUnit[]>();

  const testAPI = async () => {
    const res = await fetch(
      "https://project-world-archive.teru325.workers.dev/database",
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
            newData[entry[0]] = entry[1].rich_text.length
              ? entry[1].rich_text[0].plain_text
              : "";
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

  const handleClickAPI = async () => {
    const res = await fetch(
      "https://project-world-archive.teru325.workers.dev/pages?country=france_1&post_title=france_history",
      {
        method: "POST",
      },
    );
    const data = await res.json();
    console.log("handleClickAPI data", data.results);
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
        <Button onClick={handleClickAPI}>API POST</Button>
        <Flex flexDir={"column"}>
          {realData?.map((dt, idx) => {
            return (
              <Flex key={`archive_notion_${idx}`}>
                <Text w="120px">{dt["country"]}</Text>
                <Text w="440px">{dt["post_title"]}</Text>
                <Text>
                  {dt["tag"].map((tg: string) => (
                    <Badge key={`archive_notion_${idx}_${tg}`}>{tg}</Badge>
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
