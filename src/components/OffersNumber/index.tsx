import { Flex, Text, Title } from "@mantine/core";

export default function OffersNumber({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <Flex direction="column" align="center">
      <Title c="#04FFFF" fz="100px">
        {number}+
      </Title>
      <Text fz="calc(var(--mantine-font-size-xs) * 2)">{title}</Text>
    </Flex>
  );
}
