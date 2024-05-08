import { Button, Center, Container, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { presets } from "react-text-transition";
import TextTransition from "react-text-transition/lib/components/TextTransition";

export default function HeroHeader() {
  const isMobile = useMediaQuery("(max-width: 62em)", true);

  const smallHeader = useMediaQuery("(max-width: 390px)");

  const TEXTS = ["from anywhere", "at any time", "from any device"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Container size="lg" mt="calc(var(--mantine-spacing-xl) * 3)" w="100%">
      <Title fz={smallHeader ? "45" : isMobile ? "50" : "70"}>
        VM-like coding environments, accessible{" "}
        <TextTransition
          springConfig={presets.stiff}
          inline
          style={{
            color: "#04ffff",
            width: "max-content",
          }}
          translateValue="75%"
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </Title>
      <Text mt="xl" fz="lg">
        Unlock the freedom to code with{" "}
        <Text component="span" inherit fw="bold">
          vSuS
        </Text>
        . Our platform offers VM-like coding environments accessible across
        devices, empowering you to code wherever inspiration strikes.
      </Text>
      <Center mt="calc(var(--mantine-spacing-xl) * 1.5)" mb="md">
        <Button
          color="#00AFB8"
          variant="filled"
          radius="xl"
          size="lg"
          component={Link}
          to="https://dashboard.vsus.app"
        >
          Get Started for Free
        </Button>
      </Center>
    </Container>
  );
}
