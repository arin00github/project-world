import { Box } from "@chakra-ui/react";

export const FloatContainerOverlay = () => {
  return (
    <Box
      w={"100%"}
      h={`100vh`}
      bg="#82828281"
      zIndex={500}
      pos={"fixed"}
      top={0}
      left={0}
    />
  );
};
