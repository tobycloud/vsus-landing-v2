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
import classes from "./index.module.css";

export default function AreYouReady() {
  return (
    <Center>
      <Container
        size="lg"
        w="100%"
        mt="calc(var(--mantine-spacing-xl) * 3)"
        style={{
          borderRadius: "var(--mantine-radius-lg)",
        }}
        py="calc(var(--mantine-spacing-xl) * 2)"
        mx="xl"
        className={classes.ayrBox}
      >
        <Center>
          <Flex direction="column" align="center">
            <Text ta="center" fz="xl" c="white" mb="lg">
              Are you Ready?
            </Text>
            <Title ta="center">Be a Part of the Innovation</Title>
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
    </Center>
  );
}
