import { Heading } from "@chakra-ui/react";

type subTitleProps = {
  title: string;
};

export const SubTitle = ({ title }: subTitleProps) => {
  return <Heading>{title}</Heading>;
};
