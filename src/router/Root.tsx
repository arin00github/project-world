import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

type menuType = {
  url: string;
  id: string;
  label: string;
};

const constMenu: menuType[] = [
  { url: "/world-map", id: "world-map", label: "world" },
  { url: "/achive-room", id: "achive-room", label: "achive room" },
];

const Root = () => {
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
        zIndex={100}
        background={"white"}
      >
        {constMenu.map((menu) => {
          return <Box key={menu.id}>{menu.label}</Box>;
        })}
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Root;
