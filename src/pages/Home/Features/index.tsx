import { Container, Grid } from "@mantine/core";
import {
  IconBolt,
  IconCode,
  IconDeviceDesktopAnalytics,
} from "@tabler/icons-react";
import FeaturesCard from "../../../components/FeaturesCard";

export default function Features() {
  const allData = [
    {
      title: "Spin Up Your Dev Machine",
      description:
        "Access your development environment from any device, anywhere. Unleash your coding potential without limitations.",
      icon: IconBolt,
      bg: "#230088",
    },
    {
      title: "Integrated Code Editor",
      description:
        "Enhance your coding with our integrated editor. Code from anywhere on our powerful servers with a smooth experience.",
      icon: IconCode,
      bg: "#006BCD",
    },
    {
      title: "Isolated Workspaces",
      description:
        "Maintain pristine environments for each project. Isolate dependencies and configurations for a clean workflow.",
      icon: IconDeviceDesktopAnalytics,
      bg: "#00AFB8",
    },
  ];

  return (
    <Container size="lg" mt="xl3">
      <Grid gutter={{ base: 30, md: "xl" }} grow>
        {allData.map((feature) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={feature.title}>
            <FeaturesCard feature={feature} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
