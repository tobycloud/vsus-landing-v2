import { Flex, Text, Title } from "@mantine/core";

export default function OffersNumber({
  offer,
}: {
  offer: { number: string; title: string };
}) {
  return (
    <Flex direction="column" align="center">
      <Title c="#04FFFF" fz="100px">
        {offer.number}+
      </Title>
      <Text fz="calc(var(--mantine-font-size-xs) * 2)">{offer.title}</Text>
    </Flex>
  );
}
