import { Card, Text, rem } from "@mantine/core";
import { TablerIcon } from "../../utils/types";
import classes from "./index.module.css";

export default function FeaturesCard({
  feature,
}: {
  feature: {
    title: string;
    icon: TablerIcon;
    description: string;
    bg: string;
  };
}) {
  return (
    <Card
      bg={feature.bg}
      c="white"
      key={feature.title}
      shadow="md"
      radius="lg"
      className={classes.card}
      padding="xl"
      h="100%"
    >
      <feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" mt="sm">
        {feature.description}
      </Text>
    </Card>
  );
}
