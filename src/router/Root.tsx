import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

type menuType = {
  url: string;
  id: string;
  label: string;
};

const constMenu: menuType[] = [
  { url: "/world-map", id: "world-map", label: "world" },
  { url: "/archive-room", id: "achive-room", label: "achive room" },
  { url: "/globe-map", id: "globe-map", label: "globe" },
];

const Root = () => {
  const navigator = useNavigate();

  const moveUrl = (urlString: string) => {
    navigator(urlString);
  };
  return (
    <Box>
      <Box
        boxShadow={"0px 7px 18px rgba(0, 0, 0, 0.1)"}
        width={"240px"}
        pos="fixed"
        top={"40px"}
        left={0}
        bottom={"40px"}
        borderRadius={`0px 12px 12px 0px`}
        zIndex={1000}
        background={"white"}
      >
        <Flex flexDir={"column"}>
          {constMenu.map((menu) => {
            return (
              <Box
                key={menu.id}
                onClick={() => moveUrl(menu.url)}
                px={30}
                h={"48px"}
                lineHeight={"48px"}
                _hover={{ bg: "blue.400", color: "white", cursor: "pointer" }}
              >
                {menu.label}
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Root;
