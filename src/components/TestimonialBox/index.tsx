import { Avatar, Box, Center, Flex, Text, Title } from "@mantine/core";

export default function TestimonialBox({
  data,
}: {
  data: {
    avatar: string;
    name: string;
    position: string;
    review: string;
  };
}) {
  return (
    <Box
      bg="#111111"
      style={{ borderRadius: "var(--mantine-radius-lg)" }}
      pt="xl"
      px="xl"
      w={320}
      mt="75px"
      mx="auto"
      h="100%"
    >
      <Center mt="calc((var(--mantine-spacing-xl) + 75px) * -1)">
        <Flex direction="column" align="center">
          <Avatar size="150px" mb="lg" src={data.avatar} />
          <Title order={2} mb="sm" ta="center">
            {data.name}
          </Title>
          <Text c="#9f9f9f" ta="center">
            {data.position}
          </Text>
          <Text mt="xl" ta="center">
            {data.review}
          </Text>
        </Flex>
      </Center>
    </Box>
  );
}
