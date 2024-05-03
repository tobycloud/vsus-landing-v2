import {
  Button,
  Center,
  Container,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function AreYouReady() {
  return (
    <Container
      size="lg"
      w="100%"
      mt="calc(var(--mantine-spacing-xl) * 3)"
      style={{
        background:
          "linear-gradient(135deg, rgba(35,0,136,1) 20%, rgba(4,255,255,1) 100%)",
        borderRadius: "var(--mantine-radius-lg)",
      }}
      py="calc(var(--mantine-spacing-xl) * 2)"
    >
      <Center>
        <Flex direction="column" align="center">
          <Text ta="center" fz="xl" c="white" mb="lg">
            Are you Ready?
          </Text>
          <Title>Be a Part of the Innovation</Title>
          <Button
            color="black"
            variant="white"
            radius="xl"
            size="md"
            component={Link}
            to="https://dashboard.vsus.app"
            mt="xl"
          >
            <Group gap="xs">
              <Text fw="600">Get Started</Text>
              <IconArrowRight />
            </Group>
          </Button>
        </Flex>
      </Center>
    </Container>
  );
}
