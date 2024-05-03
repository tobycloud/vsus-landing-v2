import { Button, Center, Container, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export default function HeroHeader() {
  return (
    <Container size="lg" mt="calc(var(--mantine-spacing-xl) * 3)">
      <Title fz="70px">
        VM-like coding environments, accessible{" "}
        <Text component="span" inherit c="#04FFFF">
          from everywhere.
        </Text>{" "}
      </Title>
      <Text mt="xl" fz="lg">
        Unlock the freedom to code with{" "}
        <Text component="span" inherit fw="bold">
          vSuS
        </Text>
        . Our platform offers VM-like coding environments accessible across
        devices, empowering you to code wherever inspiration strikes.
      </Text>
      <Center mt="xl">
        <Button
          color="#00AFB8"
          variant="filled"
          radius="xl"
          size="md"
          component={Link}
          to="https://dashboard.vsus.app"
        >
          Proceed to Dashboard
        </Button>
      </Center>
    </Container>
  );
}
