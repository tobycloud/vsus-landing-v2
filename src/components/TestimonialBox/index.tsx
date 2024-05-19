import { Avatar, Box, Center, Flex, Text, Title } from "@mantine/core";
import { TesimonialType } from "../../utils/types";

export default function TestimonialBox({
  avatar,
  name,
  position,
  review,
}: TesimonialType) {
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
          <Avatar size="150px" mb="lg" src={avatar} />
          <Title order={2} mb="sm" ta="center">
            {name}
          </Title>
          <Text c="#9f9f9f" ta="center">
            {position}
          </Text>
          <Text mt="xl" ta="center">
            {review}
          </Text>
        </Flex>
      </Center>
    </Box>
  );
}
