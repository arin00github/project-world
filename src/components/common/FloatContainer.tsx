import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

type FloatContainerProps = {
  children: ReactNode;
};

export const FloatContainer = ({ children }: FloatContainerProps) => {
  return (
    <Box
      pos={"fixed"}
      top={10}
      left={280}
      w={`80%`}
      bottom={10}
      bg={"white"}
      zIndex={700}
      borderRadius={"12px"}
    >
      <Box p={10}>{children}</Box>
    </Box>
  );
};
