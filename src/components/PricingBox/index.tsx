import { Box, Button, Flex, Group, Text, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { PricingBoxType } from "../../utils/types";

const differentFeatures: string[] = [
  "vCPUs up to ",
  "vRAMs up to ",
  "Packages up to ",
  "CI/CD Jobs up to ",
  "Deployments up to ",
  "Volume Capacity up to ",
  "CDN up to ",
];

const defaultFeatures: string[] = [
  "Unlimited bandwidth",
  "Online Visual Studio Code",
  "Online Markdown Editor",
  "Online Chat",
  "Always On",
  "SSH, HTTP Expose",
];

export default function PricingBox({
  title,
  topColor,
  bottomColor,
  borderColor,
  price,
  description,
  features,
}: PricingBoxType) {
  return (
    <Box
      mx="auto"
      w={340}
      style={{
        borderRadius: "25px",
        background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`,
        border: `1px solid ${borderColor}`,
        boxShadow: `0 0 12px 1px ${borderColor}`,
      }}
      py="xl"
      px="xl"
    >
      <Flex direction="column" align="center">
        <Title fw="600">{title}</Title>
        <Text fz="xl" mt="lg">
          <Title component="span" fz="45">
            {price}
          </Title>
          {price != "Custom" ? "/mo" : ""}
        </Text>
        <Text mt="lg">{description}</Text>
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
                {features[index]}
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
