import { Box, Button, Flex, Group, Text, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function PricingBox({
  data,
}: {
  data: {
    title: string;
    topColor: string;
    bottomColor: string;
    borderColor: string;
    price: string;
    description: string;
    features: string[];
  };
}) {
  const differentFeatures = [
    "vCPUs up to ",
    "vRAMs up to ",
    "Packages up to ",
    "CI/CD Jobs up to ",
    "Deployments up to ",
    "Volume Capacity up to ",
    "CDN up to ",
  ];

  const defaultFeatures = [
    "Unlimited bandwidth",
    "Online Visual Studio Code",
    "Online Markdown Editor",
    "Online Chat",
    "Always On",
    "SSH, HTTP Expose",
  ];

  return (
    <Box
      mx="auto"
      w={340}
      style={{
        borderRadius: "25px",
        background: `linear-gradient(180deg, ${data.topColor} 0%, ${data.bottomColor} 100%)`,
        border: `1px solid ${data.borderColor}`,
        boxShadow: `0 0 12px 1px ${data.borderColor}`,
      }}
      py="xl"
      px="xl"
    >
      <Flex direction="column" align="center">
        <Title fw="600">{data.title}</Title>
        <Text fz="xl" mt="lg">
          <Title component="span" fz="45">
            {data.price}
          </Title>
          {data.price != "Custom" ? "/mo" : ""}
        </Text>
        <Text mt="lg">{data.description}</Text>
        <Button
          color="black"
          variant="white"
          radius="xl"
          size="md"
          component={Link}
          to=""
          my="xl"
          w="100%"
        >
          <Text fw="600">Get Started</Text>
        </Button>
        <Box w="100%">
          {differentFeatures.map((feature, index) => (
            <Group gap="xs" mb="xs" key={feature}>
              <IconCheck />
              <Text>
                {feature}
                {data.features[index]}
              </Text>
            </Group>
          ))}
          {defaultFeatures.map((feature) => (
            <Group gap="xs" mb="xs" key={feature}>
              <IconCheck />
              <Text>{feature}</Text>
            </Group>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
