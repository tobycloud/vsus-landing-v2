import { Container, Grid } from "@mantine/core";
import { IconCode } from "@tabler/icons-react";
import FeaturesCard from "../../../components/FeaturesCard";

export default function Features() {
  const mockdata = [
    {
      title: "[Placeholder Title]",
      description: "[Placeholder Description]",
      icon: IconCode,
      bg: "#230088",
    },
    {
      title: "Integrated Code Editor",
      description:
        "Enhance your coding with our integrated editor. Code from everywhere on our powerful servers with a smooth experience.",
      icon: IconCode,
      bg: "#006BCD",
    },
    {
      title: "[Placeholder Title]",
      description: "[Placeholder Description]",
      icon: IconCode,
      bg: "#00AFB8",
    },
  ];

  return (
    <Container size="lg" mt="calc(var(--mantine-spacing-xl) * 3)">
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }} grow>
        {mockdata.map((feature) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <FeaturesCard feature={feature} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
